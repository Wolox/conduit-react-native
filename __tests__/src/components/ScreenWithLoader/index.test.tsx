import React from 'react';
import { View, Text } from 'react-native';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import ScreenWithLoader from '@components/ScreenWithLoader';

describe('test ArticleItem', () => {
  const MOCKED_DATA = {
    loading: false,
    refreshed: false,
    children: () => (
      <View>
        <Text>Test</Text>
      </View>
    )
  };
  const RenderCustom = {
    renderTabList: () => <ScreenWithLoader {...MOCKED_DATA} />,
    renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
  };

  test('match with Snapshot', () => {
    const treeInstance = renderer.create(RenderCustom.renderCompleteTabList());
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(ScreenWithLoader).props.loading).not.toBeNull();
    expect(treeInstance.root.findByType(ScreenWithLoader).props.refreshed).not.toBeNull();
    expect(treeInstance.root.findByType(ScreenWithLoader).props.children).not.toBeNull();

    expect(treeInstance.root.findByType(ScreenWithLoader).props.loading).toBe(MOCKED_DATA.loading);
    expect(treeInstance.root.findByType(ScreenWithLoader).props.refreshed).toBe(MOCKED_DATA.refreshed);
    expect(treeInstance.root.findByType(ScreenWithLoader).props.children).toBe(MOCKED_DATA.children);
  });
});
