import { green, white, mediumGray, extraLightGray, gray, transparent } from '@constants/colors';

import styles, { commonButtonStyles } from './styles';

const getBackgroundColor = (secondary: boolean = false, link: boolean, disabled?: boolean) => {
  if (secondary) return white;
  if (link) return transparent;
  let color: string = green;
  if (disabled) color = extraLightGray;
  return color;
};

const getColor = (secondary: boolean = false, link: boolean, disabled?: boolean) => {
  let color: string = secondary || link ? green : white;
  if (disabled) color = link ? gray : mediumGray;
  return color;
};

export const getStyles = (secondary: boolean = false, link: boolean = false, disabled?: boolean) => {
  const color = getColor(secondary, link, disabled);
  const backgroundColor = getBackgroundColor(secondary, link, disabled);
  const borderColor = disabled ? gray : color;
  const tintColor = color;
  return {
    BUTTON_STYLE: {
      ...(link || !secondary ? styles.borderless : {}),
      ...(secondary ? { ...commonButtonStyles } : {}),
      backgroundColor,
      borderColor
    },
    TEXT_STYLE: {
      color
    },
    ICON_STYLE: {
      tintColor
    }
  };
};
