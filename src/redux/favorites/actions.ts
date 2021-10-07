import { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import { ApiOkResponse } from 'apisauce';
import FavoriteService from '@services/FavoritesArticlesService';
import { UserResponse } from '@interfaces/authInterfaces';
import ArticleActions, { TARGETS as articlesTargets } from '@redux/articles/actions';
import { ArticlesState } from '@interfaces/reduxInterfaces';

export const actions = createTypes(
  completeTypes({ primaryActions: ['FAVORITES_ARTICLES_LIST', 'ADD_FAVORITE', 'DELETE_FAVORITE'] }),
  '@@ARTICLES'
);

export const TARGETS = {
  FAVORITES_ARTICLES_LIST: 'favoritesArticlesList'
};

const actionCreators = {
  getFavoritesArticles: ({ user }: UserResponse) => ({
    type: actions.FAVORITES_ARTICLES_LIST,
    target: TARGETS.FAVORITES_ARTICLES_LIST,
    service: FavoriteService.getFavorites,
    payload: user
  }),
  addFavorite: (slug: string) => ({
    type: actions.ADD_FAVORITE,
    target: articlesTargets.GET_ARTICLE,
    payload: slug,
    service: FavoriteService.addFavorite,
    injections: [
      withPostSuccess((dispatch: Dispatch<any>, response: ApiOkResponse<ArticlesState>) => {
        if (response.data?.article) {
          dispatch(ArticleActions.setArticle(response.data.article));
        }
      })
    ]
  }),
  deleteFavorite: (slug: string) => ({
    type: actions.DELETE_FAVORITE,
    target: articlesTargets.GET_ARTICLE,
    payload: slug,
    service: FavoriteService.deleteFavorite,
    injections: [
      withPostSuccess((dispatch: Dispatch<any>, response: ApiOkResponse<ArticlesState>) => {
        if (response.data?.article) {
          dispatch(ArticleActions.setArticle(response.data.article));
        }
      })
    ]
  })
};

export default actionCreators;
