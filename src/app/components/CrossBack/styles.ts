import { extraLightGray, white } from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    borderRadius: 50,
    backgroundColor: white,
    padding: 13,
    elevation: 1,
    shadowColor: extraLightGray,
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowOpacity: 0.1
  }
});
export default styles;
