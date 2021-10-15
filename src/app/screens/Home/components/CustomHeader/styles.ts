import { StyleSheet } from 'react-native';
import { isIos } from '@constants/platform';

const COMMON_LARGE = '100%';
const CUSTOM_HEIGHT = isIos ? 127 : 73;
const CUSTOM_POSITION = isIos ? 0 : -50;
const CUSTOM_MARGIN_TOP = isIos ? '20%' : '8%';

const styles = StyleSheet.create({
  container: {
    width: COMMON_LARGE,
    height: CUSTOM_HEIGHT
  },
  headerBgStyle: {
    position: 'absolute',
    width: COMMON_LARGE,
    height: 145,
    top: CUSTOM_POSITION
  },
  logo: {
    height: 21,
    width: COMMON_LARGE,
    marginTop: CUSTOM_MARGIN_TOP
  }
});

export default styles;
