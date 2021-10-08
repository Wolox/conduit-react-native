import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';
import { SPACING } from '@constants/dimentions';
import { NUNITO } from '@constants/fonts';

const ALIGN_CENTER = 'center';
const COMMON_TWENTY = 20;
const COMMON_TEN = 10;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '92%',
    alignSelf: ALIGN_CENTER,
    padding: COMMON_TEN,
    backgroundColor: white,
    borderRadius: COMMON_TWENTY,
    marginBottom: COMMON_TEN
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: ALIGN_CENTER
  },
  containerUser: {
    width: '24%'
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
    paddingHorizontal: SPACING.XXSMALL,
    fontFamily: NUNITO
  },
  commentDate: {
    fontSize: COMMON_TEN,
    textAlign: ALIGN_CENTER,
    fontFamily: NUNITO
  },
  commentBody: {
    width: '68%',
    textAlign: 'left'
  },
  fullCommentBody: {
    width: '100%'
  },
  commentText: {
    fontSize: 12
  },
  containerImage: {
    borderRadius: COMMON_TWENTY,
    overflow: 'hidden',
    marginBottom: SPACING.XXXSMALL
  }
});

export default styles;
