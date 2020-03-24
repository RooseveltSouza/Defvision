import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Sign from './routes/Sign.routes';
import App from './routes/App.routes';
import Details from './pages/Details';

const Stack = createStackNavigator();

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);
  return (
    <NavigationContainer>
      {signed ? (
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS,
          }}
          mode="modal"
          headerMode="none"
          initialRouteName="Home">
          <Stack.Screen name="Home" component={App} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator headerMode="none" initialRouteName="Sign">
          <Stack.Screen name="Sign" component={Sign} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
