import React from 'react';
import { View, TouchableOpacity, ImageSourcePropType, Image } from 'react-native';
import CustomText from '@components/CustomText';
import icGeneralRowArrow from '@assets/Profile/icGeneralRowArrow.png';

import styles from './styles';

interface Props {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
}

function ProfileItem({ title, icon, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.rowElement, styles.rowContainer]}>
        <View style={styles.rowContainer}>
          <View style={styles.iconContainer}>
            <Image source={icon} style={styles.icon} resizeMode="contain" />
          </View>
          <CustomText>{title}</CustomText>
        </View>
        <Image source={icGeneralRowArrow} style={styles.arrow} />
      </View>
    </TouchableOpacity>
  );
}

export default ProfileItem;
