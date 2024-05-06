// Define the default calendar object
const defaultCalendar = {
  sameDay: '[Today at] LT',
  nextDay: '[Tomorrow at] LT',
  nextWeek: 'dddd [at] LT',
  lastDay: '[Yesterday at] LT',
  lastWeek: '[Last] dddd [at] LT',
  sameElse: 'L',
};

// Check if a given value is a function
const isFunction = (value) => typeof value === 'function';

// Define the calendar function with proper parameter names and descriptions
/**
 * Formats the given moment object based on the given key and the current moment.
 * @param {string} key - The key to use for formatting the moment object.
 * @param {moment.Moment} mom - The moment object to format.
 * @param {moment.Moment} now - The current moment.
 * @returns {string} The formatted moment string.
 */
const calendar = (key, mom, now) => {
  const output = this._calendar[key] || this._calendar['sameElse'];
  return isFunction(output) ? output(mom, now) : output;
};

// Export the defaultCalendar object and the calendar function
export { defaultCalendar, calendar };
