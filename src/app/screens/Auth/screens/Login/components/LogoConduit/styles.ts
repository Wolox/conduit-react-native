import { StyleSheet } from 'react-native';
import { WINDOW_HEIGHT } from '@constants/platform';

const MARGIN_TOP_LOGO = WINDOW_HEIGHT < 600 ? 20 : 30;

const ALIGN_CENTER_LOGO = 'center';
const styles = StyleSheet.create({
  containerimag: {
    height: 50,
    marginBottom: 5,
    marginTop: MARGIN_TOP_LOGO,
    width: '50%',
    justifyContent: ALIGN_CENTER_LOGO,
    alignItems: ALIGN_CENTER_LOGO
  },
  logo: {
    position: 'absolute',
    height: '60%',
    width: 140,
    top: 0
  }
});
export default styles;
