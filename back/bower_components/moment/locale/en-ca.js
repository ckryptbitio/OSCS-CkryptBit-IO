// Moment.js locale configuration for English (Canada)
(function (factory) {
  'use strict';

  if (typeof exports === 'object' && typeof module !== 'undefined' && typeof require === 'function') {
    factory(require('../moment'));
  } else if (typeof define === 'function' && define.amd) {
    define(['../moment'], factory);
  } else {
    factory(typeof moment !== 'undefined' ? moment : undefined);
  }
}(function (moment) {
  const enCa = {
    months: Array.from('January_February_March_April_May_June_July_August_September_October_November_December'.split('_')),
    monthsShort: Array.from('Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_')),
    weekdays: Array.from('Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_')),
    weekdaysShort: Array.from('Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_')),
    weekdaysMin: Array.from('Su_Mo_Tu_We_Th_Fr_Sa'.split('_')),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'YYYY-MM-DD',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A'
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: number => {
      const b = number % 10,
        output = (~~(number % 100 / 10) === 1) ? 'th' :
          (b === 1) ? 'st' :
          (b === 2) ? 'nd' :
          (b === 3) ? 'rd' : 'th';
      return number + output;
    }
  };

  moment.updateLocale('en-ca', enCa);

  return enCa;
}));
