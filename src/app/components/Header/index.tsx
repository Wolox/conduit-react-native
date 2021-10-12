import React from 'react';
import { View } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';
import '../../screens/MyArticles/i18n';

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.title}>
        <CustomText>{title}</CustomText>
      </View>
    </View>
  );
}
