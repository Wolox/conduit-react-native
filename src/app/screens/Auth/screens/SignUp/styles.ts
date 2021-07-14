import { StyleSheet } from 'react-native';
import { green, lightGray, white } from '@constants/colors';

const COMMON_VALUE_25 = 25;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
    paddingTop: 12
  },
  stretchAndFlex: {
    alignSelf: 'stretch'
  },
  form: {
    paddingBottom: 20,
    marginVertical: 5,
    height: '100%',
    paddingHorizontal: 30
  },
  input: {
    borderBottomWidth: 0,
    backgroundColor: white,
    width: '100%',
    height: 35,
    borderRadius: 15,
    elevation: 1,
    shadowColor: lightGray,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3
    },
    alignSelf: 'center',
    paddingHorizontal: 8
  },
  errorContainer: {
    width: 280,
    alignSelf: 'center',
    textAlign: 'left'
  },
  labelText: {
    alignSelf: 'center',
    color: green,
    width: 290,
    textAlign: 'left'
  },
  formButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: COMMON_VALUE_25,
    marginTop: COMMON_VALUE_25
  },
  textFormButton: {
    color: white,
    fontWeight: 'bold',
    width: '60%',
    textAlign: 'center'
  },
  textFormCustomText: {
    marginTop: COMMON_VALUE_25
  }
});
