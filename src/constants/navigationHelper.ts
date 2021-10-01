import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { black, extraLightGray, red, transparent, white } from './colors';
import { isAndroid, isIos } from './platform';

export const customStyles = () => {
  const customWidth = isAndroid ? '50%' : '100%';
  const headerStyle: ViewStyle = {
    borderWidth: 0,
    borderColor: red,
    shadowColor: transparent,
    backgroundColor: extraLightGray
  };
  const headerTitleStyle: TextStyle = {
    color: black,
    alignSelf: 'center',
    width: customWidth
  };
  return {
    headerStyle,
    headerTitleStyle
  };
};

const HEIGHT_TAB_NAV = isIos ? 70 : 55;
const PADDING_BUTTON_TAB_NAV = isAndroid ? 20 : 25;

export const styles = StyleSheet.create({
  styleTabNav: {
    height: HEIGHT_TAB_NAV,
    paddingTop: 5,
    backgroundColor: white,
    paddingBottom: PADDING_BUTTON_TAB_NAV
  }
});
