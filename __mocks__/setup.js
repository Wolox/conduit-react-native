jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({ children }) => children;
  return { KeyboardAwareScrollView };
});
global.window = {};
global.window = global;
