import i18next from 'i18next';
import Routes from '@constants/routes';
import { white, fern } from '@constants/colors';
import statusBarConfig from '@constants/statusBar';
import { Navigation } from '@interfaces/navigation';

import fonts from './fonts';

// Default nav options for all screens
const defaultNavOptions = ({ route }: Navigation) => ({
  // Change screen title from i18n traslates files
  headerTitle: i18next.t(`app:${route.name}`),
  // TODO: The following options are examples. Change them to your need
  headerStyle: {
    backgroundColor: fern
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

const defaultTabNavOptions = {
  // TODO: Change them to your need
};

export const tabNavConfig = {
  // TODO: Change them to your need
  // tabBarOptions: {
  //   activeTintColor: 'blue',
  //   inactiveTintColor: 'gray',
  // }
  screenOptions: defaultTabNavOptions
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
    headerTitle: 'Home'
  }
};

export const statusBarStyles = {
  // TODO: Change these styles to customize the status bar
  [Routes.Login]: statusBarConfig.whiteStatusBar,
  [Routes.SignUp]: statusBarConfig.blueStatusBar,
  [Routes.Tab1]: statusBarConfig.blueStatusBar,
  [Routes.Tab2]: statusBarConfig.blueStatusBar,
  [Routes.Home]: statusBarConfig.blueStatusBar,
  default: statusBarConfig.transparentStatusBar
};
