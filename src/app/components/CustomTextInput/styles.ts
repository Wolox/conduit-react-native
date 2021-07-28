import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import { blue, gray, darkGray, red, white } from '@constants/colors';
import { SIZES } from '@constants/fonts';
import { commonBoxShadow } from '@constants/commonStyles';

export default StyleSheet.create({
  container: {
    marginBottom: 5,
    padding: 10
  },
  withAnimatedLabel: {
    marginTop: 20
  },
  multilineContainer: {
    height: 75,
    paddingHorizontal: 5,
    backgroundColor: white,
    ...commonBoxShadow
  },
  inputContainer: {
    alignItems: 'center',
    borderBottomWidth: 0,
    borderColor: darkGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: white,
    height: 50,
    borderRadius: 15,
    ...commonBoxShadow,
    alignSelf: 'center',
    paddingHorizontal: 8
  },
  bottomBorderBlue: {
    borderColor: blue
  },
  bottomBorderRed: {
    borderColor: red
  },
  bottomBorderLightGray: {
    borderColor: gray
  },
  inputStyle: {
    ...fonts.baseFont,
    fontSize: SIZES.SMALL,
    color: darkGray,
    padding: 0,
    margin: 0
  },
  singleInput: {
    flex: 1
  },
  errorContainer: {
    height: 15,
    marginTop: 3
  }
});
