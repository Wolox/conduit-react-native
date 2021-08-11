import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { ControllerProps } from 'react-hook-form';
import CustomTextInput from '@components/CustomTextInput';

type Controller = ControllerProps<typeof CustomTextInput | any>;

export interface CustomInputMessage {
  messageLabel?: string;
  maxLengthMessage: number;
  minLengthMessage: number;
  messageRules?: Controller['rules'];
  numberOfLinesMessage?: number;
  keyboardAwareViewChildren?: ReactNode;
  showPlaceholderMessage?: boolean;
  onChangeEventMessage?: (message: string) => void;
  automaticScroll?: boolean;
  styleInputText: ViewStyle;
}
