import { createTypes, completeTypes } from 'redux-recompose';
import ProfileService from '@services/ProfileService';

export const actions = createTypes(completeTypes({ primaryActions: ['FOLLOW_USER'] }), '@@PROFILE');

export const TARGETS = {
  FOLLOW_USER: 'followUser'
};

const actionCreators = {
  followUser: (username: string, isFollow: boolean) => ({
    type: actions.FOLLOW_USER,
    target: TARGETS.FOLLOW_USER,
    service: ProfileService.followUser,
    payload: { username, isFollow }
  })
};

export default actionCreators;
