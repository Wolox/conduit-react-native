import React from 'react';
import { View } from 'react-native';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { fetchMiddleware } from 'redux-recompose';
import MockedNavigator from '@mocks/MockedNavigator';
import { FullScreenModal } from '@interfaces/reduxInterfaces';
import FullScreenModalReducer from '@components/FullScreenModalReducer';
import { actionCreators as FeedBackActions } from '@redux/feedback/actions';

const middleware = [thunk, fetchMiddleware];
const mockStore = configureStore(middleware);
const store = mockStore({});

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation(() => ({})),
    useDispatch: () => jest.fn()
  };
});

describe('FullScreenModalReducer', () => {
  test('FullScreenModalReducer Snapshot', () => {
    const MOCKED_DATA: FullScreenModal = {
      data: <View />,
      onPressOut: () => null,
      noCanClose: false
    };
    const RenderCustom = {
      renderModal: () => <FullScreenModalReducer content={MOCKED_DATA} />,
      renderCompleteModal: () => <MockedNavigator component={RenderCustom.renderModal} />
    };
    const spy = jest.spyOn(store, 'dispatch');
    const treeInstance = renderer.create(RenderCustom.renderCompleteModal());
    const tree = renderer.create(RenderCustom.renderCompleteModal()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.data).not.toBeNull();
    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.data).toBe(MOCKED_DATA.data);

    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.onPressOut).not.toBeNull();
    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.onPressOut).toBe(
      MOCKED_DATA.onPressOut
    );

    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.noCanClose).not.toBeNull();

    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.noCanClose).toBe(
      MOCKED_DATA.noCanClose
    );
    expect(spy).not.toBeCalled();
  });

  test('FullScreenModalReducer  without onPressOut', () => {
    const MOCKED_DATA: FullScreenModal = {
      data: <View />,
      noCanClose: false
    };
    const RenderCustom = {
      renderModal: () => <FullScreenModalReducer content={MOCKED_DATA} />,
      renderCompleteModal: () => <MockedNavigator component={RenderCustom.renderModal} />
    };
    store.dispatch(FeedBackActions.hideModal());
    const spy = jest.spyOn(store, 'dispatch');
    const treeInstance = renderer.create(RenderCustom.renderCompleteModal());
    const tree = renderer.create(RenderCustom.renderCompleteModal()).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.data).not.toBeNull();
    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.data).toBe(MOCKED_DATA.data);

    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.onPressOut).toBeUndefined();

    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.noCanClose).not.toBeNull();

    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.noCanClose).toBe(
      MOCKED_DATA.noCanClose
    );
    expect(spy).toBeCalled();
  });
  test('FullScreenModalReducer  without onPressOut and noCanClose ', () => {
    const MOCKED_DATA: FullScreenModal = {
      data: <View />
    };
    const RenderCustom = {
      renderModal: () => <FullScreenModalReducer content={MOCKED_DATA} />,
      renderCompleteModal: () => <MockedNavigator component={RenderCustom.renderModal} />
    };
    store.dispatch(FeedBackActions.hideModal());
    const spy = jest.spyOn(store, 'dispatch');
    const treeInstance = renderer.create(RenderCustom.renderCompleteModal());
    const tree = renderer.create(RenderCustom.renderCompleteModal()).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.data).not.toBeNull();
    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.data).toBe(MOCKED_DATA.data);

    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.onPressOut).toBeUndefined();

    expect(treeInstance.root.findByType(FullScreenModalReducer).props.content.noCanClose).toBeUndefined();
    expect(spy).toBeCalled();
  });
});
