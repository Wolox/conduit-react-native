import { StyleSheet } from 'react-native';
import { green } from '@constants/colors';
import { scale } from '@utils/scalingUtils';

const AVATAR_SIZE = scale(100);
const COMMON_RADIUS = 80;
const COMMON_POSITION = 0;
const COMMON_SPACING = 15;

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: COMMON_SPACING
  },
  avatarStyle: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE
  },
  itemStyle: {
    marginHorizontal: COMMON_SPACING,
    marginBottom: 10
  },
  selectedItem: {
    backgroundColor: green,
    position: 'absolute',
    top: 40,
    bottom: COMMON_POSITION,
    left: COMMON_POSITION,
    right: COMMON_POSITION,
    borderTopLeftRadius: COMMON_RADIUS,
    borderTopRightRadius: COMMON_RADIUS
  }
});
