import React, { ReactNode } from 'react';
import { View, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import CustomText from '@components/CustomText';
import userIcon from '@assets/Profile/ic_user.png';

import styles from './styles';

interface Props {
  title?: string;
  subtitle?: string;
  withAvatar?: boolean;
  children: ReactNode;
}

function WithHeader({ title, children, withAvatar }: Props) {
  return (
    <>
      <View style={styles.container}>
        {!!title && (
          <SafeAreaView forceInset={{ bottom: 'never' }}>
            <View style={styles.headerContent}>
              <View style={styles.textContainer}>
                <CustomText headerTitle style={styles.title}>
                  {title}
                </CustomText>
              </View>
            </View>
          </SafeAreaView>
        )}
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.borderContainer}>
          <View style={[styles.border]} />
        </View>
        <View style={[styles.childrenContainer, withAvatar && styles.longChildrenContainer]}>{children}</View>
        {withAvatar && (
          <View style={styles.avatarContainer}>
            <Image source={userIcon} resizeMode="contain" style={styles.avatar} />
          </View>
        )}
      </View>
    </>
  );
}

export default WithHeader;
