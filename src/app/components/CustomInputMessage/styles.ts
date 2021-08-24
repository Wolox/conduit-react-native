import { StyleSheet } from 'react-native';
import { black } from '@constants/colors';
import { IS_SMALL_DEVICE } from '@constants/platform';
import { SPACING } from '@constants/dimentions';

const WIDTH_LABEL = IS_SMALL_DEVICE ? '90%' : '100%';

const COMMON_PADDING_INPUT: number = 8;

export default StyleSheet.create({
  container: {
    marginHorizontal: SPACING.XXXSMALL
  },
  inputContainer: {
    marginTop: SPACING.XXSMALL
  },
  messageLabel: {
    paddingTop: 24,
    justifyContent: 'space-evenly',
    width: WIDTH_LABEL,
    flexDirection: 'row'
  },
  customLabel: {
    marginRight: SPACING.NONE
  },
  textInputMessage: {
    fontSize: 14,
    color: black,
    paddingVertical: SPACING.NONE,
    textAlignVertical: 'top',
    marginBottom: 20,
    paddingHorizontal: COMMON_PADDING_INPUT,
    paddingTop: COMMON_PADDING_INPUT
  },
  customTextInput: {
    paddingBottom: SPACING.NONE,
    marginBottom: SPACING.NONE
  },
  customInputContainer: {
    height: 300,
    paddingBottom: 10
  },
  error: {
    marginLeft: SPACING.MEDIUM,
    width: '80%'
  }
});
