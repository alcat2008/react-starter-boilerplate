import { INCREASE, DECREASE } from '../actions/types';

const initialState = {
  number: 1
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + action.payload
      };
    case DECREASE:
      return {
        number: state.number - action.payload
      };
    default:
      return state;
  }
}
