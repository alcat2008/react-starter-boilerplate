import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import global from './global';
import count from './count';

export default combineReducers({
  routing: routerReducer,
  global,
  count,
});
