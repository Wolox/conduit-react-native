import { StyleSheet } from 'react-native';
import { BOTTOM_SEPARATOR_LINE } from '@constants/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    ...BOTTOM_SEPARATOR_LINE,
    width: '100%',
    alignItems: 'center'
  },
  noItemMessage: {
    marginTop: '10%',
    alignItems: 'center',
    flex: 1
  }
});
export default styles;
