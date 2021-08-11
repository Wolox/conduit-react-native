import { StyleSheet } from 'react-native';
import { BOTTOM_SEPARATOR_LINE } from '@constants/commonStyles';
import { SPACING } from '@constants/dimentions';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  separator: {
    ...BOTTOM_SEPARATOR_LINE,
    width: '100%',
    alignItems: 'center'
  },
  indicator: {
    marginTop: SPACING.SMALL
  },
  titleEmptyArticles: {
    marginTop: SPACING.MEDIUM
  },
  title: {
    marginVertical: SPACING.SMALL
  }
});
