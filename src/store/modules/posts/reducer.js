import { produce } from 'immer';

const INITIAL_STATE = {
  error: false,
  loading: false,
  postList: [],
};

export default function posts(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@post/LOAD_POSTS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@post/LOAD_POSTS_SUCESS': {
        draft.postList = action.payload.listPost;
        draft.loading = false;
        draft.error = false;
        break;
      }
      case '@post/LOAD_POSTS_FAILURE': {
        draft.error = true;
        draft.loading = false;
        break;
      }
      case '@post/CREATE_POST_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@post/CREATE_POST_SUCESS': {
        draft.loading = false;
        const post = action.payload.post;
        draft.postList.push({ post });
        break;
      }

      case '@post/CREATE_POST_FAILURE': {
        draft.loading = false;
        break;
      }
      default: {
        return;
      }
    }
  });
}
