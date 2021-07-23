import { StyleSheet } from 'react-native';
import { BOTTOM_SEPARATOR_LINE } from '@constants/commonStyles';
import { SPACING } from '@constants/dimentions';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    ...BOTTOM_SEPARATOR_LINE,
    width: '100%',
    alignItems: 'center'
  },
  indicator: {
    marginTop: SPACING.SMALL
  },
  createButton: {
    width: '60%',
    margin: 30
  }
});
