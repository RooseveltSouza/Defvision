import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import avatarlogo from '../../assets/avatar.png';

import {
  Container,
  Info,
  InfoUser,
  Avatar,
  Name,
  Image,
  Separetor,
  InfoPublication,
  TextTitle,
  Title,
  Description,
} from './styles';
import Header from '../../components/Header';

export default function Details({ route }) {
  const [post, setPost] = useState({});
  const [dataUser, setDataUser] = useState({});
  const [dataImage, setDataImage] = useState({});

  const { id } = route.params;
  const posts = useSelector(state => state.posts.postList);

  useEffect(() => {
    async function fetchPost() {
      const response = posts.find(p => p.id === id);

      const { user, image } = response;

      setPost(response);
      setDataUser(user);
      setDataImage(image);
    }

    fetchPost();
  }, []);

  return (
    <>
      <Header title="Detalhes" />
      <Container>
        <Info>
          <InfoUser>
            <Avatar source={avatarlogo} />
            <Name>{dataUser.name}</Name>
          </InfoUser>
          <Image source={{ uri: dataImage.url }} />
          <Separetor />
          <InfoPublication>
            <Title>{post.title}</Title>
            <Description>{post.description}</Description>
          </InfoPublication>
        </Info>
      </Container>
    </>
  );
}
