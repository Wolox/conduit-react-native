import { createTypes, completeTypes } from 'redux-recompose';
import FavoriteService from '@services/FavouritesArticlesService';
import { UserResponse } from '@interfaces/authInterfaces';

export const actions = createTypes(
  completeTypes({ primaryActions: ['FAVOURITES_ARTICLES_LIST'] }),
  '@@ARTICLES'
);

export const TARGETS = {
  FAVOURITES_ARTICLES_LIST: 'favouritesarticlesList'
};

const actionCreators = {
  getFavouritesArticles: ({ user }: UserResponse) => ({
    type: actions.FAVOURITES_ARTICLES_LIST,
    target: TARGETS.FAVOURITES_ARTICLES_LIST,
    service: FavoriteService.getFavorites,
    payload: user
  })
};

export default actionCreators;
