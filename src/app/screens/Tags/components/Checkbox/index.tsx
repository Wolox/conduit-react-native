import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import CustomText from '@components/CustomText';
import icCheck from '@assets/icons/icCheck.png';

import styles from './styles';

interface Props {
  option: string;
  selected: boolean;
  onPress: (option: string) => void;
}

function Checkbox({ selected = false, option, onPress }: Props) {
  const handlePress = () => onPress(option);
  const isSelected = selected;
  return (
    <TouchableOpacity style={[styles.container, isSelected && styles.selected]} onPress={handlePress}>
      <CustomText>{option}</CustomText>
      <View style={[styles.iconContainer]}>
        {isSelected && <Image source={icCheck} style={styles.icon} />}
      </View>
    </TouchableOpacity>
  );
}

export default Checkbox;
