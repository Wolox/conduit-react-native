import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { State } from '@interfaces/reduxInterfaces';
import Routes from '@constants/routes';
import { authStackNavConfig, appStackNavConfig, tabNavConfig } from '@config/navigation';
import { inferRoute } from '@utils/navUtils';
import Login from '@authScreens/Login';
import SignUp from '@authScreens/SignUp';
import Home from '@screens/Home';
import NewArticle from '@screens/NewArticle';

import TabBar from '../TabBar';

const Stack = createStackNavigator();

const renderTab = (focused: boolean, name: string, key: string): ReactElement => (
  <TabBar focused={focused} currentTab={name} key={key} />
);

const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      {...tabNavConfig}
      screenOptions={({ route: { name, key } }) => ({
        tabBarIcon: ({ focused }) => renderTab(focused, name, key)
      })}>
      {inferRoute(Tab)({ [Routes.Tab1]: Home })}
      {inferRoute(Tab)({ [Routes.Tab2]: Home })}
      {inferRoute(Tab)({ [Routes.Tab3]: Home })}
      {inferRoute(Tab)({ [Routes.Tab4]: Home })}
      {inferRoute(Tab)({ [Routes.Tab5]: Home })}
    </Tab.Navigator>
  );
}

const AuthStackTabs = () => {
  return (
    <Stack.Navigator {...authStackNavConfig}>
      {inferRoute(Stack)({ [Routes.Login]: Login })}
      {inferRoute(Stack)({ [Routes.SignUp]: SignUp })}
    </Stack.Navigator>
  );
};

function AuthTabs() {
  return (
    <Tab.Navigator
      {...tabNavConfig}
      screenOptions={({ route: { name, key } }) => ({
        tabBarIcon: ({ focused }) => renderTab(focused, name, key)
      })}>
      {inferRoute(Tab)({ [Routes.Tab1]: Home })}
      {inferRoute(Tab)({ [Routes.Login]: AuthStackTabs })}
    </Tab.Navigator>
  );
}
const AuthStack = () => {
  return (
    <>
      {inferRoute(Stack)({ [Routes.Home]: AuthTabs })}
      {inferRoute(Stack)({ [Routes.NewArticle]: NewArticle })}
    </>
  );
};
function AppStack() {
  return <>{inferRoute(Stack)({ [Routes.Home]: HomeTabs })}</>;
}

const Navigator = () => {
  const currentUser = useSelector((state: State) => state.auth.currentUser);
  const defaultStackConfig = currentUser ? appStackNavConfig : authStackNavConfig;
  return <Stack.Navigator {...defaultStackConfig}>{currentUser ? AppStack() : AuthStack()}</Stack.Navigator>;
};

export default Navigator;
