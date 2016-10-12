import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import count from './count';

export default combineReducers({
  count,
  routing: routerReducer
});
