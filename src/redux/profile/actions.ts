import { createTypes, completeTypes } from 'redux-recompose';
import ProfileService from '@services/ProfileService';

export const actions = createTypes(
  completeTypes({ primaryActions: ['FOLLOW_USER', 'GET_PROFILE_USER'] }),
  '@@PROFILE'
);

export const TARGETS = {
  FOLLOW_USER: 'followUser',
  GET_PROFILE_USER: 'profileUser'
};

const actionCreators = {
  followUser: (username: string, isFollow: boolean) => ({
    type: actions.FOLLOW_USER,
    target: TARGETS.FOLLOW_USER,
    service: ProfileService.followUser,
    payload: { username, isFollow }
  }),
  getProfileUser: (username: string) => ({
    type: actions.GET_PROFILE_USER,
    target: TARGETS.GET_PROFILE_USER,
    service: ProfileService.getProfiles,
    payload: username
  })
};

export default actionCreators;
