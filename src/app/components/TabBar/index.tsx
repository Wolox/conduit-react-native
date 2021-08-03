import React, { useEffect, useState } from 'react';
import { View, ImageSourcePropType, Image } from 'react-native';
import Routes from '@constants/routes';
import icHomeInactive from '@assets/TabBar/icHomeInactive.png';
import icHomeActive from '@assets/TabBar/icHomeActive.png';
import icPostInactive from '@assets/TabBar/icMypostsInactive.png';
import icPostActive from '@assets/TabBar/icMypostsActive.png';
import icAddInactive from '@assets/TabBar/icAddpostInactive.png';
import icAddActive from '@assets/TabBar/icAddpostActive.png';
import icFavouriteInactive from '@assets/TabBar/icFavoriteInactive.png';
import icFavouriteActive from '@assets/TabBar/icFavoriteActive.png';
import icProfileInactive from '@assets/TabBar/icProfileInactive.png';
import icProfileActive from '@assets/TabBar/icProfileActive.png';
import icLoginInactive from '@assets/TabBar/icLoginInactive.png';
import icLoginActive from '@assets/TabBar/icLoginActive.png';

import styles from './styles';

interface Props {
  currentTab: string;
  focused: boolean;
}
export default function TabBar({ currentTab, focused }: Props) {
  const [imageActiveState, setImageActiveState] = useState<ImageSourcePropType>(icHomeActive);
  const [imageInactiveState, setImageInactiveState] = useState<ImageSourcePropType>(icHomeInactive);
  const setIconImages = (tabName: string) => {
    switch (tabName) {
      case Routes.Home:
        setImageInactiveState(icHomeInactive);
        setImageActiveState(icHomeActive);
        break;
      case Routes.Tab2:
        setImageInactiveState(icPostInactive);
        setImageActiveState(icPostActive);
        break;
      case Routes.Tab3:
        setImageInactiveState(icAddInactive);
        setImageActiveState(icAddActive);
        break;
      case Routes.FavArticles:
        setImageInactiveState(icFavouriteInactive);
        setImageActiveState(icFavouriteActive);
        break;
      case Routes.Tab5:
        setImageInactiveState(icProfileInactive);
        setImageActiveState(icProfileActive);
        break;
      case Routes.Login:
        setImageInactiveState(icLoginInactive);
        setImageActiveState(icLoginActive);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setIconImages(currentTab);
  }, [currentTab]);
  return (
    <View style={[currentTab === Routes.Tab3 && styles.centerTab]}>
      <Image
        source={focused ? imageActiveState : imageInactiveState}
        style={styles.image}
        resizeMethod="resize"
        resizeMode="contain"
      />
    </View>
  );
}
