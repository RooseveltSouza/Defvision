import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  border: none;
  /* background: #f4f4f4; */
  background: #ebf1fd;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const ContainerError = styled.View`
  flex: 1;
`;

export const MessageError = styled.Text`
  color: #999;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonRefreshing = styled(BaseButton)`
  align-items: center;
`;
