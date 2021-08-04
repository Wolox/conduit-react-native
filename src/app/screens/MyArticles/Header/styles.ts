import { StyleSheet } from 'react-native';
import { isIos } from '@constants/platform';
import { green } from '@constants/colors';

const MARGIN_TITLE = isIos ? 2 : 10;
const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginTop: MARGIN_TITLE
  },
  title: {
    borderBottomWidth: 2,
    borderBottomColor: green
  }
});
export default styles;
