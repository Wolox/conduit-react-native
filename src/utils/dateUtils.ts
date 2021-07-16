import moment from 'moment-timezone';
import 'moment/locale/es';

const TIMEZONE = 'America/Argentina/Buenos_Aires';

const argentinaMoment = (date?: string | number) => moment.tz(date, TIMEZONE);

export const formatDate = (date: string, withTime?: boolean, separator?: string) =>
  argentinaMoment(date).format(`DD · MM · YYYY${withTime && ` [${separator}] HH:mm[hs]`}`);
