import React from 'react';
import { Image } from 'react-native';
import HEADER from '@assets/illustrations/headerLogin.png';

import styles from './styles';

export default function Header() {
  return <Image source={HEADER} style={styles.image} />;
}
