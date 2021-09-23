import { customStyles } from '../../../src/constants/navigationHelper';

describe('navigationHelper Return styles', () => {
  test('return object styles', async () => {
    const response = customStyles();
    expect(await response.headerStyle).not.toBeNull();
    expect(await response.headerStyle).toStrictEqual({ backgroundColor: '#F1F1F1' });
    expect(await response.headerTitleStyle).not.toBeNull();
    expect(await response.headerTitleStyle).toStrictEqual({
      color: '#000',
      alignSelf: 'center',
      width: '100%'
    });
  });
});
