import { DeepMap, FieldError } from 'react-hook-form';
import './i18n';

export const FIELDS = {
  message: 'message'
} as const;

export interface CustomInputMessageInterface {
  [FIELDS.message]: string;
}
export interface TextInputKeyEvent {
  nativeEvent: {
    key: string;
  };
}

export const validations = (errors: DeepMap<CustomInputMessageInterface, FieldError>) => ({
  ERRORS_MESSAGE: (errors?.message?.message && errors?.message?.type === 'pattern') || false,
  MESSAGE_HAS_ERRORS_MESSAGE: !!errors?.message?.message
});
