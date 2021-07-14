import { StyleSheet } from 'react-native';
import i18next from 'i18next';
import Routes from '@constants/routes';
import { isAndroid, isIos } from '@constants/platform';
import { green, lightGray, white } from '@constants/colors';
import statusBarConfig from '@constants/statusBar';
import { Navigation } from '@interfaces/navigation';

import fonts from './fonts';

const heightTabNav = isIos ? 70 : 55;
const paddingButtonTabNav = isAndroid ? 20 : 25;
const styles = StyleSheet.create({
  styleTabNav: {
    height: heightTabNav,
    paddingTop: 5,
    position: 'absolute',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: white,
    elevation: 1,
    paddingBottom: paddingButtonTabNav,
    shadowOpacity: 0.4,
    shadowColor: lightGray
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

export const appStackNavConfig = {
  screenOptions: defaultNavOptions
};

export const authStackNavConfig = {
  screenOptions: defaultNavOptions,
  initialRouteName: Routes.Login
};

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
  [Routes.Login]: {
    headerShown: false
  },
  [Routes.OnBoarding]: {
    headerShown: false
  },
  [Routes.Home]: {
    headerShown: false
  }
};

export const statusBarStyles = {
  // TODO: Change these styles to customize the status bar
  [Routes.Login]: statusBarConfig.greenStatusBar,
  [Routes.SignUp]: statusBarConfig.greenStatusBar,
  [Routes.Tab1]: statusBarConfig.greenStatusBar,
  [Routes.Tab2]: statusBarConfig.greenStatusBar,
  [Routes.Home]: statusBarConfig.greenStatusBar,
  default: statusBarConfig.transparentStatusBar
};
