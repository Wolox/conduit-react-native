import { arrayToObject } from './arrayUtils';

export const cleanParams = obj =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    if (value === null || value === undefined || value === '' || value.length === 0) return acc;
    if (value && typeof value === 'object' && value.id) return { ...acc, [key]: value.id };
    return { ...acc, [key]: value };
  }, {});

export const formatParams = (arrayParams, customKey) => {
  const objParams = arrayToObject(arrayParams);
  return `?${Object.entries(cleanParams(objParams))
    .map(([key, value]) => `${customKey ? customKey : key}=${value}`)
    .join('&')}`;
};
