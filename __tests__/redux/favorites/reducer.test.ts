import { actions, TARGETS } from '@redux/favourites/actions';
import FavoritesReducer, { initialState } from '@redux/favourites/reducer';
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
const favouritesActions = {
  getFavouritesArticles: {
    type: actions.FAVORITES_ARTICLES_LIST,
    target: TARGETS.FAVORITES_ARTICLES_LIST
  },
  getFavouritesArticlesSuccess: {
    type: actions.FAVORITES_ARTICLES_LIST_SUCCESS,
    target: TARGETS.FAVORITES_ARTICLES_LIST,
    payload: MOCKED_DATA
  },
  getFavouritesArticlesFailure: {
    type: actions.FAVORITES_ARTICLES_LIST_FAILURE,
    target: TARGETS.FAVORITES_ARTICLES_LIST,
    payload: true
  }
};

describe('case favoritesReducer', () => {
  test('test FAVORITES_ARTICLES_LIST_INIT', () => {
    expect(FavoritesReducer(undefined, favouritesActions.getFavouritesArticles)).toMatchObject({
      ...initialState,
      favoritesArticlesListLoading: true
    });
  });
  test('test FAVORITES_ARTICLES_LIST_SUCCESS', async () => {
    expect(await FavoritesReducer(undefined, favouritesActions.getFavouritesArticlesSuccess)).toMatchObject({
      ...initialState,
      favoritesArticlesList: MOCKED_DATA
    });
    expect(await FavoritesReducer(undefined, favouritesActions.getFavouritesArticlesSuccess)).not.toBeNull();
  });
  test('test FAVORITES_ARTICLES_LIST_FAILURE ', async () => {
    expect(await FavoritesReducer(undefined, favouritesActions.getFavouritesArticlesFailure)).toMatchObject({
      ...initialState,
      favoritesArticlesListError: true
    });
  });
});
