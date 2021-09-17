import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from '@components/AppNavigator';
import FullScreenModalReducer from '@components/FullScreenModalReducer';
import { apiSetup } from '@config/api';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import { State } from '@interfaces/reduxInterfaces';

import './i18n';

const App = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: State) => state.feedBack);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    apiSetup();
    dispatch(AuthActions.init());
  }, [dispatch]);

  return (
    <>
      <AppNavigator />
      <FullScreenModalReducer content={modal} />
    </>
  );
};

const MyAppWithOverlay = __DEV__ ? Reactotron.overlay(App) : App;

export default MyAppWithOverlay;
