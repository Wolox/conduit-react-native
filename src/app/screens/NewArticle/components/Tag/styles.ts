import { StyleSheet } from 'react-native';
import { darkGrayMedium } from '@constants/colors';

const DEFAULT_SPACE = 10;
const DEFAULT_MARGIN = 5;

export default StyleSheet.create({
  tagContainer: {
    backgroundColor: darkGrayMedium,
    paddingHorizontal: DEFAULT_SPACE,
    marginVertical: DEFAULT_MARGIN,
    alignItems: 'center',
    borderRadius: 20,
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
    width: 20,
    borderRadius: DEFAULT_SPACE
  }
});
