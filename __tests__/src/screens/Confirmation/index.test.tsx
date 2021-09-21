import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import Confirmation from '@screens/Confirmation';

describe('test Confirmation_SCREEN', () => {
  test('to match with snapshot', async () => {
    const tree = await renderer.create(<MockedNavigator component={Confirmation} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
  });
});
