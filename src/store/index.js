import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { Cached } from 'App/reducers/cached';
import { LOCAL_STORAGE_NAME } from 'constants/index.js';

import { loadState, saveState, clearState } from './localStorage';

const mergedReducers = {
  Cached
};

// update localStorage
const cachedMiddleware = store => next => action => {
  switch (action.type) {
    case 'SET_CACHED_DATA':
      next(action);
      saveState(store.getState());
      break;
    default:
      next(action);
  }
};

const appReducer = combineReducers(mergedReducers);
const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    // eslint-disable-next-line
    state = action.payload;
    // clear localStorage.
    clearState();
  }
  return appReducer(state, action);
};
const store = createStore(
  rootReducer,
  // get Cached from localStorage
  loadState(LOCAL_STORAGE_NAME),
  composeWithDevTools(applyMiddleware(thunk, cachedMiddleware))
);
// eslint-disable-next-line
export default store;
