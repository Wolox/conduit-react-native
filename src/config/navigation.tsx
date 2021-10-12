import React from 'react';
import { NavigationStackOptions } from 'react-navigation-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import i18next from 'i18next';
import Routes from '@constants/routes';
import { green, transparent, white } from '@constants/colors';
import statusBarConfig from '@constants/statusBar';
import { Navigation } from '@interfaces/navigation';
import CrossBack from '@components/CrossBack';
import { customStyles, styles } from '@constants/navigationHelper';

import fonts from './fonts';

export const withoutHeader = (): NavigationStackOptions => ({
  headerShown: false
});
export const withoutShadow = (): NavigationStackOptions => ({
  headerStyle: { shadowColor: transparent, backgroundColor: green }
});

export const withCustomHeader = (): NavigationStackOptions => ({
  headerTitle: '',
  headerStyle: customStyles().headerStyle,
  headerTitleStyle: customStyles().headerTitleStyle,
  headerLeft: () => null,
  headerRight: () => {
    return <CrossBack />;
  }
});
// Default nav options for all screens
const defaultNavOptions = ({ route }: Navigation) => ({
  // Change screen title from i18n traslates files
  headerTitle: i18next.t(`app:${route.name}`),
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

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
  [Routes.FavArticles]: withoutHeader,
  [Routes.DetailUser]: withoutShadow
};

export const statusBarStyles = {
  // TODO: Change these styles to customize the status bar
  default: statusBarConfig.greenStatusBar
};
