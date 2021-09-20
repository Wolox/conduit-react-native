import React from 'react';
import renderer from 'react-test-renderer';
import Comment from '@screens/DetailArticle/components/Comment';
import userIcon from '@assets/Profile/icUser.png';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation(() => ({ currentUser: '' })),
    useDispatch: () => jest.fn()
  };
});

describe('Comment', () => {
  test('Comment Snapshot', () => {
    const item = {
      commentContent: {
        author: { username: 'user', image: userIcon },
        body: '',
        id: 1,
        createdAt: ''
      },
      articleSlug: ''
    };
    const tree = renderer.create(<Comment {...item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
