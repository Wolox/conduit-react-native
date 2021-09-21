import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import NewArticle from '@screens/NewArticle';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation(() => ({ createArticleLoading: false })),
    useDispatch: () => jest.fn()
  };
});

describe('test NEW_ARTICLE_SNAPSHOT', () => {
  test('to match with snapshot', () => {
    const tree = renderer.create(<MockedNavigator component={NewArticle} params={null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
