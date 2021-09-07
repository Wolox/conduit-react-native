import React from 'react';
import { View, Image } from 'react-native';
import i18next from 'i18next';
import CustomText from '@components/CustomText';
import icCheckSuccess from '@assets/icCheckSuccess.png';
import icDanger from '@assets/icDanger.png';
import { useRouteWithParams } from '@utils/navUtils';
import Routes from '@constants/routes';

import './i18n';
import styles from './styles';
import { ConfirmationTypes } from './constants';

function Confirmation() {
  const { type = ConfirmationTypes.SUCCESS_REGISTER_ARTICLE, typeError } =
    useRouteWithParams<Routes.Confirmation>().params || {};

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
    </View>
  );
}

export default Confirmation;
