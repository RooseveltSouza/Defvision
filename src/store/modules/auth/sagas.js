import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { signInSucess, signFailure } from './actions';

export function* SignIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;
    yield put(signInSucess(token, user));
  } catch (error) {
    yield put(signFailure());
    Alert.alert('Falha na autenticação', error.response.data.error);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', SignIn)]);
