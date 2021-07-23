import React from 'react';
import i18next from 'i18next';
import { Keyboard, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import WithHeader from '@components/WithHeader';
import Routes from '@constants/routes';
import { isIos } from '@constants/platform';
import { OPACITY } from '@constants/commonStyles';
import { Navigation } from '@interfaces/navigation';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import logoutIcon from '@assets/Profile/ic_logout.png';
import CustomButton from '@components/CustomButton';
import ControlledCustomTextInput from '@components/CustomTextInput/controller';
import * as AuthService from '@services/AuthService';
import { useAsyncRequest } from '@hooks/useRequest';
import { validateRequired, validateEmail, validateOnlyText } from '@utils/validations/validateUtils';
import signUpStyles from '@screens/Auth/screens/SignUp/styles';

import './i18n';

import styles from './styles';
import ProfileListItem from './components/ProfileItem';
import { ANDROID_SCROLLVIEW_PROPS, ProfileFormValues, FIELDS } from './constants';

interface Props extends Navigation {}

function Profile() {
  const dispatch = useDispatch();
  const handlePressLogout = () => dispatch(AuthActions.logout());

  const [, , error, updateProfile] = useAsyncRequest({
    request: AuthService.updateProfile
  });

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty }
  } = useForm<ProfileFormValues>({ mode: 'onBlur' });

  const hasError = !!error;
  const handleUpdateProfile = (values: ProfileFormValues) => {
    Keyboard.dismiss();
    updateProfile(values);
  };

  return (
    <WithHeader title={i18next.t(`app:${Routes.Profile}`)} withAvatar>
      <View style={styles.container}>
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.containerData}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={styles.stretchAndFlex}
          {...(isIos ? {} : ANDROID_SCROLLVIEW_PROPS)}>
          <TouchableOpacity
            onPress={Keyboard.dismiss}
            activeOpacity={OPACITY.NONE}
            style={[styles.stretchAndFlex, styles.form]}>
            <ControlledCustomTextInput
              name={FIELDS.username}
              control={control}
              label={i18next.t('PROFILE:USERNAME')}
              placeholder={i18next.t('PROFILE:USERNAME')}
              inputContainerStyle={signUpStyles.input}
              labelStyle={signUpStyles.labelText}
              errorContainerStyle={signUpStyles.errorContainer}
              showError={hasError}
              rules={{ ...validateRequired, ...validateOnlyText }}
            />
            <ControlledCustomTextInput
              name={FIELDS.email}
              control={control}
              label={i18next.t('PROFILE:EMAIL')}
              placeholder={i18next.t('PROFILE:EMAIL')}
              inputContainerStyle={signUpStyles.input}
              labelStyle={signUpStyles.labelText}
              errorContainerStyle={signUpStyles.errorContainer}
              showError={hasError}
              rules={{ ...validateRequired, ...validateEmail }}
            />
            <ControlledCustomTextInput
              name={FIELDS.description}
              control={control}
              label={i18next.t('PROFILE:DESCRIPTION')}
              placeholder={i18next.t('PROFILE:DESCRIPTION')}
              inputContainerStyle={signUpStyles.input}
              labelStyle={signUpStyles.labelText}
              errorContainerStyle={signUpStyles.errorContainer}
              showError={hasError}
              rules={{ ...validateOnlyText }}
            />
            <CustomButton
              disabled={!(isValid && isDirty)}
              onPress={handleSubmit(handleUpdateProfile)}
              style={styles.formButton}
              textStyle={styles.textFormButton}
              title={i18next.t('PROFILE:UPDATE_PROFILE')}
            />
          </TouchableOpacity>
        </ScrollView>
        <ProfileListItem title={i18next.t('PROFILE:LOGOUT')} icon={logoutIcon} onPress={handlePressLogout} />
      </View>
    </WithHeader>
  );
}

export default Profile;
