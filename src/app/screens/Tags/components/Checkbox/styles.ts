import { StyleSheet } from 'react-native';
import { scale } from '@utils/scalingUtils';
import { green, lightGray } from '@constants/colors';
import { SPACING } from '@constants/dimentions';

const ICON_SIZE = scale(SPACING.BIG);
const CONTAINER_SIZE = scale(SPACING.MEDIUM);

export default StyleSheet.create({
  container: {
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SPACING.XXSMALL,
    padding: SPACING.XSMALL,
    borderRadius: SPACING.XSMALL,
    borderColor: lightGray,
    borderWidth: 2
  },
  iconContainer: {
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    tintColor: green
  },
  selected: {
    backgroundColor: lightGray
  }
});
