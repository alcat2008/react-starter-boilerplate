import { createAction } from 'redux-actions';
import { INCREASE, DECREASE, INCREASE_ASYNC } from '../constant/dictActions';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC);
