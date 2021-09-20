import React from 'react';
import renderer from 'react-test-renderer';
import DetailArticle from '@screens/DetailArticle';
import userIcon from '@assets/Profile/icUser.png';

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
    const tree = renderer.create(<DetailArticle {...item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
