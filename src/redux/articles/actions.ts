import { Dispatch } from 'react';
import { createTypes, completeTypes } from 'redux-recompose';
import { Action, State, DispatcheableAction } from '@interfaces/reduxInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import ArticlesService from '@services/ArticlesService';

export const actions = createTypes(
  completeTypes({ primaryActions: ['GET_ARTICLES'], ignoredActions: ['CLEAR_TARGET'] }),
  '@@ARTICLES'
);

export const TARGETS = {
  ARTICLES_LIST: 'articlesList'
};

type ActionType = Nullable<number>;

const actionCreators = {
  clearTarget: (target: string) => ({ type: actions.CLEAR_TARGET, target }),
  getArticles:
    () =>
    (dispatch: Dispatch<Action<ActionType> | DispatcheableAction<ActionType>>, getState: () => State) => {
      const nextPage = getState().articles.articlesList?.nextPage;
      dispatch({
        type: actions.GET_ARTICLES,
        target: TARGETS.ARTICLES_LIST,
        payload: nextPage,
        service: ArticlesService.getArticles
      });
    }
};

export default actionCreators;
