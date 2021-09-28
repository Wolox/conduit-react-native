import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import CrossBack from '@components/CrossBack';

describe('test CroosBack', () => {
  const RenderCustom = {
    renderTabList: () => <CrossBack />,
    renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
  };

  test('match with Snapshot', () => {
    const treeInstance = renderer.create(RenderCustom.renderCompleteTabList());
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(CrossBack).props).toStrictEqual({});
  });
});
