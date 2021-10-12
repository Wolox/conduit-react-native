import { StyleSheet } from 'react-native';

const COMMON_LARGE = '100%';

const styles = StyleSheet.create({
  container: {
    width: COMMON_LARGE,
    height: 120,
    overflow: 'hidden'
  },
  headerBgStyle: {
    position: 'absolute',
    width: COMMON_LARGE,
    height: COMMON_LARGE
  },
  logo: {
    height: 28,
    width: COMMON_LARGE,
    marginTop: '15%'
  }
});

export default styles;
