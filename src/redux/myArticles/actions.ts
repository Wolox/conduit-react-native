import { Dispatch } from 'react';
import { createTypes, completeTypes } from 'redux-recompose';
import { Action, DispatcheableAction } from '@interfaces/reduxInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import MyArticlesService from '@services/MyArticlesService';

export const actions = createTypes(completeTypes({ primaryActions: ['MY_ARTICLES'] }), '@@MY_ARTICLES');

export const TARGETS = {
  MY_ARTICLES: 'myArticles'
};

type ActionType = Nullable<number>;

const actionCreators = {
  getMyArticles: () => (dispatch: Dispatch<Action<ActionType> | DispatcheableAction<ActionType>>) => {
    dispatch({
      type: actions.MY_ARTICLES,
      target: TARGETS.MY_ARTICLES,
      service: MyArticlesService.getMyArticles
    });
  }
};

export default actionCreators;
