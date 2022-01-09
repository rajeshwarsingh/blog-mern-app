import * as types from './types';
import * as api from '../../api';

export const fetchSingleComment = id => async dispatch => {
  try {
    dispatch({ type: types.FETCH_SINGLE_COMMENT_REQUEST });
    const { data } = await api.fetchSingleComment(id);
    dispatch({ type: types.FETCH_SINGLE_COMMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.FETCH_SINGLE_COMMENT_FAIL, payload: error.message });
  }
};

export const createComment = comment => async dispatch => {
  try {
    dispatch({ type: types.CREATE_COMMENT_REQUEST, payload: comment });
    const { data } = await api.createComment(comment);
    dispatch({
      type: types.CREATE_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: types.CREATE_COMMENT_FAIL, payload: error.message });
  }
};

export const updateComment = (id, comment) => async dispatch => {
  try {
    dispatch({ type: types.UPDATE_COMMENT_REQUEST });
    const { data } = await api.updateComment(id, comment);
    dispatch({
      type: types.UPDATE_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: types.UPDATE_COMMENT_FAIL, payload: error.message });
  }
};