import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import api from '@config/api';
import { actions as feedbackactions } from '@redux/feedback/actions';
import { actions, actionCreators, TARGETS } from '@redux/auth/actions';
import { initialState } from '@redux/auth/reducer';

import { mapActionsToTypes } from '../utils';

const middleware = [thunk, fetchMiddleware];
const mockStore = configureStore(middleware);
const store = mockStore(initialState);

describe('testing auth actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  test('test AUTH_INIT', async () => {
    await store.dispatch(actionCreators.init());
    expect(store.getActions()).toEqual([{ target: TARGETS.CURRENT_USER, type: actions.AUTH_INIT }]);
  });

  test('test LOGIN ERROR AND INJECTIONS', async () => {
    const FAIL_USER = { email: 'fail22@fail.com', password: 'hola1234' };
    api.setHeader = jest.fn();
    const expectedActions = [actions.LOGIN, actions.LOGIN_FAILURE, feedbackactions.SHOW_MODAL];
    await store.dispatch(actionCreators.login(FAIL_USER));
    expect(mapActionsToTypes(store.getActions())).toEqual(expectedActions);
  });
  test('test LOGIN SUCCESS', () => {
    const renderUser = () => {
      const MOCKED_USER = { email: 'hola5@hola.com', password: 'hola1234' };
      store.dispatch(actionCreators.login(MOCKED_USER));
    };
    renderUser();
    expect(store.getActions()).toEqual([{ target: TARGETS.CURRENT_USER, type: actions.LOGIN }]);
  });
  test('test LOGOUT ', async () => {
    const spy = jest.spyOn(store, 'dispatch');
    store.dispatch(actionCreators.logout());
    expect(store.getActions()).toEqual([{ target: TARGETS.CURRENT_USER, type: actions.LOGOUT }]);
    expect(await store.getState()).toEqual(initialState);
    expect(spy).toBeCalled();
  });
});
