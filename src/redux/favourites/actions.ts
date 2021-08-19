import { createTypes, completeTypes } from 'redux-recompose';
import { Nullable } from '@interfaces/globalInterfaces';
import { getFavorites } from '@services/FavouritesArticlesService';
import { CurrentUser } from '@interfaces/authInterfaces';

export const actions = createTypes(
  completeTypes({ primaryActions: ['FAVOURITES_ARTICLES_LIST'] }),
  '@@ARTICLES'
);

export const TARGETS = {
  FAVOURITES_ARTICLES_LIST: 'favouritesarticlesList'
};

type ActionType = Nullable<number>;

const actionCreators = {
  getFavouritesArticles: ({ username }: CurrentUser) => ({
    type: actions.FAVOURITES_ARTICLES_LIST,
    target: TARGETS.FAVOURITES_ARTICLES_LIST,
    service: getFavorites,
    payload: username
  })
};

export default actionCreators;
