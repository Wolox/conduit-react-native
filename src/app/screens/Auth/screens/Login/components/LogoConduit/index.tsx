import React from 'react';
import { Image, View } from 'react-native';
import LOGO_CONDUIT from '@assets/illustrations/logoConduit.png';

import styles from './styles';

export default function LogoConduit() {
  return (
    <View style={styles.containerimag}>
      <Image source={LOGO_CONDUIT} style={styles.logo} />
    </View>
  );
}
