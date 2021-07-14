import Routes from '@constants/routes';
import React, { useEffect, useState } from 'react';
import { View, ImageSourcePropType, Image } from 'react-native';
import IC_HOME_INACTIVE from '@assets/TabBar/ic_home_inactive.png';
import IC_HOME_ACTIVE from '@assets/TabBar/ic_home_active.png';
import IC_POSTS_INACTIVE from '@assets/TabBar/ic_myposts_inactive.png';
import IC_POSTS_ACTIVE from '@assets/TabBar/ic_myposts_active.png';
import IC_ADD_INACTIVE from '@assets/TabBar/ic_addpost_inactive.png';
import IC_ADD_ACTIVE from '@assets/TabBar/ic_addpost_active.png';
import IC_FAVORITE_INACTIVE from '@assets/TabBar/ic_favorite_inactive.png';
import IC_FAVORITE_ACTIVE from '@assets/TabBar/ic_favorite_active.png';
import IC_PROFILE_INACTIVE from '@assets/TabBar/ic_profile_inactive.png';
import IC_PROFILE_ACTIVE from '@assets/TabBar/ic_profile_active.png';
import IC_LOGIN_INACTIVE from '@assets/TabBar/ic_login_inactive.png';
import IC_LOGIN_ACTIVE from '@assets/TabBar/ic_login_active.png';

import styles from './styles';

interface Props {
  currentTab: string;
  focused: boolean;
}
export default function TabBar({ currentTab, focused }: Props) {
  const [imageActiveState, setImageActiveState] = useState<ImageSourcePropType>(IC_HOME_ACTIVE);
  const [imageInactiveState, setImageInactiveState] = useState<ImageSourcePropType>(IC_HOME_INACTIVE);
  const setIconImages = (tabName: string) => {
    switch (tabName) {
      case Routes.Home:
        setImageInactiveState(IC_HOME_INACTIVE);
        setImageActiveState(IC_HOME_INACTIVE);
        break;
      case Routes.Tab2:
        setImageInactiveState(IC_POSTS_INACTIVE);
        setImageActiveState(IC_POSTS_ACTIVE);
        break;
      case Routes.Tab3:
        setImageInactiveState(IC_ADD_INACTIVE);
        setImageActiveState(IC_ADD_ACTIVE);
        break;
      case Routes.Tab4:
        setImageInactiveState(IC_FAVORITE_INACTIVE);
        setImageActiveState(IC_FAVORITE_ACTIVE);
        break;
      case Routes.Tab5:
        setImageInactiveState(IC_PROFILE_INACTIVE);
        setImageActiveState(IC_PROFILE_ACTIVE);
        break;
      case Routes.Login:
        setImageInactiveState(IC_LOGIN_INACTIVE);
        setImageActiveState(IC_LOGIN_ACTIVE);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setIconImages(currentTab);
  }, [currentTab]);
  return (
    <View style={[currentTab === Routes.Tab3 && styles.selectedRoute]}>
      <Image
        source={focused ? imageActiveState : imageInactiveState}
        style={styles.image}
        resizeMethod="resize"
        resizeMode="contain"
      />
    </View>
  );
}
