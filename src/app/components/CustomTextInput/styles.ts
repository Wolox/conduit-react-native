import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import { blue, gray, darkGray, red, white, lightGray, green } from '@constants/colors';
import { SIZES } from '@constants/fonts';

export default StyleSheet.create({
  container: {
    marginBottom: 5,
    padding: 10
  },
  withAnimatedLabel: {
    marginTop: 20
  },
  multilineContainer: {
    height: 75,
    paddingHorizontal: 5,
    backgroundColor: white,
    elevation: 1,
    shadowColor: lightGray,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  inputContainer: {
    alignItems: 'center',
    borderBottomWidth: 0,
    borderColor: darkGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: white,
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
  bottomBorderBlue: {
    borderColor: blue
  },
  bottomBorderRed: {
    borderColor: red
  },
  bottomBorderLightGray: {
    borderColor: gray
  },
  inputStyle: {
    ...fonts.baseFont,
    fontSize: SIZES.SMALL,
    color: darkGray,
    padding: 0,
    margin: 0
  },
  singleInput: {
    flex: 1
  },
  errorContainer: {
    height: 15,
    marginTop: 3
  }
});
