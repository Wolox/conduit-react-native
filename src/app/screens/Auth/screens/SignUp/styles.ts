import { StyleSheet } from 'react-native';
import { green, lightGray, white } from '@constants/colors';

const COMMON_VALUE_25 = 25;
const COMMON_VALUE_5 = 5;
const COMMON_PERCENTAJE_100 = '100%';
const COMMON_ALIGN_CENTER = 'center';
const COMMON_ALIGN_LEFT = 'left';

export default StyleSheet.create({
  container: {
    alignItems: COMMON_ALIGN_CENTER,
    justifyContent: COMMON_ALIGN_CENTER,
    paddingTop: 35
  },
  stretchAndFlex: {
    alignSelf: 'stretch'
  },
  form: {
    paddingBottom: 20,
    marginVertical: COMMON_VALUE_5,
    height: COMMON_PERCENTAJE_100,
    paddingHorizontal: 30
  },
  input: {
    borderBottomWidth: 0,
    backgroundColor: white,
    width: COMMON_PERCENTAJE_100,
    height: 40,
    borderRadius: 15,
    elevation: 1,
    shadowColor: lightGray,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3
    },
    alignSelf: COMMON_ALIGN_CENTER,
    paddingHorizontal: 8
  },
  errorContainer: {
    width: COMMON_PERCENTAJE_100,
    paddingLeft: COMMON_VALUE_5,
    alignSelf: COMMON_ALIGN_CENTER,
    textAlign: COMMON_ALIGN_LEFT
  },
  labelText: {
    alignSelf: COMMON_ALIGN_CENTER,
    color: green,
    width: COMMON_PERCENTAJE_100,
    paddingLeft: COMMON_VALUE_5,
    textAlign: COMMON_ALIGN_LEFT
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
    textAlign: COMMON_ALIGN_CENTER
  },
  textFormCustomText: {
    marginTop: COMMON_VALUE_25
  }
});
