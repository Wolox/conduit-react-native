import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';
import { SPACING } from '@constants/dimentions';

const ALIGN_CENTER = 'center';

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    width: '92%',
    alignSelf: ALIGN_CENTER,
    padding: 10,
    backgroundColor: white,
    justifyContent: 'space-between',
    borderRadius: 20,
    marginBottom: 10
  },
  containerUser: {
    width: '30%'
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 20,
    alignSelf: ALIGN_CENTER
  },
  userName: {
    fontSize: 10,
    fontWeight: 'bold',
    width: '100%',
    marginBottom: SPACING.XXXSMALL,
    textAlign: ALIGN_CENTER,
    paddingHorizontal: SPACING.XXSMALL
  },
  commentDate: {
    fontSize: 10,
    textAlign: ALIGN_CENTER
  },
  commentBody: {
    width: '70%'
  },
  commentText: {
    fontSize: 12
  },
  containerImage: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: SPACING.XXXSMALL
  }
});

export default styles;
