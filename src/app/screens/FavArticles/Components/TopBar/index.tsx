import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import CustomText from '@app/components/CustomText';
import i18next from 'i18next';

import '../../i18n';
import styles from './styles';

interface Props {
  routeName?: string;
}

export default function TopBar({ routeName }: Props) {
  const FAV = 'FAV';
  const MY_ARTICLES = 'MY_ARTICLES';
  const [activeFav, setActiveFav] = useState<boolean>(true);
  const [activeMyArticles, setActiveMyActicles] = useState<boolean>(false);

  switch (routeName) {
    case FAV:
      setActiveFav(true);
      break;
    case MY_ARTICLES:
      setActiveMyActicles(true);
      break;
    default:
      break;
  }
  return (
    <View style={styles.statusNavBar}>
      <TouchableOpacity style={activeMyArticles && styles.textActive}>
        <CustomText>{i18next.t('FAV_ARTICLES:MY_ARTICLES')}</CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={activeFav && styles.textActive}>
        <CustomText>{i18next.t('FAV_ARTICLES:FAVOURITED_ARTICLES')}</CustomText>
      </TouchableOpacity>
    </View>
  );
}
