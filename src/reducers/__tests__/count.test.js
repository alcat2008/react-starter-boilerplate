
import reducer from '../count';

describe('count reducer', () => {
  const originReducer = {
    number: 5,
  };

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
    const expectedReducer = {
      number: 8,
    };
    expect(reducer(originReducer, action)).toEqual(expectedReducer);
  });

  it('should decrease', () => {
    const action = {
      type: 'DECREASE',
      payload: 3,
    };
    const expectedReducer = {
      number: 2,
    };
    expect(reducer(originReducer, action)).toEqual(expectedReducer);
  });
});
