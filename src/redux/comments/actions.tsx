import React, { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import { ApiOkResponse } from 'apisauce';
import i18next from 'i18next';
import { Nullable } from '@interfaces/globalInterfaces';
import CommentsService from '@services/CommentsService';
import { iComment } from '@interfaces/commentInterfaces';
import { actionCreators as FeedbackActions } from '@redux/feedback/actions';
import CustomModal from '@components/CustomModal';
import CustomModalConfirm from '@components/CustomModalConfirm';

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
  getComments: (slug: string) => ({
    type: actions.GET_COMMENTS,
    target: TARGETS.COMMENTS,
    payload: slug,
    service: CommentsService.getComments
  }),
  // TODO : changed with correct api service
  createComment: (data: string, slug: string) => ({
    type: actions.CREATE_COMMENT,
    target: TARGETS.CREATE_COMMENT,
    payload: { data, slug },
    service: CommentsService.createComment,
    injections: [
      withPostSuccess((dispatch: any, _: ApiOkResponse<iComment>) => {
        dispatch(actionCreators.getComments(slug));
      }),
      withPostFailure((dispatch: Dispatch<any>) => {
        dispatch(
          FeedbackActions.showModal(
            <CustomModal
              title={i18next.t('SIGNUP:ERROR_SIGN_IN')}
              body={
                <CustomModalConfirm
                  text={i18next.t('SIGNUP:ERROR_MESSAGE')}
                  onPress={() => dispatch(FeedbackActions.hideModal())}
                  buttonText={i18next.t('SIGNUP:CLOSE_MODAL')}
                />
              }
            />
          )
        );
      })
    ]
  }),
  deleteComment: (slug: string, id: number) => ({
    type: actions.DELETE_COMMENT,
    target: TARGETS.DELETE_COMMENT,
    service: CommentsService.deleteComment,
    payload: { slug, id },
    injections: [
      withPostSuccess((dispatch: any, _: ApiOkResponse<iComment>) => {
        dispatch(actionCreators.getComments(slug));
      }),
      withPostFailure((dispatch: Dispatch<any>) => {
        dispatch(
          FeedbackActions.showModal(
            <CustomModal
              title={i18next.t('SIGNUP:ERROR_SIGN_IN')}
              body={
                <CustomModalConfirm
                  text={i18next.t('SIGNUP:ERROR_MESSAGE')}
                  onPress={() => dispatch(FeedbackActions.hideModal())}
                  buttonText={i18next.t('SIGNUP:CLOSE_MODAL')}
                />
              }
            />
          )
        );
      })
    ]
  })
};

export default actionCreators;
