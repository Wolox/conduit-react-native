import React from 'react';
import renderer from 'react-test-renderer';
import Tag from '@screens/NewArticle/components/Tag';

describe('Tag', () => {
  test('Tag Snapshot', () => {
    const onDeleteTag = (_index: number) => null;
    const item = { text: '', onDeleteTag, index: 0 };
    const tree = renderer.create(<Tag {...item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
