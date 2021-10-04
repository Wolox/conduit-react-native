import { StyleSheet } from 'react-native';
import { extraLightGray, red } from '@constants/colors';
import { SPACING } from '@constants/dimentions';
import { moderateScale } from '@utils/scalingUtils';

const IMAGE_SIZE = moderateScale(40);
const ICON_SIZE = 20;

export default StyleSheet.create({
  container: {
    padding: SPACING.MEDIUM
  },
  containerImage: {
    flexDirection: 'row',
    marginBottom: SPACING.MEDIUM
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    backgroundColor: extraLightGray,
    borderRadius: SPACING.XBIG,
    marginRight: SPACING.SMALL
  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%'
  },
  deleteIcon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    tintColor: red
  },
  textUserName: {
    width: '82%'
  },
  icDelete: {
    width: '10%',
    alignItems: 'center'
  }
});
