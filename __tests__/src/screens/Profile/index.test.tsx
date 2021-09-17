import React from 'react';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';
import Profile from '@screens/Profile';

const useSelectorMock = jest.spyOn(redux, 'useSelector');
useSelectorMock.mockReturnValue({
  userProfileLoading: false,
  currentUserLoading: false,
  currentUserError: null
});

describe('Profile', () => {
  test('Profile Snapshot', async done => {
    const tree = await renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
    done();
  });
});
