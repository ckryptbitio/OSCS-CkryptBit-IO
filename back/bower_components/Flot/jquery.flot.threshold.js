/**
 * Flot plugin for thresholding data.
 *
 * Copyright (c) 2007-2014 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 *
 * The plugin supports these options:
 *
 *  series: {
 *      threshold: {
 *          below: number
 *          color: colorspec
 *      }
 *  }
 *
 * It can also be applied to a single series, like this:
 *
 *  $.plot( $("#placeholder"), [{
 *      data: [ ... ],
 *      threshold: { ... }
 *  }])
 *
 * An array can be passed for multiple thresholding, like this:
 *
 *  threshold: [{
 *      below: number1
 *      color: color1
 *  },{
 *      below: number2
 *      color: color2
 *  }]
 *
 * These multiple threshold objects can be passed in any order since they are
 * sorted by the processing function.
 *
 * The data points below "below" are drawn with the specified color. This makes
 * it easy to mark points below 0, e.g. for budget data.
 *
 * Internally, the plugin works by splitting the data into two series, above and
 * below the threshold. The extra series below the threshold will have its label
 * cleared and the special "originSeries" attribute set to the original series.
 * You may need to check for this in hover events.
 */

(function ($) {
    /**
     * The plugin options.
     *
     * @type {Object}
     */
    var options = {
        series: { threshold: null } // or { below: number, color: color spec}
    };

    /**
     * Initializes the plugin.
     *
     * @param {Object} plot The Flot plot object.
     */
    function init(plot) {
        /**
         * Thresholds the data points in a series.
         *
         * @param {Object} s The series object.
         * @param {Object} datapoints The series datapoints object.
         * @param {number} below The threshold value.
         * @param {string} color The threshold color.
         */
        function thresholdData(s, datapoints, below, color) {
            // Check if the datapoints argument is not null or undefined
            if (!datapoints) {
                return;
            }

            // Check if the points property exists in the datapoints argument
            if (!datapoints.points) {
                return;
            }

            // Check if the pointsize property exists in the datapoints argument
            if (!datapoints.pointsize) {
                return;
            }

            var ps = datapoints.pointsize,
                i, x, y, p, prevp,
                thresholded = $.extend({}, s), // note: shallow copy
                origpoints = datapoints.points,
                threspoints = [],
                newpoints = [],
                m;

            // Check if the thresholded.datapoints.points array has enough elements before accessing them
            thresholded.datapoints = { points: [], pointsize: ps, format: datapoints.format };
            thresholded.label = null;
            thresholded.color = color;
            thresholded.threshold = null;
            thresholded.originSeries = s;
            thresholded.data = [];

            for (i = 0; i < origpoints.length; i += ps) {
                x = origpoints[i];
                y = origpoints[i + 1];

                // Check if the x and y variables are numbers
                if (typeof x !== 'number' || typeof y !== 'number') {
                    return;
                }

                prevp = p;
                if (y < below) {
                    p = threspoints;
                } else {
                    p = newpoints;
                }

                // Check if the addCrossingPoints variable is a boolean
                if (s.lines.show && prevp !== p && x !== null && i > 0 && origpoints[i - ps] !== null) {
                    var interx = x + (below - y) * (x - origpoints[i - ps]) / (y - origpoints[i - ps + 1]);

                    // Check if the interx variable is a number
                    if (typeof interx !== 'number') {
                        return;
                    }

                    prevp.push(interx);
                    prevp.push(below);
                    for (m = 2; m < ps; ++m) {
                        prevp.push(origpoints[i + m]);
                    }

                    p.push(null); // start new segment
                    p.push(null);
                    for (m = 2; m < ps; ++m) {
                        p.push(origpoints[i + m]);
                    }
                    p.push(interx);
                    p.push(below);
                    for (m = 2; m < ps; ++m) {
                        p.push(origpoints[i + m]);
                    }
                }

                p.push(x);
                p.push(y);
                for (m = 2; m < ps; ++m) {
                    p.push(origpoints[i + m]);
                }
            }

            datapoints.points = newpoints;
            thresholded.datapoints.points = threspoints;

            // Check if the thresholded.datapoints.points array has enough elements before accessing them
            if (thresholded.datapoints.points.length > 0) {
                var origIndex = $.inArray(s, plot.getData());

                // Insert newly-generated series right after original one (to prevent it from becoming top-most)
                plot.getData().splice(origIndex + 1, 0, thresholded);
            }

            // FIXME: there are probably some edge cases left in bars
        }

        /**
         * Processes the thresholds in a series.
         *
         * @param {Object} s The series object.
         * @param {Object} datapoints The series datapoints object.
         */
        function processThresholds(s, datapoints) {
            // Check if the threshold property exists in the series object
            if (!s.threshold) {
                return;
            }

            // Check if the threshold property is an object or an array of objects
            if (s.threshold instanceof Array) {
                s.threshold.sort(function (a, b) {
                    return a.below - b.below;
                });

                // Check if the s.threshold array has enough elements before accessing them
                $(s.threshold).each(function (i, th) {
                    // Check if the below property exists in the threshold object
                    if (th.hasOwnProperty('below')) {
                        // Check if the below property is a number
                        if (typeof th.below !== 'number') {
                            return;
                        }

                        // Check if the color property exists in the threshold object
                        if (th.hasOwnProperty('color')) {
                            // Check if the color property is a string
                            if (typeof th.color === 'string') {
                                thresholdData(s, datapoints, th.below, th.color);
                            }
                        }
                    }
                });
            } else {
                // Check if the below property exists in the threshold object
                if (s.threshold
