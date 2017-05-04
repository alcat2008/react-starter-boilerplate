import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import profile from './profile';
import count from './count';
import application from './application';

export default combineReducers({
  routing: routerReducer,
  profile,
  count,
  application,
});
