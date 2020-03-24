import { call, all, takeLatest, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import {
  loadPostsSucess,
  loadPostsFailure,
  createPostsSucess,
  createPostsFailure,
} from './actions';
import api from '../../../services/api';

function* loadPosts({ payload }) {
  try {
    const { token } = payload;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield call(api.get, 'publish');

    const posts = response.data;
    posts.reverse();

    yield put(loadPostsSucess(posts));
  } catch (error) {
    yield put(loadPostsFailure());
  }
}

function* createPost({ payload }) {
  const { data, title, description, address, latitude, longitude } = payload;

  try {
    yield call(api.post, 'publish', data, {
      params: {
        title,
        description,
        address,
        latitude,
        longitude,
      },
    });

    const response = yield call(api.get, 'publish');

    const posts = response.data;
    posts.reverse();

    yield put(loadPostsSucess(posts));
  } catch (error) {
    Alert.alert('Algo de errado..', error.response.data.error);
    yield put(createPostsFailure());
  }
}

export default all([
  takeLatest('@post/LOAD_POSTS_REQUEST', loadPosts),
  takeLatest('@post/CREATE_POST_REQUEST', createPost),
]);
