import React from 'react';
import { View } from 'react-native';

import CustomButton from '../CustomButton';
import CustomText from '../CustomText';

import styles from './styles';

interface Props {
  onPress?: () => void;
  text: string;
  buttonText: string;
}

const CustomModalConfirm = ({ onPress, text, buttonText }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <CustomText small center>
          {text}
        </CustomText>
      </View>
      <View style={styles.containerButton}>
        <CustomButton xmedium title={buttonText} onPress={onPress} style={styles.buttonOk} semiBold />
      </View>
    </View>
  );
};

export default CustomModalConfirm;
