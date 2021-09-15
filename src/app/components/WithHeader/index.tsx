import React, { ReactNode } from 'react';
import { View, Image, Pressable, ImageSourcePropType } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import CustomText from '@components/CustomText';
import userIcon from '@assets/Profile/icUser.png';
import { isAndroid } from '@constants/platform';

import styles from './styles';

interface Props {
  title?: string;
  subtitle?: string;
  withAvatar?: boolean;
  children: ReactNode;
  avatar?: ImageSourcePropType | null;
  onPressAvatar?: () => void;
}

function WithHeader({ title, children, withAvatar, avatar, onPressAvatar }: Props) {
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
          <Pressable style={styles.avatarContainer} onPress={onPressAvatar}>
            {isAndroid ? (
              <View style={styles.avatarBorder}>
                <Image
                  source={avatar ? avatar : userIcon}
                  resizeMode="cover"
                  style={[styles.avatar, !avatar && styles.defaultAvatar]}
                />
              </View>
            ) : (
              <Image
                source={avatar ? avatar : userIcon}
                resizeMode="contain"
                style={[styles.avatar, !avatar && styles.defaultAvatar]}
              />
            )}
          </Pressable>
        )}
      </View>
    </>
  );
}

export default WithHeader;
