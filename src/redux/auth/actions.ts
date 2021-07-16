import { ApiOkResponse } from 'apisauce';
import { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import { setApiHeaders, removeApiHeaders } from '@config/api';
import { CurrentUser, AuthData } from '@interfaces/authInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import { Action, State } from '@interfaces/reduxInterfaces';
import { login, logout } from '@services/AuthService';

export const actions = createTypes(
  completeTypes({ primaryActions: ['LOGIN', 'LOGOUT'], ignoredActions: ['AUTH_INIT', 'HAS_ACCESS'] }),
  '@@AUTH'
);

const TARGETS = {
  ONBOARDING: 'hasAccessOnBoarding',
  CURRENT_USER: 'currentUser'
};

export const actionCreators = {
  init: () => (dispatch: Dispatch<Action<Nullable<CurrentUser>>>, getState: () => State) => {
    const { currentUser, hasAccessOnBoarding } = getState().auth;
    if (currentUser) setApiHeaders(currentUser.sessionToken);
    dispatch({
      type: actions.AUTH_INIT,
      target: TARGETS.CURRENT_USER,
      hasAccessOnBoarding,
      payload: currentUser
    });
  },
  login: (authData: AuthData) => ({
    type: actions.LOGIN,
    target: TARGETS.CURRENT_USER,
    service: login,
    payload: authData,
    injections: [
      withPostSuccess((_: any, response: ApiOkResponse<CurrentUser>) => {
        setApiHeaders(response.data?.sessionToken!);
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
        removeApiHeaders();
        dispatch(actionCreators.setHasAccessOnBoarding(false));
      })
    ]
  }),
  setHasAccessOnBoarding: (value: boolean) => ({
    type: actions.HAS_ACCESS,
    target: TARGETS.ONBOARDING,
    payload: value
  })
};
