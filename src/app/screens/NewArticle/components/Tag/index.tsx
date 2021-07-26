import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';

interface Props {
  text: string;
  index: number;
  onDeleteTag: (index: number) => void;
}

function Tag({ text, onDeleteTag, index }: Props) {
  const textFormmated = text.length > 15 ? `${text.substring(0, 15)}..` : text;

  return (
    <View style={styles.tagContainer}>
      <CustomText white>{textFormmated}</CustomText>
      <TouchableWithoutFeedback style={styles.tagDelete} onPress={() => onDeleteTag(index)}>
        <View style={styles.removeItem}>
          <CustomText bold white center>
            x
          </CustomText>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Tag;
