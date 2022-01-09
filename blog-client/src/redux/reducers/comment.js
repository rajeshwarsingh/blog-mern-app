import * as types from '../actions/types';

const initialState = {
  comments: [],
  currentComment: null,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_SINGLE_COMMENT_REQUEST:
      return {
        loading: true,
        comments: [],
      };
    case types.FETCH_SINGLE_COMMENT_SUCCESS:
      return {
        ...state,
        currentComment: action.payload,
        loading: false,
      };
    case types.FETCH_SINGLE_COMMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case types.CREATE_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        loading: false,
      };
    case types.CREATE_COMMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.map(comment => {
          return comment._id === action.payload._id ? action.payload : comment;
        }),
        currentComment: action.payload,
        loading: false,
      };
    case types.UPDATE_COMMENT_FAIL:
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

export { commentReducer };
