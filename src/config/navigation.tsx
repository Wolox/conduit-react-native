import { StyleSheet } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';
import i18next from 'i18next';
import Routes from '@constants/routes';
import { isAndroid, isIos } from '@constants/platform';
import { green, lightGray, white } from '@constants/colors';
import statusBarConfig from '@constants/statusBar';
import { Navigation } from '@interfaces/navigation';

import fonts from './fonts';

export const withoutHeader = (): NavigationStackOptions => ({ headerShown: false });

const HEIGHT_TAB_NAV = isIos ? 70 : 55;
const PADDING_BUTTON_TAB_NAV = isAndroid ? 20 : 25;
const COMMON_VALUE_25 = 25;
const styles = StyleSheet.create({
  styleTabNav: {
    height: HEIGHT_TAB_NAV,
    paddingTop: 5,
    position: 'absolute',
    borderTopLeftRadius: COMMON_VALUE_25,
    borderTopRightRadius: COMMON_VALUE_25,
    backgroundColor: white,
    elevation: 1,
    paddingBottom: PADDING_BUTTON_TAB_NAV,
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
  [Routes.NewArticle]: withoutHeader,
  [Routes.MyArticles]: withoutHeader
};

export const statusBarStyles = {
  // TODO: Change these styles to customize the status bar
  default: statusBarConfig.greenStatusBar
};
