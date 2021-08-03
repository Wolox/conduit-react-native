import { StyleSheet } from 'react-native';
import { BOTTOM_SEPARATOR_LINE } from '@constants/commonStyles';
import { isIos } from '@constants/platform';
import { green } from '@constants/colors';

const MARGIN_TOP_TITLE = isIos ? 2 : 20;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    ...BOTTOM_SEPARATOR_LINE,
    width: '100%',
    alignItems: 'center'
  },
  statusNavBar: {
    marginTop: MARGIN_TOP_TITLE,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 5
  },
  textTitle: {
    borderBottomColor: green,
    borderBottomWidth: 2
  }
});
export default styles;
