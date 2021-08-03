import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { FavouritesState } from '@interfaces/reduxInterfaces';

import { actions } from './actions';

const stateDescription = {
  description: {
    favouritesarticlesList: {}
  }
};

export const initialState: FavouritesState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.FAVOURITES_ARTICLES_LIST]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
