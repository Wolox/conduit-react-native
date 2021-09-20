import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import NewArticle from '@screens/NewArticle';

describe('test NEW_ARTICLE_SNAPSHOT', () => {
  test('to match with snapshot', () => {
    const tree = renderer.create(<MockedNavigator component={NewArticle} params={null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
