//! moment.js locale configuration
//! locale : Tibetan [bo]
//! author : Thupten N. Chakrishar : https://github.com/vajradog

import moment from '../moment';

const symbolMap = {
    '1': '༡',
    '2': '༢',
    '3': '༣',
    '4': '༤',
    '5': '༥',
    '6': '༦',
    '7': '༧',
    '8': '༨',
    '9': '༩',
    '0': '༠'
};

const numberMap = {
    '༡': '1',
    '༢': '2',
    '༣': '3',
    '༤': '4',
    '༥': '5',
    '༦': '6',
    '༧': '7',
    '༨': '8',
    '༩': '9',
    '༠': '0'
};

const months = 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_');
const monthsShort = 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_');
const weekdays = 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_');
const weekdaysShort = 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_');
const weekdaysMin = 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_');

export default moment.defineLocale('bo', {
    months,
    monthsShort,
    weekdays,
    weekdaysShort,
    weekdaysMin,
    longDateFormat: {
        LT: 'A h:mm',
        LTS: 'A h:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, A h:mm',
        LLLL: 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar: {
        sameDay: '[དི་རིང] LT',
        nextDay: '[སང་ཉིན] LT',
        nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
        lastDay: '[ཁ་སང] LT',
        lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s ལ་',
        past: '%s སྔན་ལ',
        s: 'ལམ་སང',
        ss: '%d སྐར་ཆ།',
        m: 'སྐར་མ་གཅིག',
        mm: '%d སྐར་མ',
        h: 'ཆུ་ཚོད་གཅིག',
        hh: '%d ཆུ་ཚོད',
        d: 'ཉིན་གཅིག',
        dd: '%d ཉིན་',
        M: 'ཟླ་བ་གཅིག',
        MM: '%d ཟླ་བ',
        y: 'ལོ་གཅིག',
        yy: '%d ལོ'
    },
    preparse: (string) => string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (match) => numberMap[match]),
    postformat: (string) => string.replace(/\d/g, (match) => symbolMap[match]),
    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
    meridiemHour: (hour, meridiem) => {
        if (hour === 12) {
            hour = 0;
        }
        if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
            (meridiem === 'ཞོགས་ཀས' && hour < 5) ||
            meridiem === 'དགོང་དག') {
            return hour + 12;
        } else {
            return hour;
        }
    },
    meridiem: (hour, minute, isLower) => {
        if (hour < 4) {
            return 'མཚན་མོ';
        } else if (hour < 10) {
            return 'ཞོགས་ཀས';
        } else if (hour < 17) {
            return 'ཉིན་གུང';
        } else if (hour < 20) {
            return 'དགོང་དག';
        } else {
            return 'མཚན་མོ';
        }
    },
    week: {
        dow: 0, // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
});

