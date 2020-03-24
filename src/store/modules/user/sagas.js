import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { createUserSucess, createUserFailure } from './actions';
import api from '../../../services/api';

export function* CreateUser({ payload }) {
  try {
    const { name, address, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      endereco: address,
      email,
      password,
    });

    Alert.alert('Parabéns', 'Conta criada com sucesso');
    yield put(createUserSucess());
  } catch (error) {
    Alert.alert('ERROR', error.response.data.error);
    yield put(createUserFailure());
  }
}

export default all([takeLatest('@user/CREATE_USER', CreateUser)]);
