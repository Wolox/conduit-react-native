import React, { useCallback, useEffect, useRef } from 'react';
import { View, StatusBar, Animated } from 'react-native';
import icLogo from '@assets/illustrations/ilLogoConduit.png';
import icHeader from '@assets/illustrations/ilHeaderLogin.png';
import { isAndroid } from '@constants/platform';
import { transparent } from '@constants/colors';

import styles from './styles';

export default function CustomHeader() {
  const fadeBg = useRef(new Animated.Value(0)).current;
  const fadeLogo = useRef(new Animated.Value(0)).current;

  const animationsStates = useCallback(() => {
    const DURATION_ANIMATED = 3500;
    const useNativeDriver = true;
    Animated.timing(fadeBg, {
      toValue: 0.4,
      duration: DURATION_ANIMATED,
      useNativeDriver
    }).start();
    Animated.timing(fadeLogo, {
      toValue: 1,
      duration: DURATION_ANIMATED,
      useNativeDriver
    }).start();
  }, [fadeBg, fadeLogo]);

  useEffect(() => {
    animationsStates();
  }, [animationsStates]);

  return (
    <>
      {isAndroid && <StatusBar translucent backgroundColor={transparent} />}
      <View style={styles.container}>
        <Animated.Image
          source={icHeader}
          resizeMode="stretch"
          resizeMethod="scale"
          style={[styles.headerBgStyle, { opacity: fadeBg }]}
        />
        <Animated.Image
          source={icLogo}
          resizeMethod="resize"
          resizeMode="contain"
          height={1}
          style={[styles.logo, { opacity: fadeLogo }]}
        />
      </View>
    </>
  );
}
