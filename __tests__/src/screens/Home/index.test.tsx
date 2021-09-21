import 'jest-react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '@screens/Home';
import MockedNavigator from '@mocks/MockedNavigator';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation(() => []),
    useDispatch: () => jest.fn()
  };
});

describe('test HOME SCREEN', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test('to match with Snapshot', () => {
    const tree = renderer.create(<MockedNavigator component={Home} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
