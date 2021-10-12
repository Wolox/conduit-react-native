import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import CustomHeader from '@screens/Home/components/CustomHeader';

describe('test CustomHeaderHome', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test('to match with Snapshot', () => {
    const tree = renderer.create(<MockedNavigator component={CustomHeader} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
