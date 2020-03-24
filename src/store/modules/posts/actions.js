export function loadPostsResquest(token) {
  return { type: '@post/LOAD_POSTS_REQUEST', payload: { token } };
}

export function loadPostsSucess(listPost) {
  return {
    type: '@post/LOAD_POSTS_SUCESS',
    payload: { listPost },
  };
}
export function loadPostsFailure() {
  return {
    type: '@post/LOAD_POSTS_FAILURE',
  };
}

export function createPostsRequest(
  data,
  title,
  description,
  address,
  latitude,
  longitude,
) {
  return {
    type: '@post/CREATE_POST_REQUEST',
    payload: {
      data,
      title,
      description,
      address,
      latitude,
      longitude,
    },
  };
}

export function createPostsSucess(post) {
  return {
    type: '@post/CREATE_POST_SUCESS',
    payload: {
      post,
    },
  };
}

export function createPostsFailure() {
  return {
    type: '@post/CREATE_POST_FAILURE',
  };
}
