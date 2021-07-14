import { StyleSheet } from 'react-native';
import { WINDOW_HEIGHT } from '@constants/platform';

const heightHeader = WINDOW_HEIGHT < 600 ? 120 : 200;

const styles = StyleSheet.create({
  image: {
    height: heightHeader,
    width: '100%',
    position: 'absolute',
    top: 0
  }
});

export default styles;
