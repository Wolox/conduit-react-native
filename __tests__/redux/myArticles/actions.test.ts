import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import actionCreators, { actions, TARGETS } from '@redux/myArticles/actions';
import { initialState } from '@redux/myArticles/reducer';
import { CurrentUser, UserResponse } from '@interfaces/authInterfaces.ts';

const middleware = [thunk, fetchMiddleware];
const mockStore = configureStore(middleware);
const store = mockStore(initialState);

describe('case myArticlesActions', () => {
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
  test('test GET_MY_ARTICLES', () => {
    store.dispatch(actionCreators.getMyArticles(MOCKED_USER));
    expect(store.getActions()).toEqual([{ target: TARGETS.MY_ARTICLES, type: actions.MY_ARTICLES }]);
    expect(store.getActions()).not.toBeNull();
    expect(store.getActions()).toBeDefined();
  });
  test('test GET_MY_ARTICLES_SUCCESS', () => {
    store.dispatch(actionCreators.getMyArticles(MOCKED_USER)).then(async () => {
      expect(await store.getActions()).toEqual([
        { target: TARGETS.MY_ARTICLES, type: actions.MY_ARTICLES_SUCCESS }
      ]);
      expect(store.getActions()).not.toBeNull();
      expect(store.getActions()).toBeDefined();
    });
  });
});
