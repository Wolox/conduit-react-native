import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import { initialState } from '@redux/articles/reducer';
import actionCreators, { actions, TARGETS } from '@redux/articles/actions';

const middleware = [thunk, fetchMiddleware];
const mockStore = configureStore(middleware);
const store = mockStore(initialState);

function articlesSuccess() {
  return {
    type: actions.GET_ARTICLES_SUCCESS,
    target: TARGETS.ARTICLES_LIST,
    payload: { page: undefined, totalCound: undefined }
  };
}

describe('testing article actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  test('getArticlesInit', () => {
    store.dispatch(actionCreators.getArticles());
    expect(store.getActions()).toEqual([{ target: TARGETS.ARTICLES_LIST, type: actions.GET_ARTICLES }]);
  });
  test('getArticlesSuccess', () => {
    const stored = mockStore({});
    return stored.dispatch(actionCreators.getArticles()).then(() => {
      const actionss = stored.getActions();
      expect(actionss[1]).toEqual(articlesSuccess());
    });
  });
  test('getMyArticles', () => {
    store.dispatch(actionCreators.getMyArticles());
    expect(store.getActions()).toEqual([{ target: TARGETS.MY_ARTICLES_LIST, type: actions.GET_MY_ARTICLES }]);
    expect(store.getActions()).not.toBeNull();
  });
  test('get_My_Articles_Success', () => {
    const stored = mockStore({});
    return stored.dispatch(actionCreators.getMyArticles()).then(() => {
      const actionss = stored.getActions();
      expect(actionss[1].type).toEqual(actions.GET_MY_ARTICLES_SUCCESS);
      expect(actionss[1].target).toEqual(TARGETS.MY_ARTICLES_LIST);
    });
  });
  test('updateArticle', () => {
    store.dispatch(actionCreators.updateArticle());
    expect(store.getActions()).toEqual([{ target: TARGETS.UPDATE_ARTICLE, type: actions.UPDATE_ARTICLE }]);
    expect(store.getActions()).not.toBeNull();
  });
  // test('updateArticle_Success', async () => {
  //   await store.dispatch(actionCreators.updateArticle());
  //   const res = mapActionsToTypes(await store.getActions());
  //   expect(res).toStrictEqual([actions.UPDATE_ARTICLE, actions.UPDATE_ARTICLE_SUCCESS]);
  //   expect(res).not.toBeNull();
  // });
});
