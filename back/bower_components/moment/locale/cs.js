//! moment.js locale configuration

(function (moment) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = moment;
  } else if (typeof define === 'function' && define.amd) {
    define([ '../moment' ], function (moment) {
      return moment;
    });
  } else {
    window.moment = moment;
  }

  const months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
    monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');

  const monthsParse = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i];
  const monthsRegex = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

  const plural = (n) => (n > 1) && (n % 10 !== 1 || n % 100 === 10 || n % 100 === 11);

  const translate = (number, withoutSuffix, key, isFuture) => {
    let result = number + ' ';
    switch (key) {
      case 's':
        return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
      case 'ss':
        return (withoutSuffix || isFuture) ? `${result}${(plural(number) ? 'sekundy' : 'sekund')}` : 'sekundami';
      case 'm':
        return withoutSuffix ? 'minutu' : (isFuture ? 'minutu' : 'minutou');
      case 'mm':
        return (withoutSuffix || isFuture) ? `${result}${(plural(number) ? 'minuty' : 'minut')}` : 'minutami';
      case 'h':
        return withoutSuffix ? 'hodinu' : (isFuture ? 'hodinu' : 'hodinou');
      case 'hh':
        return (withoutSuffix || isFuture) ? `${result}${(plural(number) ? 'hodiny' : 'hodin')}` : 'hodinami';
      case 'd':
        return (withoutSuffix || isFuture) ? 'den' : 'dnem';
      case 'dd':
        return (withoutSuffix || isFuture) ? `${result}${(plural(number) ? 'dny' : 'dní')}` : 'dny';
      case 'M':
        return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
      case 'MM':
        return (withoutSuffix || isFuture) ? `${result}${(plural(number) ? 'měsíce' : 'měsíců')}` : 'měsíci';
      case 'y':
        return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
      case 'yy':
        return (withoutSuffix || isFuture) ? `${result}${(plural(number) ? 'roky' : 'let')}` : 'lety';
    }
  };

  moment.defineLocale('cs', {
    months,
    monthsShort,
    monthsRegex,
    monthsShortRegex,
    monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosinec)/i,
    monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
    monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd D. MMMM YYYY H:mm',
      l: 'D. M. YYYY'
    },
    calendar: {
      sameDay: '[dnes v] LT',
      nextDay: '[zítra v] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[v neděli v] LT';
          case 1:
          case 2:
            return '[v] dddd [v] LT';
          case 3:
            return '[ve středu v] LT';
          case 4:
            return '[ve čtvrtek v] LT';
          case 5:
            return '[v pátek v] LT';
          case 6:
            return '[v sobotu v] LT';
        }
      },
      lastDay: '[včera v] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return '[minulou neděli v] LT';
          case 1:
          case 2:
            return '[minulé] dddd [v] LT';
          case 3:
            return '[minulou středu v] LT';
          case 4:
          case 5:
            return '[minulý] dddd [v] LT';
          case 6:
            return '[minulou sobotu v] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'před %s',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4  // The week that contains Jan 4th is the first week of the year.
    }
  });

})(moment);
