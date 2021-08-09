import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import { blue, gray, darkGray, red, white, lightGray } from '@constants/colors';
import { SIZES } from '@constants/fonts';
import { commonBoxShadow } from '@constants/commonStyles';

const DEFAULT_BORDER = 15;

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
    borderRadius: DEFAULT_BORDER,
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
    borderRadius: DEFAULT_BORDER,
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
  },
  placeHolderRigth: {
    marginHorizontal: 5,
    color: lightGray
  },
  placeHolderMultiline: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 10
  }
});
