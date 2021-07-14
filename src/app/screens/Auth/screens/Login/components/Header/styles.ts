import { StyleSheet } from 'react-native';
import { IS_SMALL_DEVICE } from '@constants/platform';

const heightHeader = IS_SMALL_DEVICE ? 150 : 200;

const styles = StyleSheet.create({
  image: {
    height: heightHeader,
    width: '100%',
    position: 'absolute',
    top: 0
  }
});

export default styles;
