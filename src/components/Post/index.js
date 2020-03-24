import React from 'react';

import {
  Container,
  ContainerInfo,
  Line,
  ImagePost,
  Info,
  InfoUser,
  Name,
  Local,
  Title,
  Description,
  ButtonDetails,
  ButtonText,
} from './styles';

export default function Post({ data, navigate }) {
  return (
    <Container>
      <Line />
      <ContainerInfo>
        <ImagePost
          source={{
            uri: data.image.url,
          }}
        />
        <Info>
          <InfoUser>
            <Name>{data.user.name}</Name>
            <Local>{data.address_post}</Local>
          </InfoUser>
          <Title>{data.title}</Title>

          <ButtonDetails onPress={() => navigate(data.id)}>
            <ButtonText>Mais informação</ButtonText>
          </ButtonDetails>
        </Info>
      </ContainerInfo>
    </Container>
  );
}
