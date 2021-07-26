import i18next from 'i18next';

i18next.addResources('es', 'VALIDATIONS', {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Invalid email format',
  ALPHANUMERIC: 'Este campo solo admite caracteres alfanuméricos',
  ONLY_TEXT: 'Este campo solo admite texto',
  ONLY_NUMBERS: 'Este campo solo admite números',
  MIN_LENGTH: 'Este campo debe tener como mínimo {{count}} caracter',
  MIN_LENGTH_plural: 'This field requires least {{count}} characters',
  MAX_LENGTH: 'Este campo debe tener como máximo {{count}} caracter',
  MAX_LENGTH_plural: 'Este campo debe tener como máximo {{count}} caracteres',
  EQUAL_LENGTH: 'Este campo debe tener {{count}} caracter',
  EQUAL_LENGTH_plural: 'Este campo debe tener {{count}} caracteres'
});
