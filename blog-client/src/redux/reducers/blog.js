import * as types from '../actions/types';

const initialState = {
  posts: [],
  currentBlog: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return {
        loading: true,
        posts: [],
      };
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case types.FETCH_POSTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case types.FETCH_SINGLE_POST_REQUEST:
      return {
        loading: true,
        posts: [],
      };
    case types.FETCH_SINGLE_POST_SUCCESS:
      return {
        ...state,
        currentBlog: action.payload,
        loading: false,
      };
    case types.FETCH_SINGLE_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export { postReducer };
