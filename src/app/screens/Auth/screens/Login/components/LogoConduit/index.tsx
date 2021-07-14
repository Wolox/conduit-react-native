import React from 'react';
import { Image, View } from 'react-native';
import ilLogoConduit from '@assets/illustrations/ilLogoConduit.png';

import styles from './styles';

export default function LogoConduit() {
  return (
    <View style={styles.containerimag}>
      <Image source={ilLogoConduit} style={styles.logo} />
    </View>
  );
}
