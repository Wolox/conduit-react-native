import { validateEqualLength, validateMaxLength, validateMinLength } from '@utils/validations/validateUtils';

describe('test validateUtils', () => {
  test('to validateEqualLength', () => {
    const validate = validateEqualLength(10);
    expect(validate).not.toBeNull();
  });
  test('to validateMaxLength', () => {
    const expected = {
      maxLength: { message: 'Este campo debe tener como máximo {{count}} caracter', value: 10 }
    };
    const validate = validateMaxLength(10);
    expect(validate).not.toBeNull();
    expect(validate).toStrictEqual(expected);
  });
  test('to validateMinLength', () => {
    const expected = {
      minLength: { message: 'Este campo debe tener como mínimo {{count}} caracter', value: 10 }
    };
    const validate = validateMinLength(10);
    expect(validate).not.toBeNull();
    expect(validate).toStrictEqual(expected);
  });
});
