//! moment.js locale configuration
//! locale : Luxembourgish [lb]
//! author : mweimerskirch : https://github.com/mweimerskirch
//! author : David Raison : https://github.com/kwisatz

import moment from '../moment';

const MONTHS = 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_');
const MONTHS_SHORT = 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_');
const WEEKDAYS = 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_');
const WEEKDAYS_SHORT = 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_');
const FORMATS = {
    'm': ['eng Minutt', 'enger Minutt'],
    'h': ['eng Stonn', 'enger Stonn'],
    'd': ['een Dag', 'engem Dag'],
    'M': ['ee Mount', 'engem Mount'],
    'y': ['ee Joer', 'engem Joer']
};

function processRelativeTime(number, withoutSuffix, key, isFuture) {
    return withoutSuffix ? FORMATS[key][0] : FORMATS[key][1];
}

function processFutureTime(string) {
    const number = string.substr(0, string.indexOf(' '));
    return eifelerRegelAppliesToNumber(number) ? `a ${string}` : `an ${string}`;
}

function processPastTime(string) {
    const number = string.substr(0, string.indexOf(' '));
    return eifelerRegelAppliesToNumber(number) ? `viru ${string}` : `virun ${string}`;
}

function eifelerRegelAppliesToNumber(number) {
    number = parseInt(number, 10);
    if (isNaN(number)) {
        return false;
    }

    if (number < 0) {
        return true;
    }

    const lastDigit = number % 10;
    if (number < 10) {
        return [4, 5, 6, 7].includes(number);
    }

    if (number < 100) {
        return eifelerRegelAppliesToNumber(lastDigit);
    }

    const firstDigit = Math.floor(number / 100);
    const remainingNumber = number % 100;
    if (remainingNumber === 0) {
        return eifelerRegelAppliesToNumber(firstDigit);
    }

    return eifelerRegelAppliesToNumber(remainingNumber);
}

export default moment.defineLocale('lb', {
    months,
    monthsShort,
    monthsParseExact: true,
    weekdays,
    weekdaysShort,
    weekdaysMin,
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm [Auer]',
        LTS: 'H:mm:ss [Auer]',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm [Auer]',
        LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
    },
    calendar: {
        sameDay: '[Haut um] LT',
        sameElse: 'L',
        nextDay: '[Muer um] LT',
        nextWeek: 'dddd [um] LT',
        lastDay: '[Gëschter um] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 2:
                case 4:
                    return '[Leschten] dddd [um] LT';
                default:
                    return '[Leschte] dddd [um] LT';
            }
        }
    },
    relativeTime: {
        future: processFutureTime,
        past: processPastTime,
        s: 'e puer Sekonnen',
        ss: '%d Sekonnen',
        m: processRelativeTime,
        mm: '%d Minutten',
        h: processRelativeTime,
        hh: '%d Stonnen',
        d: processRelativeTime,
        dd: '%d Deeg',
        M: processRelativeTime,
        MM: '%d Méint',
        y: processRelativeTime,
        yy: '%d Joer'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4  // The week that contains Jan 4th is the first week of the year.
    }
});
