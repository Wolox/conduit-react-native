import React from 'react';
import { SafeAreaView } from 'react-native';
// import i18next from 'i18next';
// import CustomText from '@components/CustomText';

import './i18n';
import Header from './Header';
import styles from './styles';

export default function MyArticles() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}
