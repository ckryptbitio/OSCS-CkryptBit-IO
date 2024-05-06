describe('Morris.Bar#colorFor', () => {
  const defaults = {
    element: 'graph',
    data: [{ x: 'foo', y: 2, z: 3 }, { x: 'bar', y: 4, z: 6 }],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z'],
  };

  it('should fetch colors from an array', () => {
    const barColors = ['#f00', '#0f0', '#00f'];
    const chart = Morris.Bar.prototype.colorFor;
    const data = defaults.data[0];

    chart.call(
      $.extend({}, defaults, { barColors }),
      data,
      0,
      'bar'
    ).should.equal(barColors[0]);

    chart.call(
      $.extend({}, defaults, { barColors }),
      data,
      0,
      'hover'
    ).should.equal(barColors[0]);

    chart.call(
      $.extend({}, defaults, { barColors }),
      data,
      1,
      'bar'
    ).should.equal(barColors[1]);

    chart.call(
      $.extend({}, defaults, { barColors }),
      data,
      1,
      'hover'
    ).should.equal(barColors[1]);

    chart.call(
      $.extend({}, defaults, { barColors }),
      data,
      2,
      'bar'
    ).should.equal(barColors[2]);

    chart.call(
      $.extend({}, defaults, { barColors }),
      data,
      2,
      'hover'
    ).should.equal(barColors[2]);

    chart.call(
      $.extend({}, defaults, { barColors }),
      data,
      3,
      'bar'
    ).should.equal(barColors[0]);

    chart.call(
      $.extend({}, defaults, { barColors }),
      data,
      4,
      'hover'
    ).should.equal(barColors[1]);
  });

  it('should defer to a callback', () => {
    const stub = sinon.stub().returns('#f00');
    const chart = Morris.Bar.prototype.colorFor;

    stub.reset();

    chart.call(
      $.extend({}, defaults, { barColors: stub }),
      defaults.data[0],
      0,
      'bar'
    );

    stub.should.have.been.calledWith(
      { x: 0, y: 2, label: 'foo' },
      { index: 0, key: 'y', label: 'Y' },
      'bar'
    );

    stub.reset();

    chart.call(
      $.extend({}, defaults, { barColors: stub }),
      defaults.data[0],
      1,
      'hover'
    );

    stub.should.have.been.calledWith(
      { x: 0, y: 3, label: 'foo' },
      { index: 1, key: 'z', label: 'Z' },
      'hover'
    );
  });
});
