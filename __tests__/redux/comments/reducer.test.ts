import { actions, TARGETS } from '@redux/comments/actions';
import AuthReducer, { initialState } from '@redux/comments/reducer';
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
  createComment: {
    type: actions.LOGIN,
    target: TARGETS.CREATE_COMMENT
  },
  createCommentSuccess: {
    type: actions.CREATE_COMMENT_SUCCESS,
    target: TARGETS.CREATE_COMMENT,
    payload: MOCKED_DATA
  },
  createCommentFailure: {
    type: actions.CREATE_COMMENT_FAILURE,
    target: TARGETS.CREATE_COMMENT,
    payload: true
  }
};
describe('case COMMENT_INIT', () => {
  test('test Login', () => {
    expect(AuthReducer(undefined, authActions.createComment)).toMatchObject({
      ...initialState,
      commentsLoading: true
    });
  });
  test('test COMMENT_SUCCESS', async () => {
    expect(await AuthReducer(undefined, authActions.createCommentSuccess)).toMatchObject({
      ...initialState,
      comments: MOCKED_DATA
    });
    expect(await AuthReducer(undefined, authActions.createCommentSuccess)).not.toBeNull();
  });
  test('test COMMENT_FAILURE ', async () => {
    expect(await AuthReducer(undefined, authActions.createCommentFailure)).toMatchObject({
      ...initialState,
      commentsError: true
    });
  });
});
