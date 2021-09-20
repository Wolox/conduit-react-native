import React from 'react';
import renderer from 'react-test-renderer';
import ProfileItem from '@screens/Profile/components/ProfileItem';
import logoutIcon from '@assets/Profile/icLogout.png';

describe('ProfileItem', () => {
  test('ProfileItem Snapshot', () => {
    const handlePressLogout = () => null;
    const item = { title: 'Logout', icon: logoutIcon, onPress: handlePressLogout };
    const tree = renderer.create(<ProfileItem {...item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
