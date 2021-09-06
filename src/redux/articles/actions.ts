import { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import { Action, DispatcheableAction } from '@interfaces/reduxInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import ArticlesService from '@services/ArticlesService';
import { NewArticleValues } from '@screens/NewArticle/constants';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['GET_ARTICLES', 'GET_MY_ARTICLES', 'CREATE_ARTICLE', 'DELETE_ARTICLE'],
    ignoredActions: ['CLEAR_TARGET']
  }),
  '@@ARTICLES'
);

export const TARGETS = {
  ARTICLES_LIST: 'articlesList',
  MY_ARTICLES_LIST: 'myArticlesList',
  CREATE_ARTICLE: 'createArticle',
  DELETE_ARTICLE: 'deleteArticle'
};

type ActionType = Nullable<number>;

const actionCreators = {
  clearTarget: (target: string) => ({ type: actions.CLEAR_TARGET, target }),
  getArticles: () => (dispatch: Dispatch<Action<ActionType> | DispatcheableAction<ActionType>>) => {
    dispatch({
      type: actions.GET_ARTICLES,
      target: TARGETS.ARTICLES_LIST,
      service: ArticlesService.getMockArticles
    });
  },
  createArticle: (article: NewArticleValues, postSuccess?: () => void, postFailure?: () => void) => ({
    type: actions.CREATE_ARTICLE,
    target: TARGETS.CREATE_ARTICLE,
    payload: article,
    service: ArticlesService.createArticle,
    injections: [
      withPostSuccess((_: Dispatch<any>) => {
        if (postSuccess) postSuccess();
      }),
      withPostFailure((_: Dispatch<any>) => {
        if (postFailure) postFailure();
      })
    ]
  }),
  getMyArticles: () => ({
    type: actions.GET_MY_ARTICLES,
    target: TARGETS.MY_ARTICLES_LIST,
    service: ArticlesService.getMyArticles
  }),
  deleteArticle: (slug: string) => ({
    type: actions.DELETE_ARTICLE,
    target: TARGETS.DELETE_ARTICLE,
    payload: slug,
    service: ArticlesService.deleteArticle
  })
};

export default actionCreators;
