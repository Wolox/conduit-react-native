import React from 'react';
import renderer from 'react-test-renderer';
import CustomModal from '@screens/DetailArticle/components/CustomModal';

describe('CustomModal', () => {
  test('CustomModal Snapshot', () => {
    const item = { showModal: true, setShowModal: () => null, idComment: 1, articleSlug: '' };
    const tree = renderer.create(<CustomModal {...item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
