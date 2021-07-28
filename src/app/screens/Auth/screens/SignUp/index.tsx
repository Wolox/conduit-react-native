import React from 'react';
import { Keyboard, TouchableWithoutFeedback, ScrollView, View } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import ControlledCustomTextInput from '@components/CustomTextInput/controller';
import { isIos } from '@constants/platform';
import { useAsyncRequest } from '@hooks/useRequest';
import { Navigation } from '@interfaces/navigation';
import { FIELDS, SignupFormValues } from '@screens/Auth/constants';
import * as AuthService from '@services/AuthService';
import { validateRequired, validateEmail, validateMinLength } from '@utils/validations/validateUtils';

import { MIN_LENGTH_PASS } from './constants';
import './i18n';
import styles from './styles';

function SignUp({ navigation }: Navigation) {
  const [, , error, signUp] = useAsyncRequest({
    request: AuthService.signup,
    withPostSuccess: () => navigation.goBack()
  });

  const {
    handleSubmit,
    control,
    formState: { isValid }
  } = useForm<SignupFormValues>({ mode: 'onBlur' });

  const hasSignUpError = !!error;
  const handleSignUp = (values: SignupFormValues) => {
    Keyboard.dismiss();
    signUp(values);
  };

  return (
    <>
      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        style={styles.stretchAndFlex}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.stretchAndFlex, styles.form]}>
            <ControlledCustomTextInput
              inputContainerStyle={styles.input}
              labelStyle={styles.labelText}
              errorContainerStyle={styles.errorContainer}
              control={control}
              keyboardType="default"
              label={i18next.t('SIGNUP:USERNAME')}
              name={FIELDS.username}
              placeholder={i18next.t('SIGNUP:USERNAME_PLACEHOLDER')}
              showError={hasSignUpError}
              rules={{ ...validateRequired }}
            />
            <ControlledCustomTextInput
              inputContainerStyle={styles.input}
              labelStyle={styles.labelText}
              errorContainerStyle={styles.errorContainer}
              control={control}
              keyboardType="email-address"
              label={i18next.t('SIGNUP:MAIL')}
              name={FIELDS.email}
              placeholder={i18next.t('SIGNUP:MAIL_PLACEHOLDER')}
              showError={hasSignUpError}
              rules={{ ...validateRequired, ...validateEmail }}
            />
            <ControlledCustomTextInput
              inputContainerStyle={styles.input}
              labelStyle={styles.labelText}
              errorContainerStyle={styles.errorContainer}
              control={control}
              showEye
              secureTextEntry
              label={i18next.t('SIGNUP:PASSWORD')}
              placeholder={i18next.t('SIGNUP:PASSWORD')}
              name={FIELDS.password}
              showError={hasSignUpError}
              rules={{ ...validateRequired, ...validateMinLength(MIN_LENGTH_PASS) }}
            />
            {hasSignUpError && (
              <CustomText error center>
                {i18next.t('SIGNUP:SIGNUP_FAILURE')}
              </CustomText>
            )}
            <CustomButton
              onPress={handleSubmit(handleSignUp)}
              style={styles.formButton}
              textStyle={styles.textFormButton}
              title={i18next.t('SIGNUP:SIGN_UP')}
              disabled={hasSignUpError || !isValid}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      {isIos && <KeyboardSpacer />}
    </>
  );
}

export default SignUp;
