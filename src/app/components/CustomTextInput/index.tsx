import React, { useCallback, useState, memo, forwardRef } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import CustomText from '@components/CustomText';
import { transparent } from '@constants/colors';

import CustomTextPressable from '../CustomTextPressable';

import InputLabel from './components/InputLabel';
import ShowPassword from './components/ShowPassword';
import { CustomTextInputProps as Props } from './interface';
import styles from './styles';

const CustomTextInput = forwardRef<TextInput, Props>(function CustomTextInput(
  {
    animated,
    autoCompleteType,
    disabled,
    error,
    errorContainerStyle,
    errorStyle,
    inputContainerStyle,
    inputTextStyles,
    isOptional,
    label,
    labelStyle,
    multiline,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    placeholderColor,
    showPlaceholderRight,
    placeholderRightText,
    secureTextEntry,
    showError,
    showEye,
    style,
    value,
    messageButton,
    onPressButton,
    testIDProp,
    iconButton,
    errorIcon,
    ...props
  },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);

  const placeholderTextRightMultilne =
    placeholderRightText && placeholderRightText.includes('/')
      ? placeholderRightText.split('/')
      : placeholderRightText;
  const isPlaceholderTextRightSplitted = typeof placeholderTextRightMultilne === 'object';

  const handleFocus = useCallback(
    e => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    },
    [onFocus]
  );
  const handleBlur = useCallback(
    e => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    },
    [onBlur]
  );

  const borderColorStyle = () => {
    if (disabled) return styles.bottomBorderLightGray;
    if (isFocused) return styles.bottomBorderBlue;
    if (showError) return styles.bottomBorderRed;
    return {};
  };
  const onPress = () => {
    if (errorIcon || (error as boolean)) {
      return () => null;
    } else if (onPressButton) {
      return onPressButton();
    }
    return () => null;
  };
  const renderICons = () => (
    <>
      {iconButton || messageButton ? (
        <View style={styles.messageButton}>
          {iconButton && (
            <TouchableOpacity onPress={onPress}>
              <Image
                source={iconButton}
                style={[errorIcon || (error as boolean) ? styles.errorIcon : styles.icon]}
                resizeMode="contain"
                resizeMethod="scale"
              />
            </TouchableOpacity>
          )}
          {messageButton && <CustomTextPressable text={messageButton} onPress={onPress} />}
        </View>
      ) : null}
    </>
  );

  return (
    <View style={[styles.container, animated && !!label && styles.withAnimatedLabel, style]}>
      {label && (
        <InputLabel
          animated={animated}
          hasValue={!!value}
          isFocused={isFocused}
          isOptional={isOptional}
          label={label}
          labelStyle={labelStyle}
        />
      )}
      <View
        style={[
          multiline ? styles.multilineContainer : styles.inputContainer,
          borderColorStyle(),
          inputContainerStyle,
          messageButton || iconButton ? styles.flexRow : inputContainerStyle
        ]}>
        <TextInput
          {...props}
          ref={ref}
          autoCompleteType={secureTextEntry ? 'off' : autoCompleteType}
          editable={!disabled}
          multiline={multiline}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={onChange}
          placeholder={(isFocused || !animated) && value === '' ? placeholder : ''}
          placeholderTextColor={placeholderColor}
          secureTextEntry={secureTextEntry && !showPassword}
          style={[
            styles.inputStyle,
            !multiline && styles.singleInput,
            inputTextStyles,
            messageButton || iconButton ? styles.widthStretch : inputTextStyles
          ]}
          value={value}
          testID={testIDProp}
        />
        {renderICons()}

        {showPlaceholderRight && (
          <CustomText xsmall gray style={[styles.placeHolderRigth, multiline && styles.placeHolderMultiline]}>
            {isPlaceholderTextRightSplitted ? (
              <>
                <CustomText green={isFocused} error={error as boolean} gray={!isFocused}>
                  {placeholderTextRightMultilne?.[0]}
                </CustomText>
                <CustomText
                  error={error as boolean}
                  green={isFocused}
                  gray={!isFocused}>{` / ${placeholderTextRightMultilne?.[1]}`}</CustomText>
              </>
            ) : (
              placeholderTextRightMultilne
            )}
          </CustomText>
        )}
        {secureTextEntry && showEye && (
          <ShowPassword onShowPassword={handleShowPassword} passwordVisible={showPassword} />
        )}
      </View>
      <View style={[!disabled && styles.errorContainer, errorContainerStyle]}>
        {!isFocused && error && (
          <CustomText error xsmall style={errorStyle}>
            {error}
          </CustomText>
        )}
      </View>
    </View>
  );
});

CustomTextInput.defaultProps = {
  allowFontScaling: false,
  animated: false,
  autoCapitalize: 'none',
  autoCompleteType: 'off',
  autoCorrect: false,
  clearButtonMode: 'never',
  disabled: false,
  keyboardType: 'default',
  multiline: false,
  placeholder: '',
  returnKeyType: 'done',
  underlineColorAndroid: transparent
};

const MyCustomTextInput = memo(CustomTextInput);

export default MyCustomTextInput;
