import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import MyArticles from '@screens/MyArticles';

jest.mock('react-redux', () => {
  return {
    useSelector: jest
      .fn()
      .mockImplementation(() => ({ myArticles: { articles: null }, myArticlesLoading: false })),
    useDispatch: () => jest.fn()
  };
});

describe('test MyArticles_SCREEN', () => {
  test('to match with snapshot', async () => {
    const tree = await renderer.create(<MockedNavigator component={MyArticles} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
  });
});
