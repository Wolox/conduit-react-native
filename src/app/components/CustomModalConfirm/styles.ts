import { extraLightGray, white } from '@constants/colors';
import { SPACING } from '@constants/dimentions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    minHeight: 120,
    borderTopColor: extraLightGray,
    borderTopWidth: 1,
    width: '90%'
  },
  containerBody: {
    paddingTop: 10
  },
  containerButton: {
    paddingTop: SPACING.XBIG,
    paddingBottom: SPACING.XBIG
  },
  buttonOk: {
    borderRadius: SPACING.SMALL
  }
});
export default styles;
