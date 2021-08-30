import { StyleSheet } from 'react-native';
import { lightGray, green } from '@constants/colors';
import { BORDER_WIDTH } from '@constants/dimentions';
import { scale } from '@utils/scalingUtils';

const ICON_CONTAINER_SIZE = scale(25);
const ICON_SIZE = scale(23);

export default StyleSheet.create({
  rowElement: {
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingTop: 20
  },
  rowContainer: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4
  },
  iconContainer: {
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE,
    borderRadius: ICON_CONTAINER_SIZE / 2,
    borderColor: green,
    borderWidth: BORDER_WIDTH.THIN,
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    tintColor: green
  },
  arrow: {
    height: scale(12),
    width: scale(7),
    tintColor: lightGray
  }
});
