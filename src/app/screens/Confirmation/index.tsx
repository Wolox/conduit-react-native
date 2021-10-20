import React from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import icCheckSuccess from '@assets/icCheckSuccess.png';
import icDanger from '@assets/icDanger.png';
import actionCreators from '@redux/articles/actions';
import { onResetStack, useNavigationWithParams, useRouteWithParams } from '@utils/navUtils';
import Routes from '@constants/routes';

import './i18n';
import styles from './styles';
import { ConfirmationTypes } from './constants';

function Confirmation() {
  const dispatch = useDispatch();
  const navigation = useNavigationWithParams();

  const { type = ConfirmationTypes.SUCCESS_REGISTER_ARTICLE, typeError } =
    useRouteWithParams<Routes.Confirmation>().params || {};

  const handlePress = async () => {
    await onResetStack(navigation, []);
    await dispatch(actionCreators.getArticles());
  };

  return (
    <View style={styles.container}>
      <Image
        source={typeError ? icDanger : icCheckSuccess}
        resizeMode="contain"
        style={[styles.icon, !typeError && styles.iconGreen]}
      />
      <CustomText big bold style={styles.title}>
        {i18next.t(`CONFIRMATION:${type}_TITLE`)}
      </CustomText>
      <CustomText>{i18next.t(`CONFIRMATION:${type}_SUBTITLE`)}</CustomText>
      <CustomButton
        style={styles.btnBack}
        center
        title={
          type === ConfirmationTypes.SUCCESS_REGISTER_ARTICLE
            ? i18next.t(`CONFIRMATION:${type}_CONFIRMATION_BUTTON`)
            : i18next.t('CONFIRMATION:CONFIRMATION_BUTTON')
        }
        primary
        bold
        radial
        onPress={handlePress}
      />
    </View>
  );
}

export default Confirmation;
