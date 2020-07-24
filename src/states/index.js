import { combineReducers } from 'redux';

import { reduce as LastActionReducer } from './LastAction';

// Register your redux store under a unique namespace
export const namespace = 'default';

// Combine the reducers
export default combineReducers({
  view: LastActionReducer
});
