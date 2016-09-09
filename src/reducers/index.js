import { combineReducers } from 'redux';
import count from './count';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  count,
  routing: routerReducer
});
