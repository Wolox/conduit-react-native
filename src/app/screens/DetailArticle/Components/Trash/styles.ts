import { StyleSheet } from 'react-native';
import { red } from '@constants/colors';

const COMMON_SIZE_TRASH = 18;

const styles = StyleSheet.create({
  containerTrash: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    width: '8%'
  },
  icTrash: {
    height: COMMON_SIZE_TRASH,
    width: COMMON_SIZE_TRASH,
    tintColor: red
  }
});

export default styles;
