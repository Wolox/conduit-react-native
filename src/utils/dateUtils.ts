import dayjs from 'dayjs';

export const formatDate = (date: string, withTime?: boolean, separator?: string) =>
  dayjs(date).format(`DD · MM · YYYY${withTime ? ` [${separator}] HH:mm[hs]` : ''}`);
