import { StyleSheet } from 'react-native';
import { SPACING } from '@constants/dimentions';

export const errorTextProps = {
  numberOfLines: 1
};

export default StyleSheet.create({
  container: {
    height: '100%',
    padding: SPACING.MEDIUM,
    justifyContent: 'space-between'
  },
  clearButton: {
    alignSelf: 'flex-end'
  },
  containerTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});
