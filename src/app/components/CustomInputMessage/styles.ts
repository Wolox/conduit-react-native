import { StyleSheet } from 'react-native';
// import { grayDark10, grayishBlue } from '@constants/colors';
// import { SIZES } from '@constants/fonts';
import { black } from '@constants/colors';
import { IS_SMALL_DEVICE } from '@constants/platform';
import { SPACING } from '@constants/dimentions';

const WIDTH_LABEL = IS_SMALL_DEVICE ? '90%' : '100%';

const DEFAULT_SPACE = 16;
export default StyleSheet.create({
  container: {
    marginHorizontal: SPACING.XXXSMALL
    // height: '90%'
  },
  inputContainer: {
    marginTop: 4
  },
  messageLabel: {
    paddingTop: 24,
    justifyContent: 'space-evenly',
    width: WIDTH_LABEL,
    flexDirection: 'row'
  },
  customLabel: {
    marginRight: 0
  },
  textInputMessage: {
    fontSize: 14,
    color: black,
    paddingVertical: 0,
    textAlignVertical: 'top',
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingTop: 8
  },
  customTextInput: {
    paddingBottom: 0,
    marginBottom: 0
  },
  customInputContainer: {
    height: 300,
    paddingBottom: 10
  },
  error: {
    marginTop: -15,
    marginLeft: DEFAULT_SPACE,
    width: '80%'
  }
});
