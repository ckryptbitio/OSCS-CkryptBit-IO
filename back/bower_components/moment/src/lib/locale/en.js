import './prototype';
import { getSetGlobalLocale } from './locales';
import toInt from '../utils/to-int';

const ordinalSuffix = num => {
  const b = num % 10,
    output =
      toInt(num % 100 / 10) === 1
        ? 'th'
        : b === 1
        ? 'st'
        : b === 2
        ? 'nd'
        : b === 3
        ? 'rd'
        : 'th';
  return output;
};

getSetGlobalLocale('en', {
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function (number) {
    return number + ordinalSuffix(number);
  },
});

