jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({ children }) => children;
  return { KeyboardAwareScrollView };
});
jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn()
  };
});
global.window = {};
global.window = global;
