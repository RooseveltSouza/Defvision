import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
export const Container = styled.View`
  flex: 1;
`;

export const Avatar = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 65px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 10px;
  padding-left: 10px;
  /* border: 1px solid #999; */
  border-radius: 4px;

  height: 44px;
`;

export const TextInfo = styled.Text`
  font-size: 20px;
  margin-left: 10px;
`;

export const Button = styled(BaseButton)`
  background: #f2aa9b;
  height: 44px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text``;
