import { StyleSheet } from 'react-native';
import { darkGray, lightGray, white, red, gray, green } from '@constants/colors';
import { SPACING, BORDER_WIDTH } from '@constants/dimentions';
import { BOTTOM_SEPARATOR_LINE, commonBoxShadow } from '@constants/commonStyles';
import { moderateScale } from '@utils/scalingUtils';
import fonts from '@config/fonts';

const IMAGE_USER_SIZE = moderateScale(80);
const INTERACION_ICON_SIZE = moderateScale(30);

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    padding: SPACING.MEDIUM,
    paddingTop: SPACING.XXBIG * SPACING.XXXSMALL
  },
  containerActions: {
    width: '100%',
    height: INTERACION_ICON_SIZE,
    position: 'absolute',
    top: SPACING.MEDIUM,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerDetail: {
    ...commonBoxShadow,
    position: 'relative',
    padding: SPACING.MEDIUM,
    borderRadius: SPACING.MEDIUM,
    backgroundColor: white,
    paddingTop: SPACING.XXBIG
  },
  containerUser: {
    marginBottom: SPACING.MEDIUM,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    position: 'absolute',
    top: -SPACING.XXBIG * SPACING.XXXSMALL,
    width: IMAGE_USER_SIZE,
    height: IMAGE_USER_SIZE,
    backgroundColor: darkGray,
    borderRadius: SPACING.XXBIG
  },
  interactionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: SPACING.SMALL,
    height: INTERACION_ICON_SIZE,
    width: '100%'
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SPACING.XSMALL
  },
  interactionButtonImage: {
    width: INTERACION_ICON_SIZE,
    height: INTERACION_ICON_SIZE,
    marginRight: SPACING.XSMALL,
    tintColor: gray
  },
  separator: {
    ...BOTTOM_SEPARATOR_LINE,
    marginVertical: SPACING.SMALL
  },
  tagContainer: {
    flexDirection: 'row'
  },
  tag: {
    ...fonts.labelFont,
    borderColor: lightGray,
    borderWidth: BORDER_WIDTH.BOLD,
    padding: SPACING.XXXSMALL,
    marginHorizontal: SPACING.XXXSMALL
  },
  redTint: {
    tintColor: red
  },
  greenTint: {
    tintColor: green
  }
});
