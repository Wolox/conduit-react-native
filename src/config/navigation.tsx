import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';
import i18next from 'i18next';
import Routes from '@constants/routes';
import { isAndroid, isIos } from '@constants/platform';
import { black, extraLightGray, green, white } from '@constants/colors';
import statusBarConfig from '@constants/statusBar';
import { Navigation } from '@interfaces/navigation';
import { NavigationProp } from '@react-navigation/core';
import CrossBack from '@components/CrossBack';
import { AppStackParamList } from '@config/appParamList';

import fonts from './fonts';

export const withoutHeader = (): NavigationStackOptions => ({ headerShown: false });
type Props = {
  navigation: NavigationProp<AppStackParamList>;
};
const customStyles = () => {
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
export const withCustomHeader = ({ navigation }: Props): NavigationStackOptions => ({
  headerStyle: customStyles().headerStyle,
  headerTitleStyle: customStyles().headerTitleStyle,
  headerLeft: () => {
    return <CrossBack navigation={navigation} />;
  }
});

const HEIGHT_TAB_NAV = isIos ? 70 : 55;
const PADDING_BUTTON_TAB_NAV = isAndroid ? 20 : 25;
const styles = StyleSheet.create({
  styleTabNav: {
    height: HEIGHT_TAB_NAV,
    paddingTop: 5,
    backgroundColor: white,
    paddingBottom: PADDING_BUTTON_TAB_NAV
  }
});
// Default nav options for all screens
const defaultNavOptions = ({ route }: Navigation) => ({
  // Change screen title from i18n traslates files
  headerTitle: i18next.t(`app:${route.name}`),
  // TODO: The following options are examples. Change them to your need
  headerStyle: {
    backgroundColor: green
  },
  headerBackTitleStyle: {
    color: white
  },
  headerTitleStyle: {
    ...fonts.baseFont,
    color: white
  },
  headerTintColor: white
});

const defaultStackNavConfig = (initialRoute?: string) => ({
  screenOptions: defaultNavOptions,
  initialRouteName: initialRoute
});

export const appStackNavConfig = defaultStackNavConfig(Routes.Home);

export const authStackNavConfig = defaultStackNavConfig(Routes.Login);

export const profileStackConfig = defaultStackNavConfig(Routes.Profile);

// const defaultTabNavOptions = {
// TODO: Change them to your need
// };

export const tabNavConfig = {
  // TODO: Change them to your need
  initialRouteName: Routes.Home,
  tabBarOptions: {
    showLabel: false,
    lazyLoad: true,
    style: styles.styleTabNav
  }
};

// Default nav options for all screens
export const appScreensNavOptions = {
  // TODO: Add here the screens nav options that changes with respect to
  // the default ones defined in defaultNavOptions, for example...
  [Routes.Auth]: withoutHeader,
  [Routes.App]: withoutHeader,
  [Routes.OnBoarding]: withoutHeader,
  [Routes.Profile]: withoutHeader,
  [Routes.Login]: withoutHeader,
  [Routes.Home]: withoutHeader,
  [Routes.Confirmation]: withCustomHeader,
  [Routes.NewArticle]: withoutHeader,
  [Routes.MyArticles]: withoutHeader,
  [Routes.FavArticles]: withoutHeader
};

export const statusBarStyles = {
  // TODO: Change these styles to customize the status bar
  default: statusBarConfig.greenStatusBar
};
