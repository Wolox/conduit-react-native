import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import actionCreators, { actions, TARGETS } from '@redux/favorites/actions';
import { initialState } from '@redux/favorites/reducer';
import { CurrentUser, UserResponse } from '@interfaces/authInterfaces.ts';

const middleware = [thunk, fetchMiddleware];
const mockStore = configureStore(middleware);
const store = mockStore(initialState);

describe('case FavoritesActions', () => {
  beforeEach(() => {
    store.clearActions();
    jest.useFakeTimers();
  });
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
  test('test GET_FAVORITES_ARTICLES', () => {
    store.dispatch(actionCreators.getFavoritesArticles(MOCKED_USER));
    expect(store.getActions()).toEqual([
      { target: TARGETS.FAVORITES_ARTICLES_LIST, type: actions.FAVORITES_ARTICLES_LIST }
    ]);
    expect(store.getActions()).not.toBeNull();
    expect(store.getActions()).toBeDefined();
  });
  test('test GET_FAVORITES_ARTICLES_SUCCESS', () => {
    store.dispatch(actionCreators.getFavoritesArticles(MOCKED_USER)).then(async () => {
      expect(await store.getActions()).toEqual([
        { target: TARGETS.CREATE_COMMENT, type: actions.FAVORITES_ARTICLES_LIST_SUCCESS }
      ]);
      expect(store.getActions()).not.toBeNull();
      expect(store.getActions()).toBeDefined();
    });
  });
});
