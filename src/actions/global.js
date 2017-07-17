
import { createAction } from 'redux-actions';
import * as types from '../constant/dictActions';
import { hidePreloader } from '../utils/preloader';

export const initApp = () => dispatch => {
  // TODO. init app data

  hidePreloader();
  dispatch(createAction(types.INIT_APP)());
};
