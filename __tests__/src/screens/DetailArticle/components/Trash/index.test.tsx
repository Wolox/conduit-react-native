import React from 'react';
import renderer from 'react-test-renderer';
import Trash from '@screens/DetailArticle/components/Trash';

describe('Trash', () => {
  test('Trash Snapshot', () => {
    const tree = renderer.create(<Trash />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
