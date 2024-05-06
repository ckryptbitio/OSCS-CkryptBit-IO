// moment.js locale configuration

(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory(require('../moment'));
  } else if (typeof define === 'function' && define.amd) {
    define(['../moment'], factory);
  } else {
    global.moment.defineLocale('pt-br', factory(global.moment));
  }
}(this, (function (moment) {
  'use strict';

  return {
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: (day, month, year) => `${day} de ${moment.months(month - 1)} de ${year}`,
      LLL: (day, month, year, hour, minute) => `${day} de ${moment.months(month - 1)} de ${year} às ${hour}:${minute}`,
      LLLL: (day, month, year, hour, minute, weekday) => `${moment.weekdays(weekday, 'long')}, ${day} de ${moment.months(month - 1)} de ${year} às ${hour}:${minute}`
    },
    calendar: {
      sameDay: (date) => `Hoje às ${date.format('LT')}`,
      nextDay: (date) => `Amanhã às ${date.format('LT')}`,
      nextWeek: (date) => `${moment.weekdays(date.day(), 'long')} às ${date.format('LT')}`,
      lastDay: (date) => `Ontem às ${date.format('LT')}`,
      lastWeek: (date) => {
        const day = date.day();
        return (day === 0 || day === 6) ?
          `Último ${moment.weekdays(day, 'long')} às ${date.format('LT')}` : // Saturday + Sunday
          `Última ${moment.weekdays(day, 'long')} às ${date.format('LT')}`; // Monday - Friday
      },
      sameElse: (date) => date.format('L')
    },
    relativeTime: {
      future: (time) => `em ${time}`,
      past: (time) => `há ${time}`,
      s: 'poucos segundos',
      ss: (time) => `${time} segundos`,
      m: 'um minuto',
      mm: (time) => `${time} minutos`,
      h: 'uma hora',
      hh: (time) => `${time} horas`,
      d: 'um dia',
      dd: (time) => `${time} dias`,
      M: 'um mês',
      MM: (time) => `${time} meses`,
      y: 'um ano',
      yy: (time) => `${time} anos`
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: (number) => `${number}º`
  };
})));
