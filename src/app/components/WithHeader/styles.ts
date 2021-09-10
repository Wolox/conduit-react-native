import { StyleSheet } from 'react-native';
import { white, green } from '@constants/colors';
import { moderateScale, scale } from '@utils/scalingUtils';
import { BORDER_WIDTH } from '@constants/dimentions';

const RADIUS = 14;

const AVATAR_SIZE = scale(100);
const AVATAR_OVERLAP = AVATAR_SIZE / 2;

const HIDDEN = 'hidden';
const TOTAL_ROUNDED = 100;

const TOTAL_PERCENT = '100%';

export const HEADER_SIZE = moderateScale(107);

export default StyleSheet.create({
  container: {
    backgroundColor: green,
    width: TOTAL_PERCENT
  },
  headerContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    minHeight: HEADER_SIZE,
    flexDirection: 'row'
  },
  textContainer: {
    flex: 2
  },
  title: {
    marginBottom: 5
  },
  contentContainer: {
    flex: 1
  },
  childrenContainer: {
    width: TOTAL_PERCENT,
    height: TOTAL_PERCENT,
    backgroundColor: white,
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
    overflow: HIDDEN,
    position: 'absolute',
    top: 0
  },
  longChildrenContainer: {
    paddingTop: AVATAR_OVERLAP - 10
  },
  borderContainer: {
    height: RADIUS,
    width: TOTAL_PERCENT,
    position: 'absolute',
    top: 0,
    flexDirection: 'row'
  },
  border: {
    flex: 1,
    backgroundColor: green
  },
  avatarContainer: {
    position: 'absolute',
    top: -AVATAR_OVERLAP - 10,
    alignItems: 'center',
    width: TOTAL_PERCENT
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderColor: white,
    borderWidth: BORDER_WIDTH.THIN,
    backgroundColor: green
  },
  avatarBorder: {
    height: TOTAL_PERCENT,
    overflow: HIDDEN,
    borderRadius: TOTAL_ROUNDED,
    elevation: 10
  },
  defaultAvatar: {
    tintColor: white
  }
});
