import { actions, TARGETS } from '@redux/profile/actions';
import ProfileReducer, { initialState } from '@redux/profile/reducer';

const MOCKED_DATA = {
  username: 'hola5',
  isFollow: false
};

const profileActions = {
  followUser: {
    type: actions.FOLLOW_USER,
    target: TARGETS.FOLLOW_USER
  },
  followUserSuccess: {
    type: actions.FOLLOW_USER_SUCCESS,
    target: TARGETS.FOLLOW_USER,
    payload: MOCKED_DATA
  },
  followUserFailure: {
    type: actions.FOLLOW_USER_FAILURE,
    target: TARGETS.FOLLOW_USER,
    payload: true
  }
};

describe('case profileReducer', () => {
  test('test FOLLOWUSER_INIT', () => {
    expect(ProfileReducer(undefined, profileActions.followUser)).toMatchObject({
      ...initialState,
      followUserLoading: true
    });
  });
  test('test FOLLOWUSER_SUCCESS', async () => {
    expect(await ProfileReducer(undefined, profileActions.followUserSuccess)).toMatchObject({
      ...initialState,
      followUser: MOCKED_DATA
    });
    expect(await ProfileReducer(undefined, profileActions.followUserSuccess)).not.toBeNull();
  });
  test('test FOLLOWUSER_FAILURE ', async () => {
    expect(await ProfileReducer(undefined, profileActions.followUserFailure)).toMatchObject({
      ...initialState,
      followUserError: true
    });
  });
});
