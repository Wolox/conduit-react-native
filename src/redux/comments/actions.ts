import { Dispatch } from 'react';
import { createTypes, completeTypes } from 'redux-recompose';
import { Action, DispatcheableAction } from '@interfaces/reduxInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import CommentsService from '@services/CommentsService';
import { iComment } from '@interfaces/commentInterfaces';

export const actions = createTypes(
  completeTypes({ primaryActions: ['GET_COMMENTS', 'DELETE_COMMENT', 'CREATE_COMMENT'] }),
  '@@COMMENTS'
);

export const TARGETS = {
  COMMENTS: 'comments',
  DELETE_COMMENT: 'DELETE_COMMENT',
  CREATE_COMMENT: 'CREATE_COMMENT'
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
  // TODO : changed with correct api service
  createComment: (data: iComment) => ({
    type: actions.CREATE_COMMENT,
    target: TARGETS.CREATE_COMMENT,
    payload: data
  }),
  deleteComment: (id: number) => ({
    type: actions.DELETE_COMMENT,
    target: TARGETS.DELETE_COMMENT,
    payload: id
  })
};

export default actionCreators;
