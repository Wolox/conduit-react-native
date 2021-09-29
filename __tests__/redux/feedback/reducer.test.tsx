import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { actions, targets } from '@redux/feedback/actions';
import ModalReducer, { initialState } from '@redux/feedback/reducer';

const MOCKED_DATA: ReactElement = <View />;
const EXPECT_PAYLOAD = {
  data: MOCKED_DATA,
  noCanClose: undefined,
  onPressOut: undefined
};

const modalActions = {
  showModal: {
    type: actions.SHOW_MODAL,
    target: targets.MODAL,
    payload: EXPECT_PAYLOAD
  },
  hideModal: {
    type: actions.HIDE_MODAL,
    target: targets.MODAL
  }
};

describe('case modalReducer', () => {
  test('test SHOW_MODAL', () => {
    expect(ModalReducer(undefined, modalActions.showModal)).toMatchObject({
      ...initialState,
      modal: EXPECT_PAYLOAD
    });
  });
  test('test HIDE_MODAL', () => {
    expect(ModalReducer(undefined, modalActions.hideModal)).toMatchObject({
      ...initialState
    });
  });
});
