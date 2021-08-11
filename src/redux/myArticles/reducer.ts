import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { MyArticlesState } from '@interfaces/reduxInterfaces';

import { actions } from './actions';

const stateDescription = {
  description: {
    myArticles: {}
  }
};

export const initialState: MyArticlesState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.MY_ARTICLES]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
