import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { ArticlesState } from '@interfaces/reduxInterfaces';
// import { onPagination } from '@utils/reduxUtils';

import { actions } from './actions';

const stateDescription = {
  description: {
    comments: {}
  }
};

export const initialState: ArticlesState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_COMMENTS],
  // override: {
  //   [actions.GET_COMMENTS_SUCCESS]: onPagination()
  // }
  override: {
    [actions.DELETE_COMMENT]: (state: any, action: typeof actions) => {
      const { commentId } = action;
      return {
        ...state,
        comments: state.comments.filter((comment: any) => comment.id !== commentId)
      };
    }
  }
  // const commentId = action.commentId
  //     return {
  //       ...state,
  //       comments: state.comments.filter(comment => comment.id !== commentId)
  //     };
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
