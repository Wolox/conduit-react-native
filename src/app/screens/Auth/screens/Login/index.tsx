import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import ControlledCustomTextInput from '@components/CustomTextInput/controller';
import Routes from '@constants/routes';
import { Navigation } from '@interfaces/navigation';
import { State } from '@interfaces/reduxInterfaces';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import { FIELDS, LoginFormValues } from '@screens/Auth/constants';
import { validateRequired, validateEmail, validateMinLength } from '@utils/validations/validateUtils';

import './i18n';
import styles from './styles';
import { MIN_LENGTH_PASS } from './constants';
import CustomTextPressable from './components/CustomTextPressable';
import Header from './components/Header';
import LogoConduit from './components/LogoConduit';

function Login({ navigation }: Navigation) {
  const dispatch = useDispatch();
  const hasLoginError = useSelector<State, boolean>((state: State) => !!state.auth.currentUserError);

  const { handleSubmit, control } = useForm<LoginFormValues>({ mode: 'onBlur' });

  const handleLogin = (values: LoginFormValues) => dispatch(AuthActions.login(values));

  const handleGoToSignUp = () => navigation.navigate(Routes.SignUp);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <LogoConduit />
        <View style={styles.form}>
          <ControlledCustomTextInput
            control={control}
            style={styles.inputText}
            inputContainerStyle={styles.input}
            labelStyle={styles.labelText}
            errorContainerStyle={styles.errorContainer}
            keyboardType="email-address"
            label={i18next.t('LOGIN:MAIL')}
            name={FIELDS.email}
            placeholder={i18next.t('LOGIN:MAIL_PLACEHOLDER')}
            showError={hasLoginError}
            rules={{ ...validateRequired, ...validateEmail }}
          />
          <ControlledCustomTextInput
            control={control}
            style={styles.inputText}
            inputContainerStyle={styles.input}
            labelStyle={styles.labelText}
            errorContainerStyle={styles.errorContainer}
            placeholder={i18next.t('LOGIN:PASSWORD')}
            showEye
            secureTextEntry
            label={i18next.t('LOGIN:PASSWORD')}
            name={FIELDS.password}
            showError={hasLoginError}
            rules={{ ...validateRequired, ...validateMinLength(MIN_LENGTH_PASS) }}
          />
          {hasLoginError && (
            <CustomText error center>
              {i18next.t('LOGIN:LOGIN_FAILURE')}
            </CustomText>
          )}
        </View>
        <CustomButton
          onPress={handleSubmit(handleLogin)}
          style={styles.formButton}
          textStyle={styles.textFormButton}
          title={i18next.t('LOGIN:LOG_IN')}
        />
        <CustomTextPressable
          text={i18next.t('LOGIN:SIGN_UP')}
          onPress={handleGoToSignUp}
          style={styles.textFormCustomText}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;
