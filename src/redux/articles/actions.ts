import { Dispatch } from 'react';
import { createTypes, completeTypes } from 'redux-recompose';
import { ApiOkResponse } from 'apisauce';
import ArticlesService from '@services/ArticlesService';
import { Action, DispatcheableAction } from '@interfaces/reduxInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['GET_ARTICLES', 'GET_TAGS'],
    ignoredActions: ['CLEAR_TARGET', 'ADD_SELECTED_TAGS']
  }),
  '@@ARTICLES'
);

export const TARGETS = {
  ARTICLES_LIST: 'articlesList',
  TAG_LIST: 'tagList',
  SELECTED_TAGS: 'selectedTags'
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
  }),
  filterByTags:
    (tags: string[]) =>
    (dispatch: Dispatch<Action<Nullable<string[]>> | DispatcheableAction<Nullable<string[]>>>) => {
      dispatch({
        type: actions.ADD_SELECTED_TAGS,
        target: TARGETS.SELECTED_TAGS,
        payload: tags
      });
    }
};

export default actionCreators;
