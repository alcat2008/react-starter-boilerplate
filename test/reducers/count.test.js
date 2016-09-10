import expect from 'expect';
import reducer from '../../src/reducers/count';

describe('count reducer', () => {
  it('should return the initial state', () => {
    const expectedReducer = {
      number: 1,
    };
    expect(reducer(undefined, {})).toEqual(expectedReducer);
  });

  it('should increase', () => {
    const action = {
      type: 'INCREASE',
      payload: 3,
    };
    const originReducer = {
      number: 1,
    };
    const expectedReducer = {
      number: 4,
    };
    expect(reducer(originReducer, action)).toEqual(expectedReducer);
  });
});
