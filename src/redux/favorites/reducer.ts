import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { FavouritesState } from '@interfaces/reduxInterfaces';

import { actions } from './actions';

const stateDescription = {
  description: {
    favoritesArticlesList: []
  }
};

export const initialState: FavouritesState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.FAVORITES_ARTICLES_LIST, actions.ADD_FAVORITE, actions.DELETE_ARTICLE]
};
export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
