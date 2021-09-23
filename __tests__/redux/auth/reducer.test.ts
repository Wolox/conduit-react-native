import { actions, TARGETS } from '@redux/auth/actions';
import AuthReducer, { initialState } from '@redux/auth/reducer';
import { CurrentUser, UserResponse } from '@interfaces/authInterfaces';

const MOCKED_DATA: CurrentUser = {
  bio: 'Esta es una Biografía típica de un usuario !',
  email: 'hola5@hola.com',
  id: 209,
  image:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjA5LCJleHAiOjE2MzY5MDMzNzZ9.zN6uihJ-GSArwOpwFUHqLOgNGfTsyIJtoVB4JLlMlTQ',
  username: 'hola5'
};
const MOCKED_USER: UserResponse = {
  user: MOCKED_DATA
};

export const authActions = {
  login: {
    type: actions.LOGIN,
    target: TARGETS.CURRENT_USER
  },
  loginSuccess: {
    type: actions.LOGIN_SUCCESS,
    target: TARGETS.CURRENT_USER,
    payload: MOCKED_USER
  },
  loginFailure: {
    type: actions.LOGIN_FAILURE,
    target: TARGETS.CURRENT_USER,
    payload: true
  },
  logout: {
    type: actions.LOGOUT,
    target: TARGETS.CURRENT_USER
  }
};
describe('case LOGIN', () => {
  test('test Login', () => {
    expect(AuthReducer(undefined, authActions.login)).toMatchObject({
      ...initialState,
      currentUserLoading: true
    });
  });
  test('test LOGIN_SUCCESS', async () => {
    expect(await AuthReducer(undefined, authActions.loginSuccess)).toMatchObject({
      ...initialState,
      currentUser: MOCKED_USER
    });
    expect(await AuthReducer(undefined, authActions.loginSuccess)).not.toBeNull();
  });
  test('test LOGIN_FAILURE ', async () => {
    expect(await AuthReducer(undefined, authActions.loginFailure)).toMatchObject({
      ...initialState,
      currentUserError: true
    });
  });
  test('test LOGOUT', async () => {
    expect(await AuthReducer(undefined, authActions.logout)).toMatchObject({
      ...initialState
    });
    expect(await AuthReducer(undefined, authActions.logout)).not.toBeNull();
  });
});
