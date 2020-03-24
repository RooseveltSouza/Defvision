import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View).attrs({
  animation: 'bounceIn',
  useNativeDriver: true,
})`
  height: 150px;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  elevation: 5;
  border-radius: 4px;
  margin: 10px 20px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  padding: 15px 10px;
  flex-direction: row;
`;

export const Line = styled.View`
  width: 5px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  height: 150px;
  /* background: #002f53; */
  /* background: #f25d50; */
  /* background: #e98080; */
  background: #f2d59b;
`;

export const ImagePost = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 4px;
  margin-right: 9px;
`;

export const Info = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: space-between;
`;

export const InfoUser = styled.View`
  margin-bottom: 5px;
`;
export const Name = styled.Text`
  font-weight: bold;
  color: #333;
`;
export const Local = styled.Text`
  font-size: 10px;
  color: #999;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 13px;
  color: #666;
`;

export const ButtonDetails = styled.TouchableOpacity`
  /* border: 1px solid #f25d50; */
  /* border: 1px solid #e98080; */
  border: 1px solid #f2d59b;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
export const ButtonText = styled(Animatable.Text).attrs({
  animation: 'pulse',
  iterationCount: 2,
  useDriverNative: true,
})`
  /* color: #f25d50; */
  /* color: #e98080; */
  color: #f2d59b;
  font-weight: bold;
`;
