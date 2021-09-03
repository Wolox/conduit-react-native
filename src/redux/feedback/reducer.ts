import { createReducer, completeState, onReadValue, onSetValue } from 'redux-recompose';
import immutable from 'seamless-immutable';

import { actions } from './actions';

const stateDescription = {
  modal: null
};

export const initialState = completeState(stateDescription, ['modal']);

const reducerDescription = {
  [actions.SHOW_MODAL]: onReadValue(),
  [actions.HIDE_MODAL]: onSetValue()
};

export default createReducer(immutable(initialState), reducerDescription);
