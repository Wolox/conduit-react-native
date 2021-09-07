import React, { useCallback } from 'react';
import { Keyboard, TouchableWithoutFeedback, ScrollView, View } from 'react-native';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import ControlledCustomTextInput from '@components/CustomTextInput/controller';
import { useAsyncRequest } from '@hooks/useRequest';
import { FIELDS, SignupFormValues } from '@screens/Auth/constants';
import * as AuthService from '@services/AuthService';
import { validateRequired, validateEmail, validateMinLength } from '@utils/validations/validateUtils';
import useNavigation from '@components/AppNavigator/helper';
import CustomModal from '@components/CustomModal';
import CustomModalConfirm from '@components/CustomModalConfirm';
import Routes from '@constants/routes';
import { actionCreators as FeedbackActions } from '@redux/feedback/actions';

import { MIN_LENGTH_PASS } from './constants';
import './i18n';
import styles from './styles';

function SignUp() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const closeModal = useCallback(() => {
    dispatch(FeedbackActions.hideModal());
    navigation?.navigate(Routes.Login);
  }, [dispatch, navigation]);
  const renderError = () => {
    dispatch(
      FeedbackActions.showModal(
        <CustomModal
          title={i18next.t('SIGNUP:ERROR_SIGN_IN')}
          body={
            <CustomModalConfirm
              text={i18next.t('SIGNUP:ERROR_MESSAGE')}
              onPress={closeModal}
              buttonText={i18next.t('SIGNUP:CLOSE_MODAL')}
            />
          }
        />
      )
    );
  };
  const renderConfirm = () => {
    navigation?.navigate(Routes.Login);
    dispatch(
      FeedbackActions.showModal(
        <CustomModal
          title={i18next.t('SIGNUP:SUCCESS_CREATE_TITLE')}
          body={
            <CustomModalConfirm
              text={i18next.t('SIGNUP:SUCCESS_MESSAGE')}
              onPress={closeModal}
              buttonText={i18next.t('SIGNUP:CLOSE_MODAL')}
            />
          }
        />
      )
    );
  };

  const [, , error, signUp] = useAsyncRequest({
    request: AuthService.signup,
    withPostSuccess: () => renderConfirm(),
    withPostFailure: () => renderError()
  });

  const {
    handleSubmit,
    control,
    formState: { isValid }
  } = useForm<SignupFormValues>({ mode: 'onBlur' });

  const hasSignUpError = !!error;
  const handleSignUp = async (values: SignupFormValues) => {
    Keyboard.dismiss();
    await signUp(values);
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
    </>
  );
}

export default SignUp;
