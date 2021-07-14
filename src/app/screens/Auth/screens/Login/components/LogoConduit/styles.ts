import { StyleSheet } from 'react-native';
import { IS_SMALL_DEVICE } from '@constants/platform';

const marginLogo = IS_SMALL_DEVICE ? 50 : 10;

const styles = StyleSheet.create({
  containerimag: {
    height: 50,
    marginBottom: 5,
    marginTop: marginLogo,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    position: 'absolute',
    height: '60%',
    width: 140,
    top: 0
  }
});
export default styles;
