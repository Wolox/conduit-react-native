import React, { memo, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';
import CustomText from '@components/CustomText';
import ControlledCustomTextInput from '@components/CustomTextInput/controller';
import { Nullable } from '@interfaces/globalInterfaces';
import { isIos } from '@constants/platform';

import './i18n';
import { FIELDS, validations, TextInputKeyEvent, CustomInputMessageInterface } from './constants';
import { CustomInputMessage as Props } from './interfaces';
import testIds from './testIds';
import styles from './styles';

function CustomInputMessage({
  messageLabel,
  maxLengthMessage,
  numberOfLinesMessage,
  keyboardAwareViewChildren,
  messageRules,
  showPlaceholderMessage,
  onChangeEventMessage,
  styleInputText,
  placeHolder,
  messageButton,
  onPressButton,
  iconButton
}: Props) {
  const {
    trigger,
    control,
    getValues,
    setValue,
    formState: { errors }
  } = useForm<CustomInputMessageInterface>({
    mode: 'all',
    reValidateMode: 'onChange',
    shouldFocusError: true
  });
  const messageInputRef = useRef<Nullable<TextInput>>(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [lastMessageLength, setLastMessageLength] = useState(0);
  const { ERRORS_MESSAGE, MESSAGE_HAS_ERRORS_MESSAGE } = validations(errors);
  const [currentFocus, setCurrentFocus] = useState('');
  const [placeHolderRightMessage, setPlaceHolderRightMessage] = useState(`0/${maxLengthMessage}`);
  const { message } = getValues();
  const onBlur = (field: string) => {
    setCurrentFocus('');
    const fieldName = FIELDS[field as keyof typeof FIELDS];
    setShowErrorMessage(false);
    trigger(fieldName);
  };
  const onFocus = (field: string) => {
    const setField = FIELDS[field as keyof typeof FIELDS];
    setCurrentFocus(setField);
  };

  const onChangeTextMessage = (value: string) => {
    const cleanValue = value.trim();
    setShowErrorMessage(false);
    setPlaceHolderRightMessage(`${cleanValue.length}/${maxLengthMessage}`);
    trigger();
    if (onChangeEventMessage) onChangeEventMessage(value);
  };

  const isFocusMessage = currentFocus === FIELDS.message;
  const onKeyPressMessage = ({ nativeEvent: { key } }: TextInputKeyEvent) => {
    const { message: newMessage } = getValues();
    const isBackSpaceKey = key === 'Backspace';
    const sizeKey = isBackSpaceKey ? 0 : 1;
    const lastKeySize = message.trim().length + sizeKey;
    setLastMessageLength(lastKeySize);
    if (lastMessageLength > maxLengthMessage && !isIos) setShowErrorMessage(true);
    if (isIos && newMessage.length === maxLengthMessage) setShowErrorMessage(true);
    if (isBackSpaceKey) setShowErrorMessage(false);
  };
  const handlePressButton = () => {
    if (onPressButton) {
      onPressButton();
      setValue('message', '');
    }
  };
  return (
    <View style={styles.container}>
      {keyboardAwareViewChildren && keyboardAwareViewChildren}
      {messageLabel && (
        <View style={styles.messageLabel}>
          <CustomText style={styles.customLabel} green error={showErrorMessage || ERRORS_MESSAGE} medium>
            {messageLabel}
          </CustomText>
        </View>
      )}

      <View style={styles.inputContainer}>
        <ControlledCustomTextInput
          inputContainerStyle={[styles.customInputContainer, styleInputText && styleInputText]}
          ref={messageInputRef}
          testID={testIds.messageFeedback}
          control={control}
          name={FIELDS.message}
          placeholder={placeHolder}
          onChange={onChangeTextMessage}
          onFocus={() => onFocus(FIELDS.message)}
          onBlur={() => onBlur(FIELDS.message)}
          placeholderRightText={placeHolderRightMessage}
          inputTextStyles={styles.textInputMessage}
          maxLength={maxLengthMessage}
          numberOfLines={numberOfLinesMessage}
          multiline
          blurOnSubmit
          showPlaceholderRight={isFocusMessage || showPlaceholderMessage}
          messageButton={messageButton}
          error={showErrorMessage || MESSAGE_HAS_ERRORS_MESSAGE}
          errorIcon={message?.length <= 0}
          onKeyPress={onKeyPressMessage}
          onPressButton={handlePressButton}
          iconButton={iconButton}
          rules={messageRules}
          style={styles.customTextInput}
        />
        {showErrorMessage && (
          <CustomText error xsmall style={styles.error}>
            {i18next.t('FEEDBACK_CUSTOM_INPUT_MESSAGE:MAX_MESSAGE', { max: maxLengthMessage })}
          </CustomText>
        )}
        {errors?.message?.message && isFocusMessage && !showErrorMessage && (
          <CustomText error xsmall style={styles.error}>
            {errors.message.message}
          </CustomText>
        )}
      </View>
    </View>
  );
}

CustomInputMessage.defaultProps = {
  showButtons: true,
  automaticScroll: true
};

export default memo(CustomInputMessage);
