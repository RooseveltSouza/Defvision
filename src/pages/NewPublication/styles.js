import styled from 'styled-components/native';
import Textarea from 'react-native-textarea';
import { Dimensions } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const ButtonAnimation = Animatable.createAnimatableComponent(BaseButton);

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingVertical: 10,
  },
})`
  flex: 1;
`;

export const ContainerImage = styled(BaseButton)`
  width: 90%;
  height: ${Dimensions.get('window').width / 1.8}px;
  background: rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  border-radius: 4px;
  align-items: center;
`;

export const ImagePost = styled.Image`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').width / 1.8}px;
`;

export const ContainerIcon = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextInfo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  text-align: left;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  width: 90%;
  margin-top: 20px;
`;

export const Info = styled.View`
  width: 100%;
  align-items: center;
`;
export const TextArea = styled(Textarea).attrs({
  containerStyle: {
    height: 180,
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    marginTop: 10,
  },
})`
  height: 170px;
  font-size: 14px;
  color: #777;
  text-align: auto;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 18px;
`;

export const Button = styled(ButtonAnimation).attrs({
  animation: 'bounceInUp',
  useNativeDriver: true,
})`
  background: #f2d59b;
  height: 44px;
  width: ${props => (props.reset ? '125' : '150')}px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const ButtonReset = styled(ButtonAnimation).attrs({
  animation: 'bounceInLeft',
  useNativeDriver: true,
})`
  background: #f2aa9b;
  height: 44px;
  width: 125px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #f4f4f4;
  font-size: 15px;
  font-weight: bold;
`;
