import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import { MOCKED_ARTICLE } from '@constants/mockedArticle';
import ArticleItem from '@components/ArticleItem';

describe('test ArticleItem', () => {
  const RenderCustom = {
    renderArticleItem: () => <ArticleItem item={MOCKED_ARTICLE} onPress={() => null} />,
    renderCompleteArticleItems: () => <MockedNavigator component={RenderCustom.renderArticleItem} />
  };

  test('match with Snapshot', () => {
    const treeInstance = renderer.create(RenderCustom.renderCompleteArticleItems());
    const tree = renderer.create(RenderCustom.renderCompleteArticleItems()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(ArticleItem).props.item).toBe(MOCKED_ARTICLE);
    expect(treeInstance.root.findByType(ArticleItem).props.item).not.toBeNull();
  });
});
