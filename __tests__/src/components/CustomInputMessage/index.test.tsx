import React from 'react';
import renderer from 'react-test-renderer';
import CustomInputMessage from '@components/CustomInputMessage';

describe('CustomInputMessage', () => {
  test('CustomInputMessage Snapshot', () => {
    const item = {
      maxLengthMessage: 5,
      minLengthMessage: 0,
      styleInputText: {}
    };
    const tree = renderer.create(<CustomInputMessage {...item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
