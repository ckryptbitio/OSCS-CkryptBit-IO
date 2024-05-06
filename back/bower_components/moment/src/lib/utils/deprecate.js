import extend from './extend';
import { hooks } from './hooks';
import isUndefined from './is-undefined';

/**
 * Logs a deprecation warning to the console if suppressDeprecationWarnings is false.
 * @param msg - The deprecation message to log.
 */
function warn(msg: string): void {
  if (
    hooks.suppressDeprecationWarnings === false &&
    (typeof console !== 'undefined' && console.warn)
  ) {
    console.warn('Deprecation warning: ' + msg);
  }
}

/**
 * Wraps a function and logs a deprecation warning when the function is called.
 * @param msg - The deprecation message to log.
 * @param fn - The function to wrap.
 * @returns A wrapped version of the function that logs a deprecation warning when called.
 */
export function deprecate(msg: string, fn: Function): Function {
  let firstTime = true;

  return extend(function () {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(null, msg);
    }
    if (firstTime) {
      const args: any[] = [];
      for (let i = 0; i < arguments.length; i++) {
        const arg = arguments[i];
        args.push(typeof arg === 'object' ? JSON.stringify(arg) : arg);
      }
      warn(msg + '\nArguments: ' + args.join(', ') + '\n' + (new Error()).stack);
      firstTime = false;
    }
    return fn.apply(this, arguments);
  }, fn);
}

/**
 * Maps function names to deprecation messages.
 */
const deprecations: { [name: string]: boolean } = {};

/**
 * Logs a deprecation warning for a simple function.
 * @param name - The name of the deprecated function.
 * @param msg - The deprecation message to log.
 */
export function deprecateSimple(name: string, msg: string): void {
  if (hooks.deprecationHandler != null) {
    hooks.deprecationHandler(name, msg);
  }
  if (!deprecations[name]) {
    warn(msg);
    deprecations[name] = true;
  }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

export default { warn, deprecate, deprecateSimple };
