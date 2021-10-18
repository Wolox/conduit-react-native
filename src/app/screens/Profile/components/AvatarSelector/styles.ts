import { StyleSheet } from 'react-native';
import { green } from '@constants/colors';
import { scale } from '@utils/scalingUtils';
import { SPACING } from '@constants/dimentions';

const AVATAR_SIZE = scale(100);
const COMMON_POSITION = 0;

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: SPACING.XXSMALL
  },
  avatarStyle: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE
  },
  itemStyle: {
    marginHorizontal: 15,
    marginBottom: 6,
    paddingTop: 3,
    paddingBottom: SPACING.SMALL,
    paddingHorizontal: 8
  },
  selectedItem: {
    position: 'absolute',
    top: COMMON_POSITION,
    bottom: COMMON_POSITION,
    left: COMMON_POSITION,
    right: COMMON_POSITION,
    borderRadius: SPACING.XBIG,
    borderWidth: SPACING.XXSMALL,
    borderColor: green
  }
});
