import { actions, TARGETS } from '@redux/comments/actions';
import CommentReducer, { initialState } from '@redux/comments/reducer';
import { iComment } from '@interfaces/articlesInterface';

const MOCKED_DATA: iComment = {
  author: {
    bio: 'Esta es una Biografía típica de un usuario !',
    following: false,
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    username: 'hola5'
  },
  body: 'Testing',
  createdAt: '30-01-2021',
  updatedAt: '30-01-2021',
  id: 209
};

export const authActions = {
  getComments: {
    type: actions.GET_COMMENTS,
    target: TARGETS.COMMENTS
  },
  getCommentsSuccess: {
    type: actions.GET_COMMENTS_SUCCESS,
    target: TARGETS.COMMENTS,
    payload: MOCKED_DATA
  },
  getCommentsFailure: {
    type: actions.GET_COMMENTS_FAILURE,
    target: TARGETS.COMMENTS,
    payload: true
  }
};
describe('case COMMENTS', () => {
  test('test COMMENT_INIT', () => {
    expect(CommentReducer(undefined, authActions.getComments)).toMatchObject({
      ...initialState,
      commentsLoading: true
    });
  });
  test('test COMMENT_SUCCESS', async () => {
    expect(await CommentReducer(undefined, authActions.getCommentsSuccess)).toMatchObject({
      ...initialState,
      comments: MOCKED_DATA
    });
    expect(await CommentReducer(undefined, authActions.getCommentsSuccess)).not.toBeNull();
  });
  test('test COMMENT_FAILURE ', async () => {
    expect(await CommentReducer(undefined, authActions.getCommentsFailure)).toMatchObject({
      ...initialState,
      commentsError: true
    });
  });
});
