import { createTypes, completeTypes } from 'redux-recompose';
import { Nullable } from '@interfaces/globalInterfaces';
import MyArticlesService from '@services/MyArticlesService';
import { UserResponse } from '@interfaces/authInterfaces';

export const actions = createTypes(completeTypes({ primaryActions: ['MY_ARTICLES'] }), '@@MY_ARTICLES');

export const TARGETS = {
  MY_ARTICLES: 'myArticles'
};

type ActionType = Nullable<number>;

const actionCreators = {
  getMyArticles: ({ user }: UserResponse) => ({
    type: actions.MY_ARTICLES,
    target: TARGETS.MY_ARTICLES,
    service: MyArticlesService.getMyArticles,
    payload: user
  })
};

export default actionCreators;
