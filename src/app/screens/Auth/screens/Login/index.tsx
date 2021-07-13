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
import { validateRequired, validateEmail } from '@utils/validations/validateUtils';

import './i18n';
import styles from './styles';
import testIds from './testIds';

function Login({ navigation }: Navigation) {
  const dispatch = useDispatch();
  const hasLoginError = useSelector<State, boolean>((state: State) => !!state.auth.currentUserError);

  const { handleSubmit, control } = useForm<LoginFormValues>({ mode: 'onBlur' });

  const handleLogin = (values: LoginFormValues) => dispatch(AuthActions.login(values));

  const handleGoToSignUp = () => navigation.navigate(Routes.SignUp);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} testID={testIds.loginView}>
      <View style={styles.container}>
        <View style={styles.form}>
          <ControlledCustomTextInput
            testIDProp={testIds.emailLoginInput}
            control={control}
            animated
            keyboardType="email-address"
            label={i18next.t('LOGIN:MAIL')}
            name={FIELDS.email}
            placeholder={i18next.t('LOGIN:MAIL_PLACEHOLDER')}
            showError={hasLoginError}
            rules={{ ...validateRequired, ...validateEmail }}
          />
          <ControlledCustomTextInput
            testIDProp={testIds.passwordLoginInput}
            control={control}
            animated
            showEye
            secureTextEntry
            label={i18next.t('LOGIN:PASSWORD')}
            name={FIELDS.password}
            showError={hasLoginError}
            rules={validateRequired}
          />
          {hasLoginError && (
            <CustomText error center>
              {i18next.t('LOGIN:LOGIN_FAILURE')}
            </CustomText>
          )}
        </View>
        <CustomButton
          testID={testIds.loginButton}
          onPress={handleSubmit(handleLogin)}
          style={styles.formButton}
          title={i18next.t('LOGIN:LOG_IN')}
        />
        <CustomButton
          testID={testIds.signUpButton}
          onPress={handleGoToSignUp}
          style={styles.formButton}
          title={i18next.t('LOGIN:SIGN_UP')}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;
