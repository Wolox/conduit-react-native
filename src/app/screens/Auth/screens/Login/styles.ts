import { StyleSheet } from 'react-native';
import { green, lightGray, white } from '@constants/colors';

const COMMON_VALUE_25 = 25;
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  form: {
    width: 250
  },
  input: {
    borderBottomWidth: 0,
    backgroundColor: white,
    width: 300,
    height: 50,
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
  inputText: {
    padding: 10
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
    marginTop: 2
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
