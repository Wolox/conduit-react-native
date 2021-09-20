import React from 'react';
import renderer from 'react-test-renderer';
import AvatarSelector from '@screens/Profile/components/AvatarSelector';

describe('AvatarSelector', () => {
  test('AvatarSelector Snapshot', () => {
    const setSelected = (_name: string) => null;
    const item = { selected: 'Man1', setSelected };
    const tree = renderer.create(<AvatarSelector {...item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
