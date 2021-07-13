import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { State } from '@interfaces/reduxInterfaces';
import Routes from '@constants/routes';
import { authStackNavConfig, appStackNavConfig, tabNavConfig } from '@config/navigation';
import { inferRoute } from '@utils/navUtils';
import Login from '@authScreens/Login';
import SignUp from '@authScreens/SignUp';
import OnBoarding from '@screens/OnBoarding';
import Home from '@screens/Home';
import Articles from '@screens/Articles';

const Stack = createStackNavigator();

const AuthStack = () => (
  <>
    {inferRoute(Stack)({ [Routes.Login]: Login })}
    {inferRoute(Stack)({ [Routes.SignUp]: SignUp })}
  </>
);

const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator {...tabNavConfig}>
      {inferRoute(Tab)({ [Routes.Tab1]: Articles })}
      {inferRoute(Tab)({ [Routes.Tab2]: Home })}
    </Tab.Navigator>
  );
}

function AppStack() {
  return <>{inferRoute(Stack)({ [Routes.Home]: HomeTabs })}</>;
}

const OnBoardingStack = () => <>{inferRoute(Stack)({ [Routes.OnBoarding]: OnBoarding })}</>;

const Navigator = () => {
  const hasAccessOnBoarding = useSelector((state: State) => state.auth.hasAccessOnBoarding);
  const currentUser = useSelector((state: State) => state.auth.currentUser);
  const defaultStackConfig = currentUser ? appStackNavConfig : authStackNavConfig;
  return (
    <Stack.Navigator {...defaultStackConfig}>
      {currentUser ? (hasAccessOnBoarding ? AppStack() : OnBoardingStack()) : AuthStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
