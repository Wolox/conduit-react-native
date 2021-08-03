import { gray, green } from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  statusNavBar: {
    marginTop: 20,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.2,
    borderColor: gray
  },
  textActive: {
    borderBottomColor: green,
    borderBottomWidth: 2,
    marginBottom: -1
  }
});
export default styles;
