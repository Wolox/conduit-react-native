import api from '@config/api';

const PROFILES_PATH = '/profiles';
const FOLLOW_PATH = '/follow';

interface Params {
  username: string;
  isFollow: boolean;
}

const ProfileService = {
  followUser: ({ username, isFollow }: Params) => {
    if (isFollow) {
      return api.delete(`${PROFILES_PATH}/${username}/${FOLLOW_PATH}`);
    }
    return api.post(`${PROFILES_PATH}/${username}/${FOLLOW_PATH}`);
  },
  getProfiles: (username: string) => api.get(`${PROFILES_PATH}/${username}`)
};

export default ProfileService;
