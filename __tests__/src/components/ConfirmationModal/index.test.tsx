import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import ConfirmationModal from '@components/ConfirmationModal';

describe('test ArticleItem', () => {
  const MOCKED_DATA = {
    title: 'ok',
    showModal: true,
    onCancel: () => null,
    onConfirm: () => null
  };

  const RenderCustom = {
    renderModal: () => <ConfirmationModal {...MOCKED_DATA} />,
    renderCompleteModal: () => <MockedNavigator component={RenderCustom.renderModal} />
  };

  test('match with Snapshot', () => {
    const treeInstance = renderer.create(RenderCustom.renderCompleteModal());
    const tree = renderer.create(RenderCustom.renderCompleteModal()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    expect(treeInstance.root.findByType(ConfirmationModal).props.showModal).not.toBeNull();
    expect(treeInstance.root.findByType(ConfirmationModal).props.showModal).toBe(MOCKED_DATA.showModal);
    expect(treeInstance.root.findByType(ConfirmationModal).props.title).not.toBeNull();
    expect(treeInstance.root.findByType(ConfirmationModal).props.title).toBe(MOCKED_DATA.title);

    expect(treeInstance.root.findByType(ConfirmationModal).props.onCancel).not.toBeNull();
    expect(treeInstance.root.findByType(ConfirmationModal).props.onCancel).toBe(MOCKED_DATA.onCancel);

    expect(treeInstance.root.findByType(ConfirmationModal).props.onConfirm).not.toBeNull();
    expect(treeInstance.root.findByType(ConfirmationModal).props.onConfirm).toBe(MOCKED_DATA.onConfirm);
  });
});
