import { Moment } from './moment'; // assuming Moment type is defined in this module

export function valueOf(this: Moment): number {
  return this._d.valueOf() - ((this._offset || 0) * 60000);
}

export function unix(this: Moment): number {
  return Math.floor(this.valueOf() / 1000);
}

export function toDate(this: Moment): Date {
  return new Date(this.valueOf());
}

export function toArray(this: Moment): number[] {
  const m = this;
  return [
    m.year(),
    m.month(),
    m.date(),
    m.hours(),
    m.minutes(),
    m.seconds(),
    m.millisecond(),
  ];
}

export function toObject(this: Moment): Record<string, number> {
  const m = this;
  return {
    years: m.year(),
    months: m.month(),
    date: m.date(),
    hours: m.hours(),
    minutes: m.minutes(),
    seconds: m.seconds(),
    milliseconds: m.milliseconds(),
  };
}

export function toJSON(this: Moment): string | null {
  // new Date(NaN).toJSON() === null
  return this.isValid() ? this.toISOString() : null;
}

// Default export for easier import in other modules
export default {
  valueOf,
  unix,
  toDate,
  toArray,
  toObject,
  toJSON,
};
