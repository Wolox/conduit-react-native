import { darkGray, grayTransparent, green, scarletRed, white } from '@constants/colors';
import { SPACING } from '@constants/dimentions';
import { NUNITO } from '@constants/fonts';
import { StyleSheet } from 'react-native';

const SPACING_TWENTY = 20;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: grayTransparent
  },
  modalView: {
    margin: SPACING_TWENTY,
    backgroundColor: white,
    borderRadius: SPACING_TWENTY,
    padding: 35,
    width: '93%',
    height: 180,
    alignItems: 'center',
    shadowColor: darkGray,
    shadowOffset: {
      width: SPACING.NONE,
      height: SPACING.XXXSMALL
    },
    shadowOpacity: 0.3,
    shadowRadius: SPACING.XXSMALL,
    elevation: 5
  },
  button: {
    borderRadius: SPACING_TWENTY,
    padding: 15,
    elevation: SPACING.XXXSMALL
  },
  buttonClose: {
    backgroundColor: green
  },
  buttonRemove: {
    backgroundColor: scarletRed
  },
  textStyle: {
    color: white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: NUNITO
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: SPACING_TWENTY
  }
});
export default styles;
