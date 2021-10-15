import { StyleSheet } from 'react-native';
import { isIos } from '@constants/platform';
import { green } from '@constants/colors';
import { SPACING } from '@constants/dimentions';

const MARGIN_TITLE = isIos ? 2 : 20;
const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginTop: MARGIN_TITLE,
    marginBottom: SPACING.SMALL
  },
  title: {
    borderBottomWidth: 2,
    borderBottomColor: green
  }
});
export default styles;
