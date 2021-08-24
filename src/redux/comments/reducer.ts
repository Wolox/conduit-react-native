import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { ArticlesState, CommentsState } from '@interfaces/reduxInterfaces';
import { iComment } from '@interfaces/commentInterfaces';

import { actions } from './actions';

const stateDescription = {
  description: {
    comments: {}
  }
};

export const initialState: ArticlesState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_COMMENTS],
  // TODO: THIS GOING BE REPLACED WITH PRIMARYACTIONS WHEN SERVICE WILL BE UP
  override: {
    [actions.DELETE_COMMENT]: (state: ImmutableObject<CommentsState>, action: typeof actions) => {
      return state.merge({
        comments: state.comments.filter((comment: iComment) => comment.id !== action.payload)
      });
    },
    [actions.CREATE_COMMENT]: (state: ImmutableObject<CommentsState>, action: typeof actions) => {
      return state.merge({
        comments: [...state.comments, action.payload]
      });
    }
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
