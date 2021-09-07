import { StyleSheet } from 'react-native';
import { darkGray, white } from '@constants/colors';

const COMMON_MARGIN = 16;
const COMMON_PADDING = 20;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    minHeight: 120,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: white,
    borderRadius: 16
  },
  exitButton: {
    position: 'absolute',
    right: COMMON_MARGIN,
    top: COMMON_MARGIN
  },
  title: {
    paddingVertical: COMMON_PADDING,
    paddingHorizontal: COMMON_PADDING
  },
  cancelButton: {
    paddingBottom: COMMON_PADDING
  },
  description: {
    paddingHorizontal: 24,
    paddingBottom: COMMON_MARGIN,
    borderColor: darkGray
  }
});
export default styles;
