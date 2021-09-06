import { ReactNode } from 'react';
import { createTypes, completeTypes } from 'redux-recompose';

export const actions = createTypes(
  completeTypes({ ignoredActions: ['SHOW_MODAL', 'HIDE_MODAL'] }),
  '@@FEEDBACK'
);
export const targets = {
  MODAL: 'modal'
};
export const actionCreators = {
  showModal: (data: ReactNode, onPressOut?: Function, noCanClose?: boolean) => ({
    type: actions.SHOW_MODAL,
    target: targets.MODAL,
    payload: { data, onPressOut, noCanClose }
  }),
  hideModal: () => ({
    type: actions.HIDE_MODAL,
    target: targets.MODAL
  })
};
export default actionCreators;
