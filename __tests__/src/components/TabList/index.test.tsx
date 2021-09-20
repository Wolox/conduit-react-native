import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import TabList from '@components/TabList';

describe('test ArticleItem', () => {
  const tabs = ['Your feed', 'Global feed'];
  const RenderCustom = {
    renderTabList: () => <TabList tabs={tabs} onPressTab={() => null} />,
    renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
  };

  test('match with Snapshot', () => {
    const treeInstance = renderer.create(RenderCustom.renderCompleteTabList());
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(tabs).not.toBeNull();
    expect(treeInstance.root.findByType(TabList).props.tabs).not.toBeNull();
    expect(treeInstance.root.findByType(TabList).props.tabs).toBe(tabs);
  });
});
