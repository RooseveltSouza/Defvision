import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, TextInfo } from './styles';

export default function TextData({ data }) {
  return (
    <Container>
      <Icon name="account-outline" size={20} color="#333" />
      <TextInfo>{data.name}</TextInfo>
    </Container>
  );
}
