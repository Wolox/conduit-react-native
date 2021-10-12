import React, { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import i18next from 'i18next';
import { ApiOkResponse } from 'apisauce';
import { Action, DispatcheableAction } from '@interfaces/reduxInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import ArticlesService from '@services/ArticlesService';
import { NewArticleValues, UpdateArticle } from '@screens/NewArticle/constants';
import { NavigationContainerRef } from '@react-navigation/native';
import { actionCreators as FeedbackActions } from '@redux/feedback/actions';
import CustomModal from '@components/CustomModal';
import CustomModalConfirm from '@components/CustomModalConfirm';
import { navigationRef } from '@components/AppNavigator/helper';
import Routes from '@constants/routes';

import './i18n';

export const actions = createTypes(
  completeTypes({
    primaryActions: [
      'GET_ARTICLES',
      'GET_MY_ARTICLES',
      'CREATE_ARTICLE',
      'DELETE_ARTICLE',
      'GET_TAGS',
      'UPDATE_ARTICLE',
      'GET_ARTICLES_AUTHOR',
      'FAVORITED_AUTHOR',
      'GET_ARTICLE',
      'SET_ARTICLE'
    ],
    ignoredActions: ['CLEAR_TARGET', 'ADD_SELECTED_TAGS']
  }),
  '@@ARTICLES'
);

export const TARGETS = {
  ARTICLES_LIST: 'articlesList',
  TAG_LIST: 'tagList',
  SELECTED_TAGS: 'selectedTags',
  MY_ARTICLES_LIST: 'myArticlesList',
  CREATE_ARTICLE: 'createArticle',
  DELETE_ARTICLE: 'deleteArticle',
  UPDATE_ARTICLE: 'updateArticle',
  GET_ARTICLES_AUTHOR: 'articlesAuthor',
  FAVORITED_AUTHOR: 'favoritedAuthor',
  GET_ARTICLE: 'article'
};

const articlesSuccesSelector = (response: ApiOkResponse<any>) => ({
  page: response.data.articles,
  totalCount: response.data.articlesCount
});

const actionCreators = {
  clearTarget: (target: string) => ({ type: actions.CLEAR_TARGET, target }),
  getArticles: () => ({
    successSelector: articlesSuccesSelector,
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
  filterByTags: (tags: string[], navigation: NavigationContainerRef | null) => ({
    successSelector: articlesSuccesSelector,
    type: actions.GET_ARTICLES,
    target: TARGETS.ARTICLES_LIST,
    service: ArticlesService.getArticlesByTags,
    payload: tags,
    injections: [
      withPostSuccess(
        (dispatch: Dispatch<Action<Nullable<string[]>> | DispatcheableAction<Nullable<string[]>>>) => {
          dispatch({
            type: actions.ADD_SELECTED_TAGS,
            target: TARGETS.SELECTED_TAGS,
            payload: tags
          });
          navigation?.goBack();
        }
      )
    ]
  }),
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
  updateArticle: (article: UpdateArticle, postSuccess?: () => void, postFailure?: () => void) => ({
    type: actions.UPDATE_ARTICLE,
    target: TARGETS.UPDATE_ARTICLE,
    payload: article,
    service: ArticlesService.updateArticle,
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
  getArticleByAuthor: (username: string) => ({
    type: actions.GET_ARTICLES_AUTHOR,
    target: TARGETS.GET_ARTICLES_AUTHOR,
    payload: username,
    service: ArticlesService.getArticlesByAuthor
  }),
  getFavoritedByAuthor: (username: string) => ({
    type: actions.FAVORITED_AUTHOR,
    target: TARGETS.FAVORITED_AUTHOR,
    payload: username,
    service: ArticlesService.getFavoritedByAuthor
  }),
  deleteArticle: (slug: string) => ({
    type: actions.DELETE_ARTICLE,
    target: TARGETS.DELETE_ARTICLE,
    payload: slug,
    service: ArticlesService.deleteArticle,
    injections: [
      withPostFailure((dispatch: Dispatch<any>) => {
        dispatch(
          FeedbackActions.showModal(
            <CustomModal
              title={i18next.t('SIGNUP:ERROR_SIGN_IN')}
              body={
                <CustomModalConfirm
                  text={i18next.t('SIGNUP:ERROR_MESSAGE')}
                  onPress={() => dispatch(FeedbackActions.hideModal())}
                  buttonText={i18next.t('SIGNUP:CLOSE_MODAL')}
                />
              }
            />
          )
        );
      }),
      withPostSuccess((dispatch: Dispatch<any>) => {
        dispatch(
          FeedbackActions.showModal(
            <CustomModal
              title={i18next.t('ARTICLES_ACTION:TITLE')}
              body={
                <CustomModalConfirm
                  text={i18next.t('ARTICLES_ACTION:MESSAGE')}
                  onPress={() => {
                    dispatch(FeedbackActions.hideModal());
                    navigationRef.current?.navigate(Routes.Home);
                  }}
                  buttonText={i18next.t('ARTICLES_ACTION:CLOSE')}
                />
              }
            />
          )
        );
      })
    ]
  }),
  getArticle: (slug: string) => ({
    type: actions.GET_ARTICLE,
    target: TARGETS.GET_ARTICLE,
    payload: slug,
    service: ArticlesService.getArticle
  }),
  setArticle: (article: any) => ({
    type: actions.SET_ARTICLE,
    target: TARGETS.GET_ARTICLE,
    payload: article
  })
};

export default actionCreators;
