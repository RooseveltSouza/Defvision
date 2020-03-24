import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store';
import Routes from './routes';

export default function Main() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#9BB8F2" barStyle="light-content" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
