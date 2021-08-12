import { StyleSheet } from 'react-native';
import { green, lightGray } from '@constants/colors';
import { SPACING } from '@constants/dimentions';

export default StyleSheet.create({
  borderContainer: {
    borderBottomColor: green
  },
  tabTitle: {
    margin: 10
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.MEDIUM
  },
  tabItems: {
    width: '50%'
  },
  tabContent: {
    borderBottomColor: lightGray,
    borderBottomWidth: 3
  },
  tabActive: {
    borderBottomColor: green
  },
  tabsContainer: {
    alignItems: 'center',
    flex: 1
  }
});
