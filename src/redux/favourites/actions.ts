import { createTypes, completeTypes } from 'redux-recompose';
import FavoriteService from '@services/FavouritesArticlesService';
import { UserResponse } from '@interfaces/authInterfaces';

export const actions = createTypes(
  completeTypes({ primaryActions: ['FAVORITES_ARTICLES_LIST'] }),
  '@@ARTICLES'
);

export const TARGETS = {
  FAVORITES_ARTICLES_LIST: 'favoritesArticlesList'
};

const actionCreators = {
  getFavouritesArticles: ({ user }: UserResponse) => ({
    type: actions.FAVORITES_ARTICLES_LIST,
    target: TARGETS.FAVORITES_ARTICLES_LIST,
    service: FavoriteService.getFavorites,
    payload: user
  })
};

export default actionCreators;
