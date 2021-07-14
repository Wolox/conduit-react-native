import { gray, green, white } from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 28,
    width: 30,
    marginTop: 3
  },
  textActive: {
    color: green
  },
  textInactive: {
    color: gray
  },
  selectedRoute: {
    padding: 14,
    backgroundColor: white,
    marginBottom: 10,
    borderRadius: 100
  }
});

export default styles;
