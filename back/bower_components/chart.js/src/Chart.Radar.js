(function () {
    "use strict";

    var root = this,
        Chart = root.Chart,
        helpers = Chart.helpers;

    // Helper function to create a new Point instance with common options
    function createPoint(chart, x, y, value, label, datasetLabel, strokeColor, fillColor) {
        return new chart.PointClass({
            value: value,
            label: label,
            datasetLabel: datasetLabel,
            x: x,
            y: y,
            strokeColor: strokeColor,
            fillColor: fillColor,
            highlightFill: fillColor,
            highlightStroke: strokeColor
        });
    }

    // Helper function to get the point position from the scale
    function getPointPosition(scale, index, value) {
        if (!scale.animation) {
            return scale.getPointPosition(index, scale.calculateCenterOffset(value));
        }
        return { x: scale.xCenter, y: scale.yCenter };
    }

    Chart.Type.extend({
        name: "Radar",
        defaults: {
            // Boolean - Whether to show lines for each scale point
            scaleShowLine: true,

            // Boolean - Whether we show the angle lines out of the radar
            angleShowLineOut: true,

            // Boolean - Whether to show labels on the scale
            scaleShowLabels: false,

            // Boolean - Whether the scale should begin at zero
            scaleBeginAtZero: true,

            // String - Colour of the angle line
            angleLineColor: "rgba(0,0,0,.1)",

            // Number - Pixel width of the angle line
            angleLineWidth: 1,

            // String - Point label font declaration
            pointLabelFontFamily: "'Arial'",

            // String - Point label font weight
            pointLabelFontStyle: "normal",

            // Number - Point label font size in pixels
            pointLabelFontSize: 10,

            // String - Point label font colour
            pointLabelFontColor: "#666",

            // Boolean - Whether to show a dot for each point
            pointDot: true,

            // Number - Radius of each point dot in pixels
            pointDotRadius: 3,

            // Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,

            // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,

            // Boolean - Whether to show a stroke for datasets
            datasetStroke: true,

            // Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,

            // Boolean - Whether to fill the dataset with a colour
            datasetFill: true,

            // String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

        },

        initialize: function (data) {
            if (!Array.isArray(data.labels)) {
                throw new Error("data.labels must be an array");
            }

            if (!Array.isArray(data.datasets)) {
                throw new Error("data.datasets must be an array");
            }

            this.PointClass = Chart.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx
            });

            this.datasets = [];

            this.buildScale(data);

            // Set up tooltip events on the chart
            if (this.options.showTooltips) {
                helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
                    var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

                    this.eachPoints(function (point) {
                        point.restore(["fillColor", "strokeColor"]);
                    });

                    helpers.each(activePointsCollection, function (activePoint) {
                        activePoint.fillColor = activePoint.highlightFill;
                        activePoint.strokeColor = activePoint.highlightStroke;
                    });

                    this.showTooltip(activePointsCollection);
                }.bind(this));
            }

            // Iterate through each of the datasets, and build this into a property of the chart
            helpers.each(data.datasets, function (dataset) {
                var datasetObject = {
                    label: dataset.label || null,
                    fillColor: dataset.fillColor,
                    strokeColor: dataset.strokeColor,
                    pointColor: dataset.pointColor,
                    pointStrokeColor: dataset.pointStrokeColor,
                    points: []
                };

                this.datasets.push(datasetObject);

                helpers.each(dataset.data, function (dataPoint, index) {
                    // Add a new point for each piece of data, passing any required data to draw.
                    var pointPosition = getPointPosition(this.scale, index, dataPoint);
                    datasetObject.points.push(createPoint(this,
                        pointPosition.x,
                        pointPosition.y,
                        dataPoint,
                        data.labels[index],
                        dataset.label,
                        dataset.pointStrokeColor,
                        dataset.pointColor
                    ));
                }, this);

            }, this);

            this.render();
        },
        eachPoints: function (callback) {
            helpers.each(this.datasets, function (dataset) {
                helpers.each(dataset.points, callback, this);
            }, this);
        },

        getPointsAtEvent: function (evt) {
            var mousePosition = helpers.getRelativePosition(evt),
                fromCenter = helpers.getAngleFromPoint({
                    x: this.scale.xCenter,
                    y: this.scale.yCenter
                }, mousePosition);

            var anglePerIndex = (Math.PI * 2) / this.scale.valuesCount,
                pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
                activePointsCollection = [];

            // If we're at the top, make the pointIndex 0 to get the first of the array.
            if (pointIndex >= this.scale.valuesCount || pointIndex < 0) {
                pointIndex = 0;
            }

            if (fromCenter.distance <= this.scale.drawingArea) {
                helpers.each(this.datasets, function (dataset) {
                    activePointsCollection.push(dataset.points[pointIndex]);
                });
            }

            return activePointsCollection;
        },

        buildScale: function (data) {
            this.scale = new Chart.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                angleLineColor: this.options.angleLineColor,
                angleLineWidth: (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
                // Point labels at the edge of each line
                pointLabelFontColor: this.options.pointLabelFontColor,
                pointLabelFontSize: this.options.pointLabelFontSize,
                pointLabelFontFamily: this.options.pointLabelFontFamily,
                pointLabelFontStyle: this.options.pointLabelFontStyle,
                height: this.scale.chart.height,
                width: this.scale.chart.width,
                xCenter: this.scale.chart.width / 2,
                yCenter: this.scale.chart.height / 2,
                ctx: this.scale.chart.ctx,
                templateString: this.options.scaleLabel,
                labels: data.labels,
                valuesCount: data.datasets[0].data.length
            });

            this.scale.setScaleSize();
            this.updateScaleRange(data.datasets);
            this.scale.buildYLabels();
        },
        updateScaleRange: function (datasets) {
            var valuesArray = [];
            helpers.each(datasets, function (dataset) {
                if (dataset.data) {
                    valuesArray = valuesArray.concat(dataset.data);
                } else {
                    helpers.each(dataset.points, function (point) {
                        valuesArray.push(point.value);
                    });
                }
            });

            var scaleSizes = (this.options.scaleOverride) ?
                {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
                } :
                helpers.calculateScaleRange(
                    valuesArray,
                    helpers.min([this.scale.chart.width, this.scale.chart.height]) / 2,
                    this.options.scaleFontSize,
                    this.options.scaleBeginAtZero,
                    this.options.scaleIntegersOnly
                );

            helpers.extend(
                this.scale,
                scaleSizes
            );

        },
        addData: function (values) {
            var label = values.label;
            var valuesArray = values.values;

            if (!Array.isArray(valuesArray)) {
                throw new Error("values must be an array");
            }

            this.scale.valuesCount++;

            helpers.each(valuesArray, function (value, datasetIndex) {
                var pointPosition = getPointPosition(this.scale, this.scale.valuesCount, value);
                this.datasets[datasetIndex].points.push(createPoint(this,
                    pointPosition.x,
                    pointPosition.y,
                    value,
                    label,
                    this.datasets[datasetIndex].label,
                    this.datasets[datasetIndex].pointStrokeColor,
                    this.datasets[datasetIndex].pointColor
                ));
            }, this);

            this.scale.labels.push(label);

            this.reflow();
            this.update();
        },
        removeData: function () {
            this.scale.valuesCount--;
            this.scale.labels.shift();
            helpers.each(this.datasets, function (dataset) {
                dataset.points.shift();
            }, this);
            this.reflow();
            this.update();
        },
        update: function () {
            this.eachPoints(function (point) {
                point.save();
            });
            this.reflow();
            this.render();
        },
        reflow: function () {
            helpers.extend(this.scale, {
                width: this.scale.chart.width,
                height: this.scale.chart.height,
                size: helpers.min([this.scale.chart.width, this.scale.chart.height]),
                xCenter: this.scale.chart.width / 2,
                yCenter: this.scale.chart.height / 2
            });
            this.updateScaleRange(this.datasets);
            this.scale.setScaleSize();
            this.scale.buildYLabels();
        },
        draw: function (ease) {
            var easeDecimal = ease || 1,
                ctx = this.scale.chart.ctx;
            this.clear();
            this.scale.draw();

            helpers.each(this.datasets, function (dataset) {

                //Transition each point first so that the line and point drawing isn't out of sync
                helpers.each(dataset.points, function (point, index) {
                    if (point.hasValue()) {
                        point.transition(getPointPosition(this.scale, index, point.value), easeDecimal);
                    }
                }, this);

                //Draw the line between all the points
                ctx.lineWidth = this.options.datasetStrokeWidth;
                ctx.strokeStyle = dataset.strokeColor;
                ctx.beginPath();
                helpers.each(dataset.points, function (point, index) {
                    if (index === 0) {
                        ctx.moveTo(point.x, point.y);
                    } else {
                        ctx.lineTo(point.x, point.y);
                    }
                }, this);
                ctx.closePath();
                ctx.stroke();

                ctx.fillStyle = dataset.fillColor;
                ctx.fill();

                //Now draw the points over the line
                //A little inefficient double looping, but better than the line
                //lagging behind the point positions
                helpers.each(dataset.points, function (point) {
                    if (point.hasValue()) {
                        point.draw();
                    }
                });

            }, this);

        }

    });





}).call(this);
