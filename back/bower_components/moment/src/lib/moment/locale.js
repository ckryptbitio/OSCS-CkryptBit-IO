import { getLocale as getLocaleFromModule } from '../locale/locales';
import { deprecate } from '../utils/deprecate';

class Moment {
  constructor() {
    this._locale = {};
  }

  // Returns the current locale abbreviation
  locale(key) {
    if (key === undefined) {
      return this._locale._abbr;
    }

    const newLocaleData = getLocaleFromModule(key);

    if (newLocaleData) {
      this._locale = newLocaleData;
    }

    return this;
  }

  // Deprecated. Use locale() instead.
  lang(key) {
    deprecate(
      'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
      function (...args) {
        if (args.length === 0) {
          return this.localeData();
        }

        return this.locale(key);
      }
    ).apply(this, arguments);
  }

  // Returns the language configuration
  localeData() {
    return this._locale;
  }
}

// Overwrite the original exported functions with our class instance methods
export const locale = (key) => new Moment().locale(key);
export const lang = (key) => new Moment().lang(key);
export const localeData = () => new Moment().localeData();
