import { StyleSheet } from 'react-native';
import { green } from '@constants/colors';

const DEFAULT_SPACE = 10;
const ICON_SIZE = 50;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: DEFAULT_SPACE
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE
  },
  iconGreen: {
    tintColor: green
  },
  title: {
    marginVertical: DEFAULT_SPACE
  },
  btnBack: {
    marginTop: '15%'
  }
});
