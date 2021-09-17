import React, { useEffect, useState } from 'react';
import { Keyboard, ScrollView, TouchableOpacity, View } from 'react-native';
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import WithHeader from '@components/WithHeader';
import CustomButton from '@components/CustomButton';
import ControlledCustomTextInput from '@components/CustomTextInput/controller';
import CustomText from '@components/CustomText';
import Routes from '@constants/routes';
import { isIos } from '@constants/platform';
import { OPACITY } from '@constants/commonStyles';
import { Navigation } from '@interfaces/navigation';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import { actionCreators as FeedbackActions } from '@redux/feedback/actions';
import logoutIcon from '@assets/Profile/icLogout.png';
import { validateRequired, validateEmail, validateOnlyText } from '@utils/validations/validateUtils';
import signUpStyles from '@screens/Auth/screens/SignUp/styles';
import { State } from '@interfaces/reduxInterfaces';
import { CurrentUser } from '@interfaces/authInterfaces';
import CustomModal from '@components/CustomModal';
import { getAvatar } from '@constants/iconsConstants';

import './i18n';

import styles from './styles';
import ProfileListItem from './components/ProfileItem';
import { ANDROID_SCROLLVIEW_PROPS, ProfileFormValues, FIELDS } from './constants';
import AvatarSelector from './components/AvatarSelector';

interface Props extends Navigation {}

function Profile() {
  const dispatch = useDispatch();
  const handlePressLogout = () => dispatch(AuthActions.logout());
  const currentUser = useSelector((state: State) => state.auth.currentUser?.user);
  const { userProfileLoading, currentUserLoading, currentUserError } = useSelector(
    (state: State) => state.auth
  );
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty }
  } = useForm<ProfileFormValues>({ mode: 'onBlur' });

  const usernameExist = () => setUsernameError(i18next.t('PROFILE:USERNAME_EXIST'));

  const emailExist = () => setEmailError(i18next.t('PROFILE:EMAIL_EXIST'));
  const hasError = !!currentUserError;

  const [avatarSelected, setAvatarSelected] = useState(currentUser?.image || '');
  const [isAvatarChanged, setIsAvatarChanged] = useState(false);
  const handleUpdateProfile = (values: ProfileFormValues) => {
    Keyboard.dismiss();
    const user: CurrentUser = {
      email: values.email,
      token: currentUser?.token,
      username: values.username,
      bio: values.description,
      image: avatarSelected
    };
    if (currentUser?.username === values.username) {
      dispatch(AuthActions.updateCurrentUser({ user }, emailExist));
    } else {
      dispatch(AuthActions.getUserProfile({ user }, usernameExist, emailExist));
    }
  };
  const onEmailFocus = () => setEmailError('');
  const onUsenameFocus = () => setUsernameError('');
  const handleChangeAvatar = () =>
    dispatch(
      FeedbackActions.showModal(
        <CustomModal
          title={i18next.t('PROFILE:SELECT_AVATAR')}
          body={<AvatarSelector selected={avatarSelected} setSelected={setAvatarSelected} />}
          style={styles.modalContainer}
        />
      )
    );
  useEffect(() => {
    setIsAvatarChanged(avatarSelected !== currentUser?.image);
  }, [avatarSelected, currentUser]);
  return (
    <WithHeader
      title={i18next.t(`app:${Routes.Profile}`)}
      withAvatar
      avatar={getAvatar(avatarSelected)}
      onPressAvatar={handleChangeAvatar}>
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
              inputContainerStyle={[signUpStyles.input, styles.inputCustom]}
              labelStyle={signUpStyles.labelText}
              errorContainerStyle={signUpStyles.errorContainer}
              showError={hasError}
              rules={{ ...validateRequired, ...validateOnlyText }}
              defaultValue={currentUser?.username}
              onFocus={onUsenameFocus}
            />
            <CustomText error xsmall style={styles.otherErrorStyle}>
              {usernameError}
            </CustomText>
            <ControlledCustomTextInput
              name={FIELDS.email}
              control={control}
              label={i18next.t('PROFILE:EMAIL')}
              placeholder={i18next.t('PROFILE:EMAIL')}
              inputContainerStyle={[signUpStyles.input, styles.inputCustom]}
              labelStyle={signUpStyles.labelText}
              errorContainerStyle={signUpStyles.errorContainer}
              showError={hasError}
              rules={{ ...validateRequired, ...validateEmail }}
              defaultValue={currentUser?.email}
              onFocus={onEmailFocus}
            />
            <CustomText error xsmall style={styles.otherErrorStyle}>
              {emailError}
            </CustomText>
            <ControlledCustomTextInput
              name={FIELDS.description}
              control={control}
              label={i18next.t('PROFILE:DESCRIPTION')}
              placeholder={i18next.t('PROFILE:DESCRIPTION')}
              inputContainerStyle={[signUpStyles.input, styles.inputCustom]}
              labelStyle={signUpStyles.labelText}
              errorContainerStyle={signUpStyles.errorContainer}
              showError={hasError}
              rules={{ ...validateOnlyText }}
              defaultValue={currentUser?.bio}
            />
            <CustomButton
              disabled={!isAvatarChanged && !(isValid && isDirty)}
              onPress={handleSubmit(handleUpdateProfile)}
              style={styles.formButton}
              textStyle={styles.textFormButton}
              title={i18next.t('PROFILE:UPDATE_PROFILE')}
              loading={userProfileLoading || currentUserLoading}
            />
          </TouchableOpacity>
          <ProfileListItem
            title={i18next.t('PROFILE:LOGOUT')}
            icon={logoutIcon}
            onPress={handlePressLogout}
          />
        </ScrollView>
      </View>
    </WithHeader>
  );
}

export default Profile;
