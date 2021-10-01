import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import actionCreators, { actions, TARGETS } from '@redux/profile/actions';
import { initialState } from '@redux/profile/reducer';

const middleware = [thunk, fetchMiddleware];
const mockStore = configureStore(middleware);
const store = mockStore(initialState);

describe('case FavoritesActions', () => {
  beforeEach(() => {
    store.clearActions();
    jest.useFakeTimers();
  });

  const MOCKED_DATA = {
    username: 'hola5',
    isFollow: false
  };

  test('test FOLLOW_USER', () => {
    store.dispatch(actionCreators.followUser(MOCKED_DATA.username, MOCKED_DATA.isFollow));
    expect(store.getActions()).toEqual([{ target: TARGETS.FOLLOW_USER, type: actions.FOLLOW_USER }]);
    expect(store.getActions()).not.toBeNull();
    expect(store.getActions()).toBeDefined();
  });
});
