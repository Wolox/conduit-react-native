import { StyleSheet } from 'react-native';
import { darkGray } from '@constants/colors';
import { moderateScale } from '@utils/scalingUtils';
import { SPACING } from '@constants/dimentions';

const IMAGE_SIZE = moderateScale(40);

export default StyleSheet.create({
  container: {
    padding: SPACING.MEDIUM
  },
  containerImage: {
    flexDirection: 'row',
    marginBottom: SPACING.MEDIUM
  },
  containerNick: {},
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    backgroundColor: darkGray,
    borderRadius: SPACING.XBIG,
    marginRight: SPACING.SMALL
  }
});
