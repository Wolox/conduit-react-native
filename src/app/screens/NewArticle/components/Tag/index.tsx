import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';

interface Props {
  text: string;
  index: number;
  onDeleteTag: (index: number) => void;
}

const MAX_LENGTH_WORD_TAG = 15;

function Tag({ text, onDeleteTag, index }: Props) {
  const textFormmated =
    text.length > MAX_LENGTH_WORD_TAG ? `${text.substring(0, MAX_LENGTH_WORD_TAG)}..` : text;

  return (
    <View style={styles.tagContainer}>
      <CustomText center white style={styles.text}>
        {textFormmated}
      </CustomText>
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
