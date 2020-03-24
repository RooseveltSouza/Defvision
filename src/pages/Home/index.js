import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  List,
  ContainerError,
  MessageError,
  ButtonRefreshing,
} from './styles';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Post from '../../components/Post';
import { loadPostsResquest } from '../../store/modules/posts/actions';

export default function Home() {
  const token = useSelector(state => state.auth.token);
  const posts = useSelector(state => state.posts.postList);
  const loading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    function fetch() {
      if (token) {
        dispatch(loadPostsResquest(token));
      }
    }
    fetch();
  }, []);

  async function load() {
    await dispatch(loadPostsResquest(token));
  }

  function handlePress(itemId) {
    navigation.navigate('Details', {
      id: itemId,
    });
  }

  return (
    <>
      <Header title="Home" />
      <Container>
        <Background>
          <List
            onRefresh={load}
            refreshing={loading}
            data={posts}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => (
              <Post navigate={handlePress} data={item} />
            )}
          />
          {error ? (
            <ContainerError>
              <MessageError>Falha no carregamento. :(</MessageError>
              <ButtonRefreshing>
                <Icon name="refresh" size={40} color="#999" />
              </ButtonRefreshing>
            </ContainerError>
          ) : null}
        </Background>
      </Container>
    </>
  );
}
