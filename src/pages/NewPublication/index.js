import React, { useState, useEffect, useRef } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder-reborn';

import {
  Container,
  ContainerImage,
  ImagePost,
  ContainerIcon,
  ContainerInfo,
  TextInfo,
  Info,
  TextArea,
  ContainerButtons,
  Button,
  ButtonReset,
  ButtonText,
} from './styles';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Input from '../../components/Input';
import { createPostsRequest } from '../../store/modules/posts/actions';

export default function NewPublication({ navigation }) {
  const [post, setPost] = useState(null);
  const [image, setImage] = useState(false);
  const [buttonOpened, setButtonOpened] = useState(false);
  const [coordinates, setCoordinates] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const loading = useSelector(state => state.posts.loading);
  const dispatch = useDispatch();
  const resetRef = useRef();

  useEffect(() => {
    Geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates(coords);
    });
  }, []);

  const imagePickerOptions = {
    title: 'Selecione uma imagem',
    takePhotoButtonTitle: 'Abrir camera',
    chooseFromLibraryButtonTitle: 'Selecionar imagem da galeria',
    cancelButtonTitle: 'Cancelar',
    cameraType: 'back',
  };

  function imagePickerCallback(data) {
    if (data.didCancel) {
      return;
    }

    if (data.error) {
      setImage(false);
      return;
    }

    if (!data.uri) {
      setImage(false);
      return;
    }

    setImage(true);
    setPost(data);
    // console.log(data.latitude);
  }

  async function uploadPost() {
    if (!image || title === '') {
      return;
    }
    const { latitude, longitude } = coordinates;
    const data = new FormData();
    data.append('file', {
      name: post.fileName,
      uri: post.uri,
      type: post.type,
    });

    const ADDRESS = {
      lat: latitude,
      lng: longitude,
    };

    const resp = await Geocoder.geocodePosition(ADDRESS);

    const { streetName, subAdminArea } = resp[0];

    const address = `${streetName}, ${subAdminArea}`;

    await dispatch(
      createPostsRequest(
        data,
        title,
        description,
        address,
        latitude,
        longitude,
      ),
    );

    if (!loading) {
      navigation.navigate('Home');
      setTitle('');
      setDescription('');
      setImage(false);
    }
  }

  function resetData() {
    setImage(false);
    setTitle('');
    setDescription('');
  }

  return (
    <>
      <Header title="Nova publicação" />
      <Background>
        <Container>
          <ContainerImage
            onPress={() =>
              ImagePicker.showImagePicker(
                imagePickerOptions,
                imagePickerCallback,
              )
            }>
            {image ? (
              <ImagePost
                style={{ resizeMode: 'contain' }}
                source={{ uri: post && post.uri }}
              />
            ) : (
              <ContainerIcon>
                <Icon
                  name="camera"
                  color="rgba(255, 255, 255, 0.8)"
                  size={30}
                />
              </ContainerIcon>
            )}
          </ContainerImage>
          <ContainerInfo>
            <TextInfo>Sobre</TextInfo>
            <Info>
              <Input
                publication={true}
                icon="format-title"
                value={title}
                onChangeText={setTitle}
                color={true}
                placeholder="Informe o título"
                placeholderColor={true}
                returnKeyType="next"
                // onSubmitEditing={() => descriptionRef.current.focus()}
              />
              <TextArea
                maxLength={120}
                value={description}
                onChangeText={setDescription}
                placeholder={'Informe a descrição'}
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                underlineColorAndroid={'transparent'}
                style={{ textAlignVertical: 'top' }}
                // ref={descriptionRef}
              />
              <ContainerButtons>
                <Button onPress={uploadPost}>
                  {loading ? (
                    <ActivityIndicator color="#fff" size={15} />
                  ) : (
                    <ButtonText>Enviar publicação</ButtonText>
                  )}
                </Button>
                <ButtonReset reset={true} onPress={resetData} ref={resetRef}>
                  <ButtonText>Limpar dados</ButtonText>
                </ButtonReset>
              </ContainerButtons>
            </Info>
          </ContainerInfo>
        </Container>
      </Background>
    </>
  );
}
