import { StyleSheet } from 'react-native';
import { BOTTOM_SEPARATOR_LINE } from '@constants/commonStyles';
import { SPACING } from '@constants/dimentions';

const styles = StyleSheet.create({
  containerBio: {
    width: '100%',
    marginVertical: 12,
    padding: 5
  },
  containerArticles: {
    flex: 1
  },
  description: {
    width: '100%',
    marginTop: 10
  },
  separator: {
    ...BOTTOM_SEPARATOR_LINE,
    width: '100%',
    alignItems: 'center'
  },
  titleEmptyArticles: {
    marginTop: SPACING.MEDIUM
  }
});
export default styles;
