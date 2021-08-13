import { TextProps, TextInputProps, TextStyle, ViewProps, ImageSourcePropType } from 'react-native';

export interface CustomTextInputProps extends TextInputProps, TextProps {
  animated?: boolean;
  autoCompleteType?: TextInputProps['autoCompleteType'];
  disabled?: boolean;
  error?: boolean | string;
  errorContainerStyle?: ViewProps['style'];
  errorStyle?: TextStyle;
  inputContainerStyle?: ViewProps['style'];
  inputTextStyles?: TextStyle;
  isOptional?: boolean;
  label?: string;
  labelStyle?: TextStyle;
  multiline?: boolean;
  onBlur?: TextInputProps['onBlur'];
  onChange?(e: any): any;
  onFocus?: TextInputProps['onFocus'];
  placeholderRightText?: string;
  showPlaceholderRight?: boolean;
  placeholder?: string;
  placeholderColor?: string;
  secureTextEntry?: boolean;
  showError?: boolean;
  showEye?: boolean;
  style?: ViewProps['style'];
  value?: string;
  testIDProp?: string;
  messageButton?: string;
  iconButton?: ImageSourcePropType;
  onPressButton?: () => void;
  errorIcon: boolean;
}
