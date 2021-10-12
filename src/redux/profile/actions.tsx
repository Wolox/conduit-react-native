import React, { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import i18next from 'i18next';
import CustomModal from '@components/CustomModal';
import CustomModalConfirm from '@components/CustomModalConfirm';
import { actionCreators as FeedbackActions } from '@redux/feedback/actions';
import ArticlesActions from '@redux/articles/actions';
import ProfileService from '@services/ProfileService';

import './i18n';

// export const actions = createTypes(completeTypes({ primaryActions: ['FOLLOW_USER'] }), '@@PROFILE');

export const actions = createTypes(
  completeTypes({ primaryActions: ['FOLLOW_USER', 'GET_PROFILE_USER'] }),
  '@@PROFILE'
);

export const TARGETS = {
  FOLLOW_USER: 'followUser',
  GET_PROFILE_USER: 'profileUser'
};
const handlePress = (dispatch: Dispatch<any>) => async () => {
  await dispatch(FeedbackActions.hideModal());
  await dispatch(ArticlesActions.getArticles());
  await dispatch(ArticlesActions.getMyArticles());
};
const actionCreators = {
  followUser: (username: string, isFollow: boolean) => ({
    type: actions.FOLLOW_USER,
    target: TARGETS.FOLLOW_USER,
    service: ProfileService.followUser,
    payload: { username, isFollow },
    injections: [
      withPostSuccess((dispatch: any) => {
        dispatch(
          FeedbackActions.showModal(
            <CustomModal
              title={
                isFollow
                  ? i18next.t('PROFILE_ACTIONS:UNFOLLOW', { username })
                  : i18next.t('PROFILE_ACTIONS:FOLLOW', { username })
              }
              body={
                <CustomModalConfirm
                  text={
                    isFollow
                      ? i18next.t('PROFILE_ACTIONS:UNFOLLOW_MESSAGE')
                      : i18next.t('PROFILE_ACTIONS:FOLLOW_MESSAGE')
                  }
                  onPress={handlePress(dispatch)}
                  buttonText={i18next.t('PROFILE_ACTIONS:CLOSE_MODAL')}
                />
              }
            />
          )
        );
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
  getProfileUser: (username: string) => ({
    type: actions.GET_PROFILE_USER,
    target: TARGETS.GET_PROFILE_USER,
    service: ProfileService.getProfiles,
    payload: username
  })
};

export default actionCreators;
