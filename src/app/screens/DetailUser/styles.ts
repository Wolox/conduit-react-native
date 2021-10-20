import { StyleSheet } from 'react-native';
import { BOTTOM_SEPARATOR_LINE } from '@constants/commonStyles';
import { SPACING } from '@constants/dimentions';
import { grayTransparent, green } from '@constants/colors';

const styles = StyleSheet.create({
  containerBio: {
    width: '100%',
    marginVertical: 12,
    padding: 5
  },
  containerArticles: {
    flex: 1
  },
  description: {
    width: '100%',
    marginTop: 10
  },
  separator: {
    ...BOTTOM_SEPARATOR_LINE,
    width: '100%',
    alignItems: 'center'
  },
  titleEmptyArticles: {
    marginTop: SPACING.MEDIUM
  },
  followButtonContainer: {
    alignItems: 'flex-end',
    marginHorizontal: SPACING.SMALL
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    padding: 10,
    borderRadius: 50
  },
  following: {
    backgroundColor: green
  },
  unfollowing: {
    backgroundColor: grayTransparent
  },
  greenTint: {
    tintColor: green
  }
});
export default styles;
