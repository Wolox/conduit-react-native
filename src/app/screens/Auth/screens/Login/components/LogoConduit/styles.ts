import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const marginLogo = height < 600 ? 50 : 10;

const styles = StyleSheet.create({
  containerimag: {
    height: 50,
    marginBottom: 5,
    marginTop: marginLogo,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    position: 'absolute',
    height: '60%',
    width: 140,
    top: 0
  }
});
export default styles;
