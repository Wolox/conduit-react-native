import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { ProfileState } from '@interfaces/reduxInterfaces';

import { actions } from './actions';

const stateDescription = {
  description: {
    followUser: null
  }
};

export const initialState: ProfileState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.FOLLOW_USER]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
