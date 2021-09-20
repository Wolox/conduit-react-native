import React from 'react';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';
import MockedNavigator from '@mocks/MockedNavigator';
import FavArticles from '@screens/FavArticles';

describe('test FavArticles_SCREEN', () => {
  beforeEach(() => {
    const useSelectorMock = jest.spyOn(redux, 'useSelector');
    useSelectorMock.mockReturnValue({
      favoritesArticlesList: { articles: null }
    });
  });
  test('to match with snapshot', async () => {
    const tree = await renderer.create(<MockedNavigator component={FavArticles} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
  });
});
