import { ApiOkResponse } from 'apisauce';
import { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import { setApiHeaders, removeApiHeaders } from '@config/api';
import { CurrentUser, AuthData, UserResponse, ProfileData } from '@interfaces/authInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import { Action, State } from '@interfaces/reduxInterfaces';
import { login, logout, updateCurrentUser, getUserProfile } from '@services/AuthService';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['LOGIN', 'LOGOUT', 'UPDATE_CURRENT_USER', 'GET_USER_PROFILE'],
    ignoredActions: ['AUTH_INIT', 'HAS_ACCESS']
  }),
  '@@AUTH'
);

const TARGETS = {
  ONBOARDING: 'hasAccessOnBoarding',
  CURRENT_USER: 'currentUser',
  USER_PROFILE: 'userProfile'
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
  }),
  updateCurrentUser: (user: UserResponse, failedFunction: Function) => ({
    type: actions.UPDATE_CURRENT_USER,
    target: TARGETS.CURRENT_USER,
    payload: user,
    service: updateCurrentUser,
    injections: [
      withPostFailure((_dispatch: Dispatch<any>) => {
        failedFunction();
      })
    ]
  }),
  getUserProfile: (user: UserResponse, successFunction: Function, updateFailed: Function) => ({
    type: actions.GET_USER_PROFILE,
    target: TARGETS.USER_PROFILE,
    payload: user.user?.username,
    service: getUserProfile,
    injections: [
      withPostSuccess((dispatch: Dispatch<any>, response: ApiOkResponse<ProfileData>) => {
        if (response.data?.profile?.username === user.user?.username) {
          successFunction();
        }
      }),
      withPostFailure((dispatch: Dispatch<any>) => {
        dispatch(actionCreators.updateCurrentUser(user, updateFailed));
      })
    ]
  })
};
