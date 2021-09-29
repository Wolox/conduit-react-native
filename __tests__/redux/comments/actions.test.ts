import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import actionCreators, { actions, TARGETS } from '@redux/comments/actions';
import { initialState } from '@redux/comments/reducer';
import { actions as feedbackactions } from '@redux/feedback/actions';

const middleware = [thunk, fetchMiddleware];
const mockStore = configureStore(middleware);
const store = mockStore(initialState);

describe('testCommentsActions', () => {
  beforeEach(() => {
    store.clearActions();
    jest.useFakeTimers();
  });
  test('test GET_COMMENTS', () => {
    store.dispatch(actionCreators.getComments());
    expect(store.getActions()).toEqual([{ target: TARGETS.COMMENTS, type: actions.GET_COMMENTS }]);
    expect(store.getActions()).not.toBeNull();
  });
  test('test CREATE_COMMENT', () => {
    store.dispatch(actionCreators.createComment());
    expect(store.getActions()).toEqual([{ target: TARGETS.CREATE_COMMENT, type: actions.CREATE_COMMENT }]);
    expect(store.getActions()).not.toBeNull();
  });
  test('test DELETE_COMMENT', () => {
    store.dispatch(actionCreators.deleteComment());
    expect(store.getActions()).toEqual([{ target: TARGETS.DELETE_COMMENT, type: actions.DELETE_COMMENT }]);
    expect(store.getActions()).not.toBeNull();
  });
  test('test GET_COMMENTS_SUCCESS', () => {
    store.dispatch(actionCreators.getComments()).then(async () => {
      expect(await store.getActions()).toEqual([
        { target: TARGETS.COMMENTS, type: actions.GET_COMMENTS_SUCCESS }
      ]);
      expect(store.getActions()).not.toBeNull();
      expect(store.getActions()).toBeDefined();
    });
  });
  test('test CREATE_COMMENT_SUCCESS', () => {
    store.dispatch(actionCreators.createComment()).then(async () => {
      expect(await store.getActions()).toEqual([
        { target: TARGETS.CREATE_COMMENT, type: actions.CREATE_COMMENT_SUCCESS }
      ]);
      expect(store.getActions()).not.toBeNull();
      expect(store.getActions()).toBeDefined();
    });
  });
});
