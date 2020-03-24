import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../pages/Home';
import NewPublication from '../pages/NewPublication';
import Profile from '../pages/Profile';

const Tab = createMaterialBottomTabNavigator();

const style = {
  // backgroundColor: '#002f53',
  backgroundColor: '#ebf1fd',
};

export default function App() {
  return (
    <Tab.Navigator
      activeColor="#555"
      inactiveColor="rgba(0,0, 0, 0.3)"
      // tabBarColor="#000"
      barStyle={style}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, focused }) => {
            let iconName = focused ? 'home' : 'home-outline';

            return <Icon name={iconName} size={25} color={color} />;
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Nova Publicação',
          tabBarIcon: ({ color, focused }) => {
            let iconName = focused ? 'camera' : 'camera-outline';

            return <Icon name={iconName} size={25} color={color} />;
          },
        }}
        name="NewPublication"
        component={NewPublication}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color, focused }) => {
            let iconName = focused ? 'account' : 'account-outline';

            return <Icon name={iconName} size={25} color={color} />;
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
