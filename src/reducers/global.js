import * as types from '../constant/dictActions';

const initialState = {
  isInit: false,
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case types.INIT_APP:
      return {
        ...state,
        ...action.payload,
        isInit: true,
      };
    default:
      return state;
  }
}
