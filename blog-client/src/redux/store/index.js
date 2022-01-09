import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { postReducer } from '../reducers/blog';
import { commentReducer } from '../reducers/comment';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
