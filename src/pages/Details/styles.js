import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #f4f4f4;
`;

export const Info = styled.View`
  align-self: stretch;
`;

export const InfoUser = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 10px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 7px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 6px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 400px;
`;

export const Separetor = styled.View`
  height: 1px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: #999;
  margin: 15px 10px;
`;

export const InfoPublication = styled.View`
  flex: 1;
  margin: 0 10px;
  /* height: 500px; */
`;

export const TextTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const Title = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #555;
  margin: 20px 0;
  line-height: 24px;
`;
