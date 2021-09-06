import { createTypes, completeTypes } from 'redux-recompose';
import ArticlesService from '@services/ArticlesService';
import { ApiOkResponse } from 'apisauce';

export const actions = createTypes(
  completeTypes({ primaryActions: ['GET_ARTICLES', 'GET_TAGS'], ignoredActions: ['CLEAR_TARGET'] }),
  '@@ARTICLES'
);

export const TARGETS = {
  ARTICLES_LIST: 'articlesList',
  TAG_LIST: 'tagList'
};

const actionCreators = {
  clearTarget: (target: string) => ({ type: actions.CLEAR_TARGET, target }),
  getArticles: () => ({
    successSelector: (response: ApiOkResponse<any>) => ({
      page: response.data.articles,
      totalCount: response.data.articlesCount
    }),
    type: actions.GET_ARTICLES,
    target: TARGETS.ARTICLES_LIST,
    service: ArticlesService.getArticles
  }),
  getTags: () => ({
    successSelector: (response: ApiOkResponse<any>) => response.data.tags,
    type: actions.GET_TAGS,
    target: TARGETS.TAG_LIST,
    service: ArticlesService.getTags
  })
};

export default actionCreators;
