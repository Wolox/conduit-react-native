import { StyleSheet } from 'react-native';
import { darkGrayMedium } from '@constants/colors';

const DEFAULT_SPACE = 10;
const DEFAULT_MARGIN = 5;
const DEFAULT_SPACE_LARGE = 20;

export default StyleSheet.create({
  tagContainer: {
    backgroundColor: darkGrayMedium,
    paddingHorizontal: DEFAULT_SPACE,
    marginVertical: DEFAULT_MARGIN,
    alignItems: 'center',
    borderRadius: DEFAULT_SPACE_LARGE,
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 200,
    height: 30
  },
  tagDelete: {
    paddingHorizontal: DEFAULT_SPACE,
    marginLeft: DEFAULT_MARGIN,
    alignItems: 'center',
    borderRadius: 100
  },
  removeItem: {
    marginLeft: DEFAULT_MARGIN,
    width: DEFAULT_SPACE_LARGE,
    borderRadius: DEFAULT_SPACE
  }
});
