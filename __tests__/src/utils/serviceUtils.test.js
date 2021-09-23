import { cleanParams } from '@utils/serviceUtils';

describe('test serviceUtils', () => {
  test('to cleanParams', () => {
    const cleaner = cleanParams({});
    expect(cleaner).not.toBeNull();
    expect(cleaner).toStrictEqual({});
  });
});
