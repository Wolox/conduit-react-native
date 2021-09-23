import { actions, TARGETS } from '@redux/articles/actions';
import ArticlesReducer, { initialState } from '@redux/articles/reducer';
import { Article } from '@interfaces/articlesInterface';

const MOCKED_DATA: Article = {
  title: 'Apple',
  slug: 'apple-y86yca',
  body: '<p>New IPhone 13 Are Here!</p><p><br></p><h1>WHEN?</h1><ul><li>1st October will available in all stores !</li><li>Pickup one ☝️</li></ul><p>editado desde mi <em style="background-color: rgb(235, 214, 255);">Android</em> !</p><p><s>subrayado</s></p><p><s style="color: rgb(230, 0, 0);">MIAU</s></p><h1><strong style="color: rgb(230, 0, 0);"><u>HOLA</u></strong></h1><p><span style="color: rgb(153, 51, 255);">YAY!</span></p>',
  createdAt: '2021-09-23T14:25:30.380Z',
  updatedAt: '2021-09-23T15:47:11.720Z',
  description: 'Telephone',
  tagList: ['Phones'],
  author: {
    username: 'hola5',
    bio: 'Esta es una Biografía típica de un usuario !',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    following: false
  },
  favorited: false,
  favoritesCount: 0
};

export const articleActions = {
  getArticles: {
    type: actions.GET_ARTICLES,
    target: TARGETS.ARTICLES_LIST
  },
  getArticleSuccess: {
    type: actions.GET_ARTICLES_SUCCESS,
    target: TARGETS.ARTICLES_LIST,
    payload: MOCKED_DATA
  },
  getArticleFailure: {
    type: actions.GET_ARTICLES_FAILURE,
    target: TARGETS.ARTICLES_LIST,
    payload: true
  }
};
describe('case ARTICLE', () => {
  test('test Login', () => {
    expect(ArticlesReducer(undefined, articleActions.getArticles)).toMatchObject({
      ...initialState,
      articlesListLoading: true
    });
  });
  test('test ARTICLE_SUCCESS', async () => {
    expect(await ArticlesReducer(undefined, articleActions.getArticleSuccess)).toMatchObject({
      ...initialState,
      articlesList: MOCKED_DATA
    });
    expect(await ArticlesReducer(undefined, articleActions.getArticleSuccess)).not.toBeNull();
  });
  test('test ARTICLE_FAILURE ', async () => {
    expect(await ArticlesReducer(undefined, articleActions.getArticleFailure)).toMatchObject({
      ...initialState,
      articlesListError: true
    });
  });
});
