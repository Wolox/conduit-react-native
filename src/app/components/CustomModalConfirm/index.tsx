import React from 'react';
import { View } from 'react-native';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';

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
        <CustomButton xmedium title={buttonText} onPress={onPress} style={styles.buttonOk} primary />
      </View>
    </View>
  );
};

export default CustomModalConfirm;
