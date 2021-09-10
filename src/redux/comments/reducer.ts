import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { ArticlesState } from '@interfaces/reduxInterfaces';

import { actions } from './actions';

const stateDescription = {
  description: {
    comments: null
  }
};

export const initialState: ArticlesState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_COMMENTS, actions.CREATE_COMMENT, actions.DELETE_COMMENT],
  // TODO: THIS GOING BE REPLACED WITH PRIMARYACTIONS WHEN SERVICE WILL BE UP
  override: {}
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
