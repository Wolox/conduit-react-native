import { createReducer, completeReducer, completeState, onReadValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { ArticlesState } from '@interfaces/reduxInterfaces';
import { onClearTarget } from '@utils/reduxUtils';

import { actions } from './actions';

const stateDescription = {
  description: {
    articlesList: {},
    tagList: [],
    article: null
  },
  ignoredTargets: {
    selectedTags: [],
    myArticlesList: [],
    createArticle: null
  }
};

export const initialState: ArticlesState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [
    actions.GET_ARTICLES,
    actions.GET_MY_ARTICLES,
    actions.CREATE_ARTICLE,
    actions.DELETE_ARTICLE,
    actions.GET_TAGS,
    actions.UPDATE_ARTICLE,
    actions.GET_ARTICLE
  ],
  override: {
    [actions.CLEAR_TARGET]: onClearTarget(),
    [actions.ADD_SELECTED_TAGS]: onReadValue(),
    [actions.SET_ARTICLE]: onReadValue()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
