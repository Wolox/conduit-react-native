import { StyleSheet } from 'react-native';
import { lightGray, white, red, gray, green, extraLightGray } from '@constants/colors';
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
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerDetail: {
    ...commonBoxShadow,
    position: 'relative',
    width: '100%',
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
    backgroundColor: extraLightGray,
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
  icEdit: {
    width: INTERACION_ICON_SIZE,
    height: INTERACION_ICON_SIZE
  },
  icTrash: {
    width: SPACING.BIG,
    height: SPACING.BIG,
    marginRight: SPACING.XXSMALL
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
    paddingHorizontal: SPACING.SMALL,
    paddingVertical: SPACING.XXSMALL,
    marginHorizontal: SPACING.XXXSMALL
  },
  bodyContainer: {
    minWidth: '90%',
    marginTop: 15,
    marginBottom: 20
  },
  scrollContainer: {
    height: '100%'
  },
  inputComment: {
    height: 125
  },
  noCommentsContainer: {
    marginVertical: 20
  },
  noCommentsText: {
    fontSize: 12,
    textAlign: 'center'
  },
  noInputAuth: {
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: white,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentStyle: {
    paddingBottom: 30
  },
  redTint: {
    tintColor: red
  },
  greenTint: {
    tintColor: green
  }
});
