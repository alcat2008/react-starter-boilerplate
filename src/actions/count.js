import { createAction } from 'redux-actions';
import { INCREASE, DECREASE } from '../constant/dictActions';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
