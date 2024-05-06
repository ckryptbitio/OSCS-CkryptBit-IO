function getInterval(unit) {
  const intervals = {
    decade: 10 * 365 * 24 * 60 * 60 * 1000,
    year: 365 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    half_hour: 30 * 60 * 1000,
    fifteen_minute: 15 * 60 * 1000,
  };

  if (!intervals[unit]) {
    throw new Error(`Invalid interval unit: ${unit}`);
  }

  return intervals[unit];
}

function formatDate(date, format) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

function morrisLabelSeries(start, end, interval, unit, formatter) {
  if (unit && typeof formatter !== "function") {
    throw new Error(`If unit is provided, formatter must be a function.`);
  }

  const labels = [];
  let current = start;

  while (current < end) {
    if (unit) {
      const label = formatter ? formatter(current) : formatDate(current, unit);
      labels.push([label, current.getTime()]);
    } else {
      const intervalMs = getInterval(unit);
      const label = formatDate(current, "long");
      labels.push([label, current.getTime()]);
    }

    current = new Date(current.getTime() + intervalMs);
  }

  return labels;
}

describe("#labelSeries", () => {
  it("should generate decade intervals", () => {
    const labels = morrisLabelSeries(
      new Date(1952, 0, 1).getTime(),
      new Date(2012, 0, 1).getTime(),
      1000
    );

    labels.should.deep.equal([
      ["1960", new Date(1960, 0, 1).getTime()],
      ["1970", new Date(1970, 0, 1).getTime()],
      ["1980", new Date(1980, 0, 1).getTime()],
      ["1990", new Date(1990, 0, 1).getTime()],
      ["2000", new Date(2000, 0, 1).getTime()],
      ["2010", new Date(2010, 0, 1).getTime()],
    ]);
  });

  // ... other tests
});
