//! moment.js locale configuration

;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(require('../moment'))
    : typeof define === 'function' && define.amd
    ? define(['../moment'], factory)
    : factory(global.moment);
}(this, (function (moment) {
  'use strict';

  const ko = {
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: moment.util.isoWeeksArray(true),
    weekdaysShort: moment.util.isoWeeksArray(true).map(day => day.slice(0, 3)),
    weekdaysMin: moment.util.isoWeeksArray(true).map(day => day.slice(0, 2)),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'YYYY.MM.DD.',
      LL: 'YYYY년 MMMM D일',
      LLL: 'YYYY년 MMMM D일 A h:mm',
      LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
      l: 'YYYY.MM.DD.',
      ll: 'YYYY년 MMMM D일',
      lll: 'YYYY년 MMMM D일 A h:mm',
      llll: 'YYYY년 MMMM D일 dddd A h:mm',
    },
    calendar: {
      sameDay: '[오늘] LT',
      nextDay: '[내일] LT',
      nextWeek: 'dddd LT',
      lastDay: '[어제] LT',
      lastWeek: '[지난주] dddd LT',
      sameElse: 'L',
    },
    relativeTime: {
      future: '%s 후',
      past: '%s 전',
      s: '몇 초',
      ss: duration => `${duration.asSeconds()}초`,
      m: '1분',
      mm: duration => `${duration.asMinutes()}분`,
      h: '한 시간',
      hh: duration => `${duration.asHours()}시간`,
      d: '하루',
      dd: duration => `${duration.asDays()}일`,
      M: '한 달',
      MM: duration => `${duration.asMonths()}달`,
      y: '일 년',
      yy: duration => `${duration.asYears()}년`,
    },
    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal: (number, period) => {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '일';
        case 'M':
          return number + '월';
        case 'w':
        case 'W':
          return number + '주';
        default:
          return number;
      }
    },
    meridiemParse: /오전|오후/,
    isPM: token => token === '오후',
    meridiem: (hour, minute, isUpper) =>
      hour < 12 ? '오전' : '오후',
  };

  moment.updateLocale('ko', ko);

  return ko;
})));
