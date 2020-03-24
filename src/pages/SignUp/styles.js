import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Image = styled(Animatable.Image).attrs({
  animation: 'bounceInDown',
  useDriverNative: true,
})``;

export const Form = styled(Animatable.View).attrs({
  animation: 'lightSpeedIn',
  useDriverNative: true,
})`
  margin-top: 35px;
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const ButtonCriar = styled.TouchableOpacity`
  height: 60px;
  width: 200px;
  border-radius: 30px;
  background: #2d999f;
  elevation: 5;

  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const ButtonTextCriar = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
