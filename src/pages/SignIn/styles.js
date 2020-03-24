import { Animated } from 'react-native';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Image = styled(Animatable.Image).attrs({
  animation: 'bounceInDown',
  useNativeDriver: true,
})``;

export const Form = styled(Animatable.View).attrs({
  animation: 'fadeInUp',
  useNativeDriver: true,
})`
  margin-top: 50px;
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  margin-top: 20px;
  align-items: center;
`;

export const ButtonTextSignUp = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
