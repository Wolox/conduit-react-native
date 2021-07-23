import React, { useCallback, memo, useMemo } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { getCustomStyles } from '@utils/styleUtils';

import CustomText from '../CustomText';

import { VARIANTS, CustomButtonProps } from './constants';
import styles from './styles';
import { getStyles } from './utils';

const CustomButton = (props: CustomButtonProps) => {
  const customStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles), [props]);
  const customTextStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles, 'Content'), [props]);
  const {
    onPress,
    style,
    activeOpacity,
    icon,
    title,
    iconStyle,
    disabled,
    textStyle,
    testID,
    secondary,
    link,
    ...textProps
  } = props;
  const { BUTTON_STYLE, TEXT_STYLE, ICON_STYLE } = useMemo(
    () => getStyles(secondary, link, disabled),
    [secondary, link, disabled]
  );
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[styles.container, customStyles(), style, BUTTON_STYLE]}
      activeOpacity={activeOpacity}
      disabled={disabled}>
      {icon && <Image source={icon} resizeMode="contain" style={[styles.icon, iconStyle, ICON_STYLE]} />}
      {title && (
        <CustomText {...textProps} style={[customTextStyles(), textStyle, TEXT_STYLE]}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  activeOpacity: 0.8
};

export default memo(CustomButton);
