import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import Login from '@screens/Auth/screens/Login/index';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation(() => ({})),
    useDispatch: () => jest.fn()
  };
});

describe('test LOGING_SCREEN', () => {
  test('to match with snapshot', () => {
    const tree = renderer.create(<MockedNavigator component={Login} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
