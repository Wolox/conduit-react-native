import { createReducer, completeReducer, completeState, onReadValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { ArticlesState } from '@interfaces/reduxInterfaces';
import { onClearTarget } from '@utils/reduxUtils';

import { actions } from './actions';

const stateDescription = {
  description: {
    articlesList: {},
    tagList: []
  },
  ignoredTargets: {
    selectedTags: []
  }
};

export const initialState: ArticlesState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_ARTICLES, actions.GET_TAGS],
  override: {
    [actions.CLEAR_TARGET]: onClearTarget(),
    [actions.ADD_SELECTED_TAGS]: onReadValue()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
