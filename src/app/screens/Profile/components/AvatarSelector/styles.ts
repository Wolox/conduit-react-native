import { StyleSheet } from 'react-native';
import { green } from '@constants/colors';
import { scale } from '@utils/scalingUtils';
import { SPACING } from '@constants/dimentions';

const AVATAR_SIZE = scale(100);
const COMMON_POSITION = 0;
const COMMON_SPACING = 15;

export default StyleSheet.create({
  container: {
    height: '85%',
    width: '100%',
    alignItems: 'center',
    paddingBottom: SPACING.XXSMALL
  },
  avatarStyle: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE
  },
  itemStyle: {
    marginHorizontal: COMMON_SPACING,
    marginBottom: 10,
    padding: 7
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
