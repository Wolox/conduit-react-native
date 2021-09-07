import { StyleSheet } from 'react-native';
import { grayTransparent } from '@constants/colors';

export const backgroundColor = grayTransparent;

export default StyleSheet.create({
  container: {
    ...(StyleSheet.absoluteFill as object),
    backgroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  allContainer: {
    flex: 1
  }
});
