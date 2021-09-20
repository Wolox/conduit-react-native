import React from 'react';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';
import Profile from '@screens/Profile';

describe('Profile', () => {
  beforeEach(() => {
    const useSelectorMock = jest.spyOn(redux, 'useSelector');
    useSelectorMock.mockReturnValue({
      userProfileLoading: false,
      currentUserLoading: false,
      currentUserError: null
    });
    jest.useFakeTimers();
  });
  test('Profile Snapshot', () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
  });
});
