import { Duration } from './duration'; // assuming the Duration class is defined in this module

export function abs(duration: Duration): Duration {
  const data = duration._data;

  duration._milliseconds = Math.abs(duration._milliseconds);
  duration._days = Math.abs(duration._days);
  duration._months = Math.abs(duration._months);

  ({
    milliseconds: data.milliseconds,
    seconds: data.seconds,
    minutes: data.minutes,
    hours: data.hours,
    months: data.months,
    years: data.years,
  } = {
    milliseconds: Math.abs(data.milliseconds),
    seconds: Math.abs(data.seconds),
    minutes: Math.abs(data.minutes),
    hours: Math.abs(data.hours),
    months: Math.abs(data.months),
    years: Math.abs(data.years),
  });

  return duration;
}
