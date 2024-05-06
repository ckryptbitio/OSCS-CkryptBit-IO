const helpers = Chart.helpers;

const defaultConfig = {
  segmentShowStroke: true,
  segmentStrokeColor: "#fff",
  segmentStrokeWidth: 2,
  percentageInnerCutout: 50,
  animationSteps: 100,
  animationEasing: "easeOutBounce",
  animateRotate: true,
  animateScale: false,
  legendTemplate:
    "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
};

class DoughnutSegment extends Chart.Arc {
  constructor({ ctx, x, y, ...options }) {
    super({ ctx, x, y });
    this.options = options;
  }
}

class DoughnutChart extends Chart.Type {
  constructor(config) {
    super(config);
    this.SegmentArc = DoughnutSegment;
  }

  initialize(data) {
    this.segments = [];
    this.outerRadius =
      (helpers.min([this.chart.width, this.chart.height]) -
        this.options.segmentStrokeWidth / 2) /
      2;

    // Set up tooltip events on the chart
    if (this.options.showTooltips) {
      helpers.bindEvents(
        this,
        this.options.tooltipEvents,
        (evt) => {
          const activeSegments =
            evt.type !== "mouseout"
              ? this.getSegmentsAtEvent(evt)
              : [];

          helpers.each(this.segments, (segment) => {
            segment.restore(["fillColor"]);
          });
          helpers.each(activeSegments, (activeSegment) => {
            activeSegment.fillColor = activeSegment.highlightColor;
          });
          this.showTooltip(activeSegments);
        }.bind(this)
      );
    }

    this.calculateTotal(data);

    helpers.each(data, (datapoint, index) => {
      this.addData(datapoint, index, true);
    }, this);

    this.render();
  }

  // ... Rest of the methods
}

Chart.Type.extend({
  name: "Doughnut",
  defaults: defaultConfig,
  initialize: DoughnutChart.prototype.initialize,
  // ... Rest of the methods
});

Chart.types.Doughnut.extend({
  name: "Pie",
  defaults: helpers.merge(defaultConfig, { percentageInnerCutout: 0 }),
});
