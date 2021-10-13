import { customStyles } from '@constants/navigationHelper';

describe('navigationHelper Return styles', () => {
  test('return object styles', async () => {
    const response = await customStyles();
    expect(response.headerStyle).not.toBeNull();
    expect(response.headerStyle).toStrictEqual({
      borderWidth: 0,
      backgroundColor: '#F1F1F1',
      shadowColor: 'transparent'
    });
    expect(response.headerTitleStyle).not.toBeNull();
    expect(response.headerTitleStyle).toStrictEqual({
      color: '#000',
      alignSelf: 'center',
      width: '100%'
    });
  });
});
