import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const heightHeader = height < 600 ? 150 : 200;

const styles = StyleSheet.create({
  image: {
    height: heightHeader,
    width: '100%',
    position: 'absolute',
    top: 0
  }
});

export default styles;
