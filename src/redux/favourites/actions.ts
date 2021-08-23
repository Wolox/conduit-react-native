import { createTypes, completeTypes } from 'redux-recompose';
import { Nullable } from '@interfaces/globalInterfaces';
import FavoriteService from '@services/FavouritesArticlesService';
import { CurrentUser } from '@interfaces/authInterfaces';
// import { CurrentUser } from '@interfaces/authInterfaces';

export const actions = createTypes(
  completeTypes({ primaryActions: ['FAVOURITES_ARTICLES_LIST'] }),
  '@@ARTICLES'
);

export const TARGETS = {
  FAVOURITES_ARTICLES_LIST: 'favouritesarticlesList'
};

type ActionType = Nullable<number>;

const actionCreators = {
  getFavouritesArticles: (currentUser: CurrentUser) => ({
    type: actions.FAVOURITES_ARTICLES_LIST,
    target: TARGETS.FAVOURITES_ARTICLES_LIST,
    service: FavoriteService.getFavorites,
    payload: currentUser
  })
};

export default actionCreators;
