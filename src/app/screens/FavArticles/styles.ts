import { StyleSheet } from 'react-native';
import { BOTTOM_SEPARATOR_LINE } from '@constants/commonStyles';
import { isIos } from '@constants/platform';

const MARGIN_BOTTOM_LIST = isIos ? 35 : 55;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    marginBottom: MARGIN_BOTTOM_LIST
  },
  separator: {
    ...BOTTOM_SEPARATOR_LINE,
    width: '100%',
    alignItems: 'center'
  }
});
export default styles;
