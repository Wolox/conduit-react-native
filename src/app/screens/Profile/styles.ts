import { StyleSheet } from 'react-native';
import { transparent, green, white } from '@constants/colors';

const COMMON_VALUE_25 = 25;
const SMALL_SPACING = 10;
const SPACING = 30;
const COMMON_VALUE_5 = 5;

const FORM_ELEMENT_COMMON_PROPS = {
  margin: COMMON_VALUE_5,
  backgroundColor: transparent,
  height: SPACING
};

export default StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 0,
    flex: 1,
    paddingBottom: COMMON_VALUE_5,
    justifyContent: 'space-between'
  },
  containerData: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    paddingTop: SPACING,
    paddingHorizontal: SMALL_SPACING
  },
  stretchAndFlex: {
    alignSelf: 'stretch'
  },
  formElement: {
    ...FORM_ELEMENT_COMMON_PROPS,
    marginBottom: SPACING
  },
  firstElement: {
    marginBottom: 45
  },
  lastElement: {
    marginBottom: SMALL_SPACING
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
