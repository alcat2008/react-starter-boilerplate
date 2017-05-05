import { createAction } from 'redux-actions';
import { INCREASE, DECREASE } from './types';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
