import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import Routes from '@constants/routes';
import TabBar from '@components/TabBar';

describe('tabBar', () => {
  test('tabBar currentTab Home', () => {
    const RenderCustom = {
      renderTabList: () => <TabBar currentTab={Routes.Home} focused={true} />,
      renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
    };
    const treeInstance = renderer.create(RenderCustom.renderCompleteTabList());
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).toBe(Routes.Home);
  });
  test('tabBar currentTab Tab1', () => {
    const RenderCustom = {
      renderTabList: () => <TabBar currentTab={Routes.Tab1} focused={true} />,
      renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
    };
    const treeInstance = renderer.create(RenderCustom.renderCompleteTabList());
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).toBe(Routes.Tab1);
  });
  test('tabBar currentTab MyArticles', () => {
    const RenderCustom = {
      renderTabList: () => <TabBar currentTab={Routes.MyArticles} focused={true} />,
      renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
    };
    const treeInstance = renderer.create(RenderCustom.renderCompleteTabList());
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).toBe(Routes.MyArticles);
  });
  test('tabBar currentTab Tab3', () => {
    const RenderCustom = {
      renderTabList: () => <TabBar currentTab={Routes.Tab3} focused={true} />,
      renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
    };
    const treeInstance = renderer.create(RenderCustom.renderCompleteTabList());
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).toBe(Routes.Tab3);
  });
  test('tabBar FavArticles', () => {
    const RenderCustom = {
      renderTabList: () => <TabBar currentTab={Routes.FavArticles} focused={true} />,
      renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
    };
    const treeInstance = renderer.create(RenderCustom.renderCompleteTabList());
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).toBe(Routes.FavArticles);
  });
  test('tabBar Tab5', () => {
    const RenderCustom = {
      renderTabList: () => <TabBar currentTab={Routes.Tab5} focused={true} />,
      renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
    };
    const treeInstance = renderer.create(RenderCustom.renderCompleteTabList());
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).toBe(Routes.Tab5);
  });
  test('tabBar Login', () => {
    const RenderCustom = {
      renderTabList: () => <TabBar currentTab={Routes.Login} focused={true} />,
      renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
    };
    const treeInstance = renderer.create(RenderCustom.renderCompleteTabList());
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).not.toBeNull();
    expect(treeInstance.root.findByType(TabBar).props.currentTab).toBe(Routes.Login);
  });
});
