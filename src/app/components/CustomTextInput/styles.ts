import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import { blue, gray, darkGray, red, white, lightGray, green } from '@constants/colors';
import { SIZES } from '@constants/fonts';
import { commonBoxShadow } from '@constants/commonStyles';
import { SPACING } from '@constants/dimentions';

const DEFAULT_BORDER = 15;
const SIZE_IMAGE = 23;

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
    borderBottomWidth: SPACING.NONE,
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
    padding: SPACING.NONE,
    margin: SPACING.NONE
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
    right: SPACING.NONE,
    bottom: SPACING.NONE,
    margin: 10
  },
  widthStretch: {
    width: '80%'
  },
  flexRow: {
    flexDirection: 'row'
  },
  messageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '100%'
  },
  errorIcon: {
    tintColor: lightGray,
    height: SIZE_IMAGE,
    width: SIZE_IMAGE
  },
  icon: {
    tintColor: green,
    height: SIZE_IMAGE,
    width: SIZE_IMAGE
  }
});
