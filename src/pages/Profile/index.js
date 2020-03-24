import React from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextData from '../../components/TextData';

import { logout } from '../../store/modules/auth/actions';
import logo from '../../assets/avatar.png';

import {
  Container,
  Avatar,
  Info,
  TextInfo,
  Button,
  ButtonText,
} from './styles';

import Header from '../../components/Header';
import Background from '../../components/Background';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }
  return (
    <>
      <Header title="Meu perfil" />
      <Background>
        <Container>
          <Avatar source={logo} />
          <Info>
            <TextData data={profile} />
            <Icon name="account-outline" size={20} color="#333" />
            <TextInfo>{profile.name}</TextInfo>

            <Icon name="account-outline" size={20} color="#333" />
            <TextInfo>Roosevelt de Souza</TextInfo>

            <Icon name="account-outline" size={20} color="#333" />
            <TextInfo>Roosevelt de Souza</TextInfo>

            <Icon name="account-outline" size={20} color="#333" />
            <TextInfo>Roosevelt de Souza</TextInfo>
          </Info>
          <Button onPress={handleLogout}>
            <ButtonText>Sair</ButtonText>
          </Button>
        </Container>
      </Background>
    </>
  );
}
