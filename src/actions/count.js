import { createAction } from 'redux-actions';
import { INCREASE, DECREASE } from '../constant/dictActions';

/**
 * Randomly simulate network failures.
 * It is useful to enable this during development to make sure our app works
 * in real-world conditions.
 */
function isNetworkFailure() {
  const chanceOfFailure = 0;  // 0..1
  return Math.random() < chanceOfFailure;
}

/**
 * Helper for the other functions in this file.
 * Simulates a short delay and then returns a provided value or failure.
 * This is just a dummy example. Normally we'd make a HTTP request,
 * see http://facebook.github.io/react-native/docs/network.html
 */
// eslint-disable-next-line
function _makeSimulatedNetworkRequest(getValue) {
  const durationMs = 400;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNetworkFailure()) {
        reject(new Error('Network failure'));
      } else {
        getValue(resolve, reject);
      }
    }, durationMs);
  });
}

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = count => dispatch => {
  setTimeout(() => {
    dispatch(increase(count));
  }, 1000);
};
export const increaseByRequest = count =>
  _makeSimulatedNetworkRequest((resolve, reject) => { // eslint-disable-line no-unused-vars
    resolve(increase(count));
  });
