import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { black, extraLightGray, white } from './colors';
import { isAndroid, isIos } from './platform';

export const customStyles = () => {
  const customWidth = isAndroid ? '50%' : '100%';
  const headerStyle: ViewStyle = {
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
