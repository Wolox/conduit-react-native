import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { State } from '@interfaces/reduxInterfaces';
import Routes from '@constants/routes';
import { authStackNavConfig, appStackNavConfig, tabNavConfig, profileStackConfig } from '@config/navigation';
import { inferRoute } from '@utils/navUtils';
import { AppStackParamList } from '@config/appParamList';
import Login from '@authScreens/Login';
import SignUp from '@authScreens/SignUp';
import Home from '@screens/Home';
import FavArticles from '@screens/FavArticles';
import Profile from '@screens/Profile';
import NewArticle from '@screens/NewArticle';
import MyArticles from '@screens/MyArticles';
import DetailArticle from '@screens/DetailArticle';
import Tags from '@screens/Tags';
import Confirmation from '@screens/Confirmation';

import TabBar from '../TabBar';

const Stack = createStackNavigator<AppStackParamList | any>();
const Tab = createBottomTabNavigator();

const renderTab = (focused: boolean, name: string, key: string): ReactElement => (
  <TabBar focused={focused} currentTab={name} key={key} />
);

const HomeStack = () => (
  <Stack.Navigator {...appStackNavConfig}>
    {inferRoute(Stack)({ [Routes.Home]: Home })}
    {inferRoute(Stack)({ [Routes.DetailArticle]: DetailArticle })}
    {inferRoute(Stack)({ [Routes.EditArticle]: NewArticle })}
    {inferRoute(Stack)({ [Routes.Tags]: Tags })}
  </Stack.Navigator>
);

const MyArticlesStack = () => (
  <Stack.Navigator {...appStackNavConfig}>
    {inferRoute(Stack)({ [Routes.MyArticles]: MyArticles })}
    {inferRoute(Stack)({ [Routes.DetailArticle]: DetailArticle })}
    {inferRoute(Stack)({ [Routes.EditArticle]: NewArticle })}
  </Stack.Navigator>
);

const MyFavArticlesStack = () => (
  <Stack.Navigator {...appStackNavConfig}>
    {inferRoute(Tab)({ [Routes.FavArticles]: FavArticles })}
    {inferRoute(Stack)({ [Routes.DetailArticle]: DetailArticle })}
    {inferRoute(Stack)({ [Routes.EditArticle]: NewArticle })}
  </Stack.Navigator>
);

const ArticlesStack = () => (
  <Stack.Navigator {...appStackNavConfig}>
    {inferRoute(Tab)({ [Routes.FavArticles]: NewArticle })}
    {inferRoute(Stack)({ [Routes.Confirmation]: Confirmation })}
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator {...profileStackConfig}>
    {inferRoute(Stack)({ [Routes.Profile]: Profile })}
  </Stack.Navigator>
);

function HomeTabs() {
  return (
    <Tab.Navigator
      {...tabNavConfig}
      screenOptions={({ route: { name, key } }) => ({
        tabBarIcon: ({ focused }) => renderTab(focused, name, key)
      })}>
      {inferRoute(Tab)({ [Routes.Tab1]: HomeStack })}
      {inferRoute(Tab)({ [Routes.MyArticles]: MyArticlesStack })}
      {inferRoute(Tab)({ [Routes.Tab3]: ArticlesStack })}
      {inferRoute(Tab)({ [Routes.FavArticles]: MyFavArticlesStack })}
      {inferRoute(Tab)({ [Routes.Tab5]: ProfileStack })}
    </Tab.Navigator>
  );
}

const AuthStackTabs = () => (
  <Stack.Navigator {...authStackNavConfig}>
    {inferRoute(Stack)({ [Routes.Login]: Login })}
    {inferRoute(Stack)({ [Routes.SignUp]: SignUp })}
  </Stack.Navigator>
);

const AuthTabs = () => (
  <Tab.Navigator
    {...tabNavConfig}
    screenOptions={({ route: { name, key } }) => ({
      tabBarIcon: ({ focused }) => renderTab(focused, name, key)
    })}>
    {inferRoute(Tab)({ [Routes.Home]: HomeStack })}
    {inferRoute(Tab)({ [Routes.Login]: AuthStackTabs })}
  </Tab.Navigator>
);

const AuthStack = () => <>{inferRoute(Stack)({ [Routes.Auth]: AuthTabs })}</>;

const AppStack = () => (
  <>
    {inferRoute(Stack)({ [Routes.Home]: HomeTabs })}
    {inferRoute(Stack)({ [Routes.NewArticle]: NewArticle })}
  </>
);

const Navigator = () => {
  const currentUser = useSelector((state: State) => state.auth.currentUser);
  const defaultStackConfig = currentUser ? appStackNavConfig : authStackNavConfig;
  return <Stack.Navigator {...defaultStackConfig}>{currentUser ? AppStack() : AuthStack()}</Stack.Navigator>;
};

export default Navigator;
