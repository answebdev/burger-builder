// Here, we're not testing any components, so we don't need Enzyme -
// we don't need to render anything.
// We're testing Redux here - we're just testing regular JavaScript code;
// we're testing functions (the reducer function).
// Here, we're testing a reducer.
import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    // State is undefined when the app is first loaded.
    // The action is just an empty object - so specific action.
    // And we expect our state to equal (toEqual) our initial state defined
    // in the reducer function (see 'initialState' in 'auth.js').
    // This is exactly what we test for.
    // It should equal that object.
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/',
    });
  });

  it('should store the token upon login', () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: '/',
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: 'some-token',
          userId: 'some-user-id',
        }
      )
    ).toEqual({
      token: 'some-token',
      userId: 'some-user-id',
      error: null,
      loading: false,
      authRedirectPath: '/',
    });
  });
});
