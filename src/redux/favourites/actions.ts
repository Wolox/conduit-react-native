import { Dispatch } from 'react';
import { createTypes, completeTypes } from 'redux-recompose';
import { Action, DispatcheableAction } from '@interfaces/reduxInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import { getFavorites } from '@services/FavouritesArticlesService';

export const actions = createTypes(
  completeTypes({ primaryActions: ['FAVOURITES_ARTICLES_LIST'] }),
  '@@ARTICLES'
);

export const TARGETS = {
  FAVOURITES_ARTICLES_LIST: 'favouritesarticlesList'
};

type ActionType = Nullable<number>;

const actionCreators = {
  getFavouritesArticles: () => (dispatch: Dispatch<Action<ActionType> | DispatcheableAction<ActionType>>) => {
    dispatch({
      type: actions.FAVOURITES_ARTICLES_LIST,
      target: TARGETS.FAVOURITES_ARTICLES_LIST,
      service: getFavorites
    });
  }
};

export default actionCreators;
