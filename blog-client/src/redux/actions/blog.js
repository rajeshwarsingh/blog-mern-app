import * as types from './types';
import * as api from '../../api';

export const fetchBlogs = () => async dispatch => {
  try {
    dispatch({ type: types.FETCH_POSTS_REQUEST });
    const { data } = await api.fetchBlogs();
    dispatch({ type: types.FETCH_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.FETCH_POSTS_FAIL, payload: error.message });
  }
};

export const fetchSingleBlog = id => async dispatch => {
  try {
    dispatch({ type: types.FETCH_SINGLE_POST_REQUEST });
    const { data } = await api.fetchSingleBlog(id);
    dispatch({ type: types.FETCH_SINGLE_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.FETCH_SINGLE_POST_FAIL, payload: error.message });
  }
};