import { formatDate } from '@utils/dateUtils';

describe('test dateUtils', () => {
  test('to formatDate', () => {
    const dateFormated = formatDate('2021-08-31T19:10:13.814Z');
    expect(dateFormated).toBe('31 · 08 · 2021');
  });
});
