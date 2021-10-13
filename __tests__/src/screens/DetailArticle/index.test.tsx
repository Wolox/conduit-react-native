import React from 'react';
import renderer from 'react-test-renderer';
import DetailArticle from '@screens/DetailArticle';
import MockedNavigator from '@mocks/MockedNavigator';

const item = {
  route: {
    params: {
      article: {
        title: '',
        description: '',
        updatedAt: '',
        body: '',
        favoritesCount: 0,
        slug: '',
        author: { image: '', username: 'user', following: false },
        tagList: []
      }
    }
  }
};

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation(() => ({
      comments: [],
      currentUser: '',
      author: { image: '' },
      body: item.route.params.article.body,
      tagList: item.route.params.article.tagList
    })),
    useDispatch: () => jest.fn()
  };
});

describe('DetailArticle', () => {
  test('DetailArticle Snapshot', () => {
    const RenderCustom = {
      renderDetail: () => <DetailArticle {...item} />,
      renderCompleteDetail: () => <MockedNavigator component={RenderCustom.renderDetail} />
    };
    const tree = renderer.create(RenderCustom.renderCompleteDetail()).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
