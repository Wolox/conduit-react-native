import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { appScreensNavOptions } from '@config/navigation';
import { AppStackParamList } from '@config/appParamList';
import Routes from '@constants/routes';

const tabBarListeners = ({ navigation, route }: any) => ({
  tabPress: () => navigation.navigate(route.name)
});

export function inferRoute(NavigationStructure: any) {
  return function screenComponent(screenObj: any) {
    // @ts-ignore
    const screenName = Routes[Object.keys(screenObj)?.[0]];
    return (
      <NavigationStructure.Screen
        name={screenName}
        component={screenObj[screenName]}
        // @ts-ignore
        options={appScreensNavOptions[screenName]}
        listeners={tabBarListeners}
      />
    );
  };
}

type TypedParams = keyof AppStackParamList;
export type RouteType<T extends TypedParams> = RouteProp<AppStackParamList, T>;
export type NavigationType<T extends TypedParams> = StackNavigationProp<AppStackParamList, T>;
export function useRouteWithParams<T extends TypedParams>() {
  return useRoute<RouteType<T>>();
}
export function useNavigationWithParams<T extends TypedParams>() {
  return useNavigation<NavigationType<T>>();
}
