import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { ArticlesState } from '@interfaces/reduxInterfaces';
import { onPagination, onClearTarget } from '@utils/reduxUtils';

import { actions } from './actions';

const stateDescription = {
  description: {
    articlesList: {},
    tagList: []
  }
};

export const initialState: ArticlesState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_ARTICLES, actions.GET_TAGS],
  override: {
    [actions.CLEAR_TARGET]: onClearTarget(),
    [actions.GET_ARTICLES_SUCCESS]: onPagination()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
