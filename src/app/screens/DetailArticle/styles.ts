import { StyleSheet } from 'react-native';
import { darkGray, lightGray, white } from '@constants/colors';
import { SPACING, BORDER_WIDTH } from '@constants/dimentions';
import { BOTTOM_SEPARATOR_LINE, commonBoxShadow } from '@constants/commonStyles';
import { moderateScale } from '@utils/scalingUtils';
import fonts from '@config/fonts';

const IMAGE_USER_SIZE = moderateScale(80);
const INTERACION_ICON_SIZE = moderateScale(30);

export default StyleSheet.create({
  container: {
    padding: SPACING.MEDIUM,
    paddingTop: SPACING.XXBIG * SPACING.XXXSMALL
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
    marginRight: SPACING.XSMALL
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
  upup: {
    backgroundColor: white,
    borderRadius: 20,
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // height: 70,
    // padding: 20,
    ...commonBoxShadow,
    width: '92%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scroll: {
    height: '100%'
  }
});
