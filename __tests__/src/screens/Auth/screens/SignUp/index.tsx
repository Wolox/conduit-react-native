import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import SignUp from '@screens/Auth/screens/SignUp';

describe('test SIGNUP_SCREEN', () => {
  test('to match with snapshot', async () => {
    const tree = await renderer.create(<MockedNavigator component={SignUp} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
