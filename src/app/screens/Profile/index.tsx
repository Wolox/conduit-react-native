import React from 'react';
import i18next from 'i18next';
import { Keyboard, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import WithHeader from '@components/WithHeader';
import Routes from '@constants/routes';
import { isIos } from '@constants/platform';
import { OPACITY } from '@constants/commonStyles';
import { Navigation } from '@interfaces/navigation';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import logoutIcon from '@assets/Profile/ic_logout.png';
import CustomTextInput from '@components/CustomTextInput';
import CustomButton from '@components/CustomButton';

import './i18n';

import styles from './styles';
import ProfileListItem from './components/ProfileItem';
import { ANDROID_SCROLLVIEW_PROPS } from './constants';

interface Props extends Navigation {}

function Profile() {
  const dispatch = useDispatch();
  const handlePressLogout = () => dispatch(AuthActions.logout());

  const profileFormSchema = Yup.object().shape({
    userName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    description: Yup.string()
  });

  const { handleChange, handleSubmit, isValid, dirty } = useFormik({
    initialValues: {
      userName: '',
      email: '',
      description: ''
    },
    onSubmit: () => console.log('submit profile form'),
    validationSchema: profileFormSchema
  });

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
            <CustomTextInput
              onChange={handleChange}
              label={i18next.t('PROFILE:USERNAME')}
              style={styles.formElement}
              value={'username'}
            />
            <CustomTextInput
              onChange={handleChange}
              label={i18next.t('PROFILE:EMAIL')}
              style={styles.formElement}
              value={'email'}
            />
            <CustomTextInput
              onChange={handleChange}
              label={i18next.t('PROFILE:DESCRIPTION')}
              style={styles.formElement}
              value={'description'}
            />
            <CustomButton
              disabled={!(isValid && dirty)}
              onPress={handleSubmit}
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
