import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import CustomText from '@components/CustomText';

import styles from './styles';
import '../i18n';

export default function Header() {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.title}>
        <CustomText>{i18next.t('MY_FEED:TITLE')}</CustomText>
      </View>
    </View>
  );
}
