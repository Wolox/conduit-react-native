import { arrayToObject } from '@utils/arrayUtils';

describe('test serviceUtils', () => {
  test('to cleanParams', () => {
    const object = arrayToObject([]);
    expect(object).not.toBeNull();
    expect(object).toStrictEqual({});
  });
});
