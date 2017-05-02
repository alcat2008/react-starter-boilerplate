import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import count from './count';
import application from './application';

export default combineReducers({
  count,
  application,
  routing: routerReducer
});
