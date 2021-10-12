import React from 'react';
import renderer from 'react-test-renderer';
import DetailArticle from '@screens/DetailArticle';
import userIcon from '@assets/Profile/icUser.png';
import MockedNavigator from '@mocks/MockedNavigator';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation(() => ({ comments: [], currentUser: '' })),
    useDispatch: () => jest.fn()
  };
});

describe('DetailArticle', () => {
  test('DetailArticle Snapshot', () => {
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
            author: { image: userIcon, username: 'user', following: false },
            tagList: []
          }
        }
      }
    };

    const RenderCustom = {
      renderDetail: () => <DetailArticle {...item} />,
      renderCompleteDetail: () => <MockedNavigator component={RenderCustom.renderDetail} />
    };
    const tree = renderer.create(RenderCustom.renderCompleteDetail()).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
