import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import AppNavigator from '@components/AppNavigator';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation(() => ({ initialLoading: false })),
    useDispatch: () => jest.fn()
  };
});

describe('test appNavigator', () => {
  const RenderCustom = {
    renderTabList: () => <AppNavigator />,
    renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
  };
  test('to match with Snapshot', () => {
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
  });
});
