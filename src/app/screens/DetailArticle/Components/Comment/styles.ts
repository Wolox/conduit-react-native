import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';

const styles = StyleSheet.create({
  comment: {
    display: 'flex',
    flexDirection: 'row',
    width: '92%',
    alignSelf: 'center',
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
    borderRadius: 20
  },
  userName: {
    fontSize: 10,
    fontWeight: 'bold'
  },
  commentDate: {
    fontSize: 10
  },
  commentBody: {
    width: '70%'
  },
  commentText: {
    fontSize: 12
  }
});

export default styles;
