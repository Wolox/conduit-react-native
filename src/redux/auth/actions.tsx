import React, { Dispatch } from 'react';
import i18next from 'i18next';
import { ApiOkResponse } from 'apisauce';
import { createTypes, completeTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import { setApiHeaders, removeApiHeaders } from '@config/api';
import { CurrentUser, AuthData, UserResponse } from '@interfaces/authInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import { Action, State } from '@interfaces/reduxInterfaces';
import { login, logout } from '@services/AuthService';
import { actionCreators as FeedbackActions } from '@redux/feedback/actions';
import CustomModal from '@app/components/CustomModal';
import CustomModalConfirm from '@app/components/CustomModalConfirm';

export const actions = createTypes(
  completeTypes({ primaryActions: ['LOGIN', 'LOGOUT'], ignoredActions: ['AUTH_INIT', 'HAS_ACCESS'] }),
  '@@AUTH'
);

const TARGETS = {
  ONBOARDING: 'hasAccessOnBoarding',
  CURRENT_USER: 'currentUser'
};

export const actionCreators = {
  init: () => (dispatch: Dispatch<Action<Nullable<UserResponse>>>, getState: () => State) => {
    const { currentUser, hasAccessOnBoarding } = getState().auth;
    if (currentUser?.user?.token) setApiHeaders(currentUser.user.token);
    dispatch({
      type: actions.AUTH_INIT,
      target: TARGETS.CURRENT_USER,
      hasAccessOnBoarding,
      payload: currentUser
    });
  },
  removeLoginData: () => ({
    type: actions.LOGOUT,
    target: TARGETS.CURRENT_USER,
    payload: null
  }),
  cleanUserData: (dispatch: Dispatch<any>) => {
    removeApiHeaders();
    dispatch(actionCreators.removeLoginData);
  },
  login: (authData: AuthData) => ({
    type: actions.LOGIN,
    target: TARGETS.CURRENT_USER,
    service: login,
    payload: authData,
    injections: [
      withPostSuccess(async (_: any, response: ApiOkResponse<CurrentUser>) => {
        if (response.data?.token) {
          await setApiHeaders(response.data.token);
        } else {
          actionCreators.login(authData);
        }
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
  logout: () => ({
    type: actions.LOGOUT,
    target: TARGETS.CURRENT_USER,
    service: logout,
    successSelector: () => null,
    injections: [
      withPostSuccess((dispatch: Dispatch<any>) => {
        dispatch(actionCreators.setHasAccessOnBoarding(false));
        actionCreators.cleanUserData(dispatch);
      }),
      withPostFailure((dispatchAction: Dispatch<any>) => {
        actionCreators.cleanUserData(dispatchAction);
      })
    ]
  }),
  setHasAccessOnBoarding: (value: boolean) => ({
    type: actions.HAS_ACCESS,
    target: TARGETS.ONBOARDING,
    payload: value
  })
};
