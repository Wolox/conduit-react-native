import { darkGray, white } from '@constants/colors';
import { StyleSheet } from 'react-native';

const commonMargin = 16;
const commonPadding = 20;

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
    right: commonMargin,
    top: commonMargin
  },
  title: {
    paddingVertical: commonPadding,
    paddingHorizontal: commonPadding
  },
  cancelButton: {
    paddingBottom: commonPadding
  },
  description: {
    paddingHorizontal: 24,
    paddingBottom: commonMargin,
    borderColor: darkGray
  }
});
export default styles;
