import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import LoadableWrapper, { Loading } from '@components/Loadable';

describe('test Loadable', () => {
  test('loadable', () => {
    const RenderCustom = {
      renderTabList: () => <Loading />,
      renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
    };
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
  });
  test('loadableWrapper', () => {
    const loadExpect = LoadableWrapper(Loading as any);
    expect(loadExpect).not.toBeNull();
    expect(loadExpect).toBeDefined();
  });
});
