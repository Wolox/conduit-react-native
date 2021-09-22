import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '@screens/Tags/components/Checkbox';

describe('Checkbox', () => {
  test('Checkbox Snapshot', () => {
    const onPress = (_option: string) => null;
    const item = { selected: false, option: '', onPress };
    const tree = renderer.create(<Checkbox {...item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
