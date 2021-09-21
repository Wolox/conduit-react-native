import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import FavArticles from '@screens/FavArticles';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation(() => ({ favoritesArticlesList: { articles: null } })),
    useDispatch: () => jest.fn()
  };
});

describe('test FavArticles_SCREEN', () => {
  test('to match with snapshot', async () => {
    const tree = await renderer.create(<MockedNavigator component={FavArticles} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
  });
});
