import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import CustomText from '@components/CustomText';

interface Props {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}
function CustomTextPressable({ text, onPress, style }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <CustomText xsmall green>
        {text}
      </CustomText>
    </TouchableOpacity>
  );
}

export default CustomTextPressable;
