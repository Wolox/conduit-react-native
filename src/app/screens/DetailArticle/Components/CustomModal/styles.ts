import { darkGray, grayTransparent, green, scarletRed, white } from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: grayTransparent
  },
  modalView: {
    margin: 20,
    backgroundColor: white,
    borderRadius: 20,
    padding: 35,
    width: '93%',
    height: 180,
    alignItems: 'center',
    shadowColor: darkGray,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2
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
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20
  }
});
export default styles;
