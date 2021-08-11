import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';
import { SPACING } from '@constants/dimentions';

const ALIGN_CENTER = 'center';
const COMMON_TWENTY = 20;
const COMMON_TEN = 10;
const COMMON_SIZE_TRASH = 18;

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    width: '92%',
    alignSelf: ALIGN_CENTER,
    padding: COMMON_TEN,
    backgroundColor: white,
    justifyContent: 'space-between',
    borderRadius: COMMON_TWENTY,
    marginBottom: COMMON_TEN
  },
  containerUser: {
    width: '20%'
  },
  image: {
    height: COMMON_TWENTY,
    width: COMMON_TWENTY,
    borderRadius: COMMON_TWENTY,
    alignSelf: ALIGN_CENTER
  },
  userName: {
    fontSize: COMMON_TEN,
    fontWeight: 'bold',
    width: '100%',
    marginBottom: SPACING.XXXSMALL,
    textAlign: ALIGN_CENTER,
    paddingHorizontal: SPACING.XXSMALL
  },
  commentDate: {
    fontSize: COMMON_TEN,
    textAlign: ALIGN_CENTER
  },
  commentBody: {
    width: '68%'
  },
  commentText: {
    fontSize: 12
  },
  containerImage: {
    borderRadius: COMMON_TWENTY,
    overflow: 'hidden',
    marginBottom: SPACING.XXXSMALL
  },
  containerTrash: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  icTrash: {
    height: COMMON_SIZE_TRASH,
    width: COMMON_SIZE_TRASH
  }
});

export default styles;
