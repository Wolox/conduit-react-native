import React from 'react';
import { Image } from 'react-native';
import ilHeader from '@assets/illustrations/ilHeaderLogin.png';

import styles from './styles';

export default function Header() {
  return <Image source={ilHeader} style={styles.image} />;
}
