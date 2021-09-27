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
    jest.useFakeTimers();
  });
  test('getArticlesInit', () => {
    store.dispatch(actionCreators.getArticles());
    const actionsStore = store.getActions();
    expect(actionsStore).toEqual([{ target: TARGETS.ARTICLES_LIST, type: actions.GET_ARTICLES }]);
    expect(actionsStore).not.toBeNull();
    expect(actionsStore).toBeDefined();
  });
  test('getArticlesSuccess', () => {
    const storeClean = mockStore({});
    return storeClean.dispatch(actionCreators.getArticles()).then(() => {
      const actionsStore = storeClean.getActions();
      expect(actionsStore[1]).toEqual(articlesSuccess());
      expect(actionsStore).not.toBeNull();
      expect(actionsStore).toBeDefined();
    });
  });
  test('getMyArticles', () => {
    store.dispatch(actionCreators.getMyArticles());
    const actionsStore = store.getActions();
    expect(actionsStore).toEqual([{ target: TARGETS.MY_ARTICLES_LIST, type: actions.GET_MY_ARTICLES }]);
    expect(actionsStore).not.toBeNull();
    expect(actionsStore).toBeDefined();
  });
  test('getMyArticlesSuccess', () => {
    const storeClean = mockStore({});
    return storeClean.dispatch(actionCreators.getMyArticles()).then(() => {
      const actionsStore = storeClean.getActions();
      expect(actionsStore[1].type).toEqual(actions.GET_MY_ARTICLES_SUCCESS);
      expect(actionsStore[1].target).toEqual(TARGETS.MY_ARTICLES_LIST);
      expect(actionsStore).not.toBeNull();
      expect(actionsStore).toBeDefined();
    });
  });
  test('updateArticle', () => {
    store.dispatch(actionCreators.updateArticle());
    const actionsStore = store.getActions();
    expect(actionsStore).toEqual([{ target: TARGETS.UPDATE_ARTICLE, type: actions.UPDATE_ARTICLE }]);
    expect(actionsStore).not.toBeNull();
    expect(actionsStore).toBeDefined();
  });
  test('updateFailure', async () => {
    const storeClean = mockStore({});
    const MOCK_DATA = {
      article: {
        addTag: '',
        body: '',
        description: '',
        tagList: [],
        title: ''
      },
      slug: 'testing'
    };
    await storeClean.dispatch(actionCreators.updateArticle(MOCK_DATA));
    const actionsStore = await storeClean.getActions();
    expect(actionsStore[1].type).toEqual(actions.UPDATE_ARTICLE_FAILURE);
    expect(actionsStore[1].target).toEqual(TARGETS.UPDATE_ARTICLE);
    expect(actionsStore).not.toBeNull();
  });
  test('deleteArticle', () => {
    store.dispatch(actionCreators.deleteArticle());
    const actionsStore = store.getActions();
    expect(actionsStore).toEqual([{ target: TARGETS.DELETE_ARTICLE, type: actions.DELETE_ARTICLE }]);
    expect(actionsStore).not.toBeNull();
    expect(actionsStore).toBeDefined();
  });
  test('deleteArticleFailure', async () => {
    const storeClean = mockStore({});
    await storeClean.dispatch(actionCreators.deleteArticle('testing'));
    const actionsStore = await storeClean.getActions();
    expect(actionsStore[1].type).toEqual(actions.DELETE_ARTICLE_FAILURE);
    expect(actionsStore[1].target).toEqual(TARGETS.DELETE_ARTICLE);
    expect(actionsStore).not.toBeNull();
    expect(actionsStore).toBeDefined();
  });
  test('createArticle', () => {
    store.dispatch(actionCreators.createArticle());
    const actionsStore = store.getActions();
    expect(actionsStore).toEqual([{ target: TARGETS.CREATE_ARTICLE, type: actions.CREATE_ARTICLE }]);
    expect(actionsStore).not.toBeNull();
    expect(actionsStore).toBeDefined();
  });
  test('createArticleSuccess', async () => {
    const storeClean = mockStore({});
    const MOCK_DATA = {
      article: {
        addTag: '',
        body: 'estoy editando un articulo viejo se podrà?',
        description: '22ooooo',
        tagList: [],
        title: 'test222'
      },
      slug: 'test222-hoi6dp'
    };
    await storeClean.dispatch(actionCreators.createArticle(MOCK_DATA));
    const actionsStore = await storeClean.getActions();
    expect(actionsStore[1].type).toEqual(actions.CREATE_ARTICLE_SUCCESS);
    expect(actionsStore[1].target).toEqual(TARGETS.CREATE_ARTICLE);
    expect(actionsStore).not.toBeNull();
    expect(actionsStore).toBeDefined();
  });

  test('createArticleFailure', async () => {
    const storeClean = mockStore({});
    await storeClean.dispatch(actionCreators.createArticle({}));
    storeClean
      .dispatch(actionCreators.createArticle())
      .then(() => expect(storeClean.getActions()).toContainEqual({ type: actions.CREATE_ARTICLE_FAILURE }));
  });
  test('clearTargets', async () => {
    const TARGET_MOCK = 'testing';
    const storeClean = mockStore({});
    const actionsStore = await storeClean.dispatch(actionCreators.clearTarget(TARGET_MOCK));
    expect(actionsStore).not.toBeNull();
    expect(actionsStore).toBeDefined();
    expect(actionsStore).toStrictEqual({ type: actions.CLEAR_TARGET, target: TARGET_MOCK });
  });
  test('getTags', () => {
    store.dispatch(actionCreators.getTags());
    const actionsStore = store.getActions();
    expect(actionsStore).toEqual([{ type: actions.GET_TAGS, target: TARGETS.TAG_LIST }]);
    expect(actionsStore).not.toBeNull();
    expect(actionsStore).toBeDefined();
  });
  test('filterByTags', () => {
    store.dispatch(actionCreators.filterByTags([]));
    const actionsStore = store.getActions();
    expect(actionsStore).toEqual([{ type: actions.GET_ARTICLES, target: TARGETS.ARTICLES_LIST }]);
    expect(actionsStore).not.toBeNull();
    expect(actionsStore).toBeDefined();
  });
});
