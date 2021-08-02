import CustomText from '@app/components/CustomText';
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import i18next from 'i18next';

import './i18n';
import styles from './styles';

export default function FavArticles() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CustomText>{i18next.t('FAV_ARTICLES:MY_ARTICLES')}</CustomText>
      </View>
    </SafeAreaView>
  );
}
