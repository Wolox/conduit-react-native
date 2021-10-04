import { StyleSheet } from 'react-native';
import { extraLightGray, white } from '@constants/colors';
import { isIos } from '@constants/platform';

const PADDING_VERTICAL = isIos ? 8 : 4;
const PADDING_HORIZONTAL = isIos ? 10 : 8;
const COMMON_SPACING = 10;
const styles = StyleSheet.create({
  container: {
    marginLeft: COMMON_SPACING,
    borderRadius: COMMON_SPACING,
    backgroundColor: white,
    paddingVertical: PADDING_VERTICAL,
    paddingHorizontal: PADDING_HORIZONTAL,
    elevation: 1,
    shadowColor: extraLightGray,
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowOpacity: 0.1
  }
});
export default styles;
