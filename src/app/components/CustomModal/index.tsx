import React, { ReactNode } from 'react';
import { View, TouchableWithoutFeedback, StyleProp, ViewStyle } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';

interface Props {
  body: ReactNode;
  title: string;
  titleComplement?: string;
  description?: string | Array<string>;
  numberLineArrayBold?: number;
  handleCloseModal?: () => void;
  style?: StyleProp<ViewStyle>;
}

const CustomModal = ({ body, title, titleComplement, description, style, numberLineArrayBold }: Props) => {
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.container, style]}>
        <CustomText center style={styles.title}>
          <CustomText green bold big>
            {title}
          </CustomText>
          {titleComplement && <CustomText darkBlue>{titleComplement}</CustomText>}
        </CustomText>
        {description && !Array.isArray(description) && (
          <CustomText center small style={styles.description}>
            {description}
          </CustomText>
        )}
        {description && Array.isArray(description) && (
          <CustomText center style={styles.description}>
            {description.map((text: string, i: number) => (
              <CustomText key={i} small bold={i === numberLineArrayBold}>
                {text}
              </CustomText>
            ))}
          </CustomText>
        )}
        {body}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomModal;
