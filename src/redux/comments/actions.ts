import { Dispatch } from 'react';
import { createTypes, completeTypes } from 'redux-recompose';
import { Action, DispatcheableAction } from '@interfaces/reduxInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import CommentsService from '@services/CommentsService';

export const actions = createTypes(
  completeTypes({ primaryActions: ['GET_COMMENTS', 'DELETE_COMMENT'] }),
  '@@COMMENTS'
);

export const TARGETS = {
  COMMENTS: 'comments',
  DELETE_COMMENT: 'DELETE_COMMENT'
};

type ActionType = Nullable<number>;

const actionCreators = {
  clearTarget: (target: string) => ({ type: actions.CLEAR_TARGET, target }),
  getComments: () => (dispatch: Dispatch<Action<ActionType> | DispatcheableAction<ActionType>>) => {
    dispatch({
      type: actions.GET_COMMENTS,
      target: TARGETS.COMMENTS,
      service: CommentsService.getMockComments
    });
  },
  deleteComment: () => (dispatch: Dispatch<Action<ActionType> | DispatcheableAction<ActionType>>) => {
    dispatch({
      type: actions.DELETE_COMMENT,
      target: TARGETS.DELETE_COMMENT
    });
  }
};

export default actionCreators;
