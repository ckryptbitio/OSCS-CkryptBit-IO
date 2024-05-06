// Side effect imports
import './prototype';

import * as localeModule from './locales';
import * as listModule from './lists';
import { deprecate, hooks } from '../utils';

// Export all named exports from the locales module
export {
    getSetGlobalLocale as getSetGlobalLocale,
    defineLocale as defineLocale,
    updateLocale as updateLocale,
    getLocale as getLocale,
    listLocales as listLocales,
    ...localeModule
};

// Export all named exports from the lists module
export {
    listMonths,
    listMonthsShort,
    listWeekdays,
    listWeekdaysShort,
    listWeekdaysMin,
    ...listModule
};

const deprecatedLocale = deprecate('moment.lang is deprecated. Use moment.locale instead.', localeModule.getSetGlobalLocale);
const deprecatedLocaleData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', localeModule.getLocale);

hooks.lang = deprecatedLocale;
hooks.langData = deprecatedLocaleData;

import './en';
