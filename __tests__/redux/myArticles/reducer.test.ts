import { actions, TARGETS } from '@redux/myArticles/actions';
import MyArticlesReducer, { initialState } from '@redux/myArticles/reducer';
import { CurrentUser } from '@interfaces/authInterfaces.ts';

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
const myArticlesActions = {
  getMyArticles: {
    type: actions.MY_ARTICLES,
    target: TARGETS.MY_ARTICLES
  },
  getMyArticlesSuccess: {
    type: actions.MY_ARTICLES_SUCCESS,
    target: TARGETS.MY_ARTICLES,
    payload: MOCKED_DATA
  },
  getMyArticlesFailure: {
    type: actions.MY_ARTICLES_FAILURE,
    target: TARGETS.MY_ARTICLES,
    payload: true
  }
};

describe('case myArticlesReducer', () => {
  test('test GET_MY_ARTICLES_INIT', () => {
    expect(MyArticlesReducer(undefined, myArticlesActions.getMyArticles)).toMatchObject({
      ...initialState,
      myArticlesLoading: true
    });
  });
  test('test GET_MY_ARTICLES_SUCCESS', async () => {
    expect(await MyArticlesReducer(undefined, myArticlesActions.getMyArticlesSuccess)).toMatchObject({
      ...initialState,
      myArticles: MOCKED_DATA
    });
    expect(await MyArticlesReducer(undefined, myArticlesActions.getMyArticlesSuccess)).not.toBeNull();
  });
  test('test GET_MY_ARTICLES_FAILURE ', async () => {
    expect(await MyArticlesReducer(undefined, myArticlesActions.getMyArticlesFailure)).toMatchObject({
      ...initialState,
      myArticlesError: true
    });
  });
});
