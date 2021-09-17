import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '@screens/Profile';
import * as redux from 'react-redux';

export const useSelectorMock = jest.spyOn(redux, 'useSelector');
useSelectorMock.mockReturnValue({ userProfileLoading: false, currentUserLoading: false });

describe('Profile', () => {
  test('Profile Snapshot', () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
