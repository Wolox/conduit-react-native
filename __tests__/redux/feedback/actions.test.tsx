import React, { ReactElement } from 'react';
import { View } from 'react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import actionCreators, { actions, targets } from '@redux/feedback/actions';
import { initialState } from '@redux/feedback/reducer';

const middleware = [thunk, fetchMiddleware];
const mockStore = configureStore(middleware);
const store = mockStore(initialState);

describe('case feedbackRedux', () => {
  beforeEach(() => {
    store.clearActions();
    jest.useFakeTimers();
  });
  const MOCKED_DATA: ReactElement = <View />;
  const EXPECT_PAYLOAD = {
    data: MOCKED_DATA,
    noCanClose: undefined,
    onPressOut: undefined
  };

  test('test Modal', () => {
    store.dispatch(actionCreators.showModal(MOCKED_DATA));
    expect(store.getActions()).toEqual([
      { target: targets.MODAL, type: actions.SHOW_MODAL, payload: EXPECT_PAYLOAD }
    ]);
    expect(store.getActions()).not.toBeNull();
    expect(store.getActions()).toBeDefined();
    expect(store.getActions()[0].payload.onPressOut).toBeUndefined();
    expect(store.getActions()[0].payload.noCanClose).toBeUndefined();
  });
});
