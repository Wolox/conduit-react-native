import Man1 from '@assets/avatars/Man1.png';
import Man2 from '@assets/avatars/Man2.png';
import Man3 from '@assets/avatars/Man3.png';
import Man4 from '@assets/avatars/Man4.png';
import Woman1 from '@assets/avatars/Woman1.png';
import Woman2 from '@assets/avatars/Woman2.png';
import Woman3 from '@assets/avatars/Woman3.png';
import Woman4 from '@assets/avatars/Woman4.png';
import userIcon from '@assets/Profile/icUser.png';

export const avatarsIcons = [
  { name: 'Man1', icon: Man1 },
  { name: 'Man2', icon: Man2 },
  { name: 'Man3', icon: Man3 },
  { name: 'Man4', icon: Man4 },
  { name: 'Woman1', icon: Woman1 },
  { name: 'Woman2', icon: Woman2 },
  { name: 'Woman3', icon: Woman3 },
  { name: 'Woman4', icon: Woman4 }
];

export const getAvatar = (name: string) => {
  let icon = userIcon;
  avatarsIcons.forEach(element => {
    if (element.name === name) {
      // eslint-disable-next-line prefer-destructuring
      icon = element.icon;
    }
  });
  return icon;
};
