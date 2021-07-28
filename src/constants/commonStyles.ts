import { lightGray } from './colors';
import { BORDER_WIDTH } from './dimentions';

export const BOTTOM_SEPARATOR_LINE = {
  borderBottomWidth: BORDER_WIDTH.REGULAR,
  borderBottomColor: lightGray
};

export const commonBoxShadow = {
  elevation: 1,
  shadowColor: lightGray,
  shadowOpacity: 1,
  shadowOffset: {
    width: 0,
    height: 3
  }
};
