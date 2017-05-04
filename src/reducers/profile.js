/**
 * Created by alcat on 04/05/2017.
 */

import * as types from '../constant/dictActions';

const GENERAL_LOADING_TIP = '数据加载中，请稍后 ...';

const initialState = {
  loading: false,
  loadingTip: GENERAL_LOADING_TIP,
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case types.APP_ERROR:
      return {
        ...state,
        loading: true,
        loadingTip: action.payload,
      };
    case types.APP_LOADING_START:
      return {
        ...state,
        loading: true,
        loadingTip: GENERAL_LOADING_TIP,
      };
    case types.APP_LOADING_END:
      return {
        ...state,
        loading: false,
        loadingTip: GENERAL_LOADING_TIP,
      };
    default:
      return state;
  }
}
