(function ($) {
    const options = Object.assign({}, {
        series: {
            points: {
                errorbars: null,
                xerr: { err: 'x', show: null, asymmetric: null, upperCap: null, lowerCap: null, color: null, radius: null },
                yerr: { err: 'y', show: null, asymmetric: null, upperCap: null, lowerCap: null, color: null, radius: null }
            }
        }
    });

    function processRawData(plot, series, data, datapoints) {
        if (!series.points.errorbars) return;

        const format = [
            { x: true, number: true, required: true },
            { y: true, number: true, required: true }
        ];

        const errors = series.points.errorbars;
        if (errors === 'x' || errors === 'xy') {
            if (series.points.xerr.asymmetric) {
                format.push({ x: true, number: true, required: true });
                format.push({ x: true, number: true, required: true });
            } else {
                format.push({ x: true, number: true, required: true });
            }
        }
        if (errors === 'y' || errors === 'xy') {
            if (series.points.yerr.asymmetric) {
                format.push({ y: true, number: true, required: true });
                format.push({ y: true, number: true, required: true });
            } else {
                format.push({ y: true, number: true, required: true });
            }
        }
        datapoints.format = format;
    }

    function parseErrors(series, i) {
        const points = series.datapoints.points;
        let exl = null,
            exu = null,
            eyl = null,
            eyu = null;
        const xerr = series.points.xerr,
            yerr = series.points.yerr;

        const eb = series.points.errorbars;
        if (eb === 'x' || eb === 'xy') {
            if (xerr.asymmetric) {
                exl = points[i + 2];
                exu = points[i + 3];
                if (eb === 'xy') {
                    if (yerr.asymmetric) {
                        eyl = points[i + 4];
                        eyu = points[i + 5];
                    } else {
                        eyl = points[i + 4];
                    }
                }
            } else {
                exl = points[i + 2];
                if (eb === 'xy') {
                    if (yerr.asymmetric) {
                        eyl = points[i + 3];
                        eyu = points[i + 4];
                    } else {
                        eyl = points[i + 3];
                    }
                }
            }
        } else if (eb === 'y') {
            if (yerr.asymmetric) {
                eyl = points[i + 2];
                eyu = points[i + 3];
            } else {
                eyl = points[i + 2];
            }
        }

        const errRanges = [exl, exu, eyl, eyu];
        if (!xerr.show) {
            errRanges.fill(null, 0, 2);
        }
        if (!yerr.show) {
            errRanges.fill(null, 2, 4);
        }
        return errRanges;
    }

    function drawSeriesErrors(plot, ctx, s) {
        const points = s.datapoints.points,
            ps = s.datapoints.pointsize,
            ax = [s.xaxis, s.yaxis],
            radius = s.points.radius,
            err = [s.points.xerr, s.points.yerr];

        const invertX = ax[0].p2c(ax[0].max) < ax[0].p2c(ax[0].min);
        const invertY = ax[1].p2c(ax[1].min) < ax[1].p2c(ax[1].max);

        for (let i = 0; i < s.datapoints.points.length; i += ps) {
            const errRanges = parseErrors(s, i);

            for (let e = 0; e < err.length; e++) {
                const minmax = [ax[e].min, ax[e].max];

                if (errRanges[e * err.length]) {
                    const x = points[i],
                        y = points[i + 1];

                    const upper = [x, y][e] + errRanges[e * err.length + 1],
                        lower = [x, y][e] - errRanges[e * err.length];

                    if (
                        (err[e].err === 'x' && (y > ax[1].max || y < ax[1].min || upper < ax[0].min || lower > ax[0].max)) ||
                        (err[e].err === 'y' && (x > ax[0].max || x < ax[0].min || upper < ax[1].min || lower > ax[1].max))
                    ) {
                        continue;
                    }

                    const drawUpper = upper <= minmax[1];
                    const drawLower = lower >= minmax[0];

                    if (invertX) {
                        [lower, upper] = [upper, lower];
                        [drawLower, drawUpper] = [drawUpper, drawLower];
                        [minmax[0], minmax[1]] = [minmax[1], minmax[0]];
                    }

                    const x_ = ax[0].p2c(x),
                        y_ = ax[1].p2c(y),
                        upper_ = ax[e].p2c(upper),
                        lower_ = ax[e].p2c(lower),
                        minmax_ = [ax[e].p2c(minmax[0]), ax[e].p2c(minmax[1])];

                    const lw = err[e].lineWidth || s.points.lineWidth;
                    const sw = s.points.shadowSize != null ? s.points.shadowSize : s.shadowSize;

                    if (lw > 0 && sw > 0) {
                        const w = sw / 2;
                        ctx.lineWidth = w;
                        ctx.strokeStyle = "rgba(0,0,0,0.1)";
                        drawError(
                            ctx,
                            err[e],
                            x_,
                            y_,
                            upper_,
                            lower_,
                            drawUpper,
                            drawLower,
                            radius,
                            w + w / 2,
                            minmax_
                        );

                        ctx.strokeStyle = "rgba(0,0,0,0.2)";
                        drawError(
                            ctx,
                            err[e],
                            x_,
                            y_,
                            upper_,
                            lower_,
                            drawUpper,
                            drawLower,
                            radius,
                            w / 2,
                            minmax_
                        );
                    }

                    ctx.strokeStyle = err[e].color || s.color;
                    ctx.lineWidth = lw;
                    drawError(ctx, err[e], x_, y_, upper_, lower_, drawUpper, drawLower, radius, 0, minmax_);
                }
            }
        }
    }

    function drawError(ctx, err, x, y, upper, lower, drawUpper, drawLower, radius, offset, minmax) {
        const shadowOffset = offset;
        upper += shadowOffset;
        lower += shadowOffset;

        const drawPath = (pts) => {
            ctx.beginPath();
            ctx.moveTo(pts[0][0], pts[0][1]);
            for (let p = 1; p < pts.length; p++) {
                ctx.lineTo(pts[p][0], pts[p][1]);
            }
            ctx.stroke();
        };

        if (err.err === 'x') {
            if (drawUpper && upper > x + radius) {
                drawPath([[upper, y - radius], [upper, y + radius]]);
            }
            if (drawLower && lower < x - radius) {
                drawPath([[x - radius, lower], [x + radius, lower]]);
            }
        } else {
            if (drawUpper && upper < y - radius) {
                drawPath([[x - radius, upper], [x + radius, upper]]);
            }
            if (drawLower && lower > y + radius) {
                drawPath([[x - radius, lower], [x + radius, lower]]);
            }
        }

        const internalRadius = err.radius != null ? err.radius : radius;

        if (drawUpper && err.upperCap === '-') {
            if (err.err === 'x') {
                drawPath([[upper, y - internalRadius], [upper, y + internalRadius]]);
            } else {
                drawPath([[x - internalRadius, upper], [x + internalRadius, upper]]);
            }
        } else if (drawUpper && typeof err.upperCap === 'function') {
            if (err.err === 'x') {
                err.upperCap(ctx, upper, y, internalRadius);
            } else {
                err.upperCap(ctx, x, upper, internalRadius);
            }
        }

        if (drawLower && err.lowerCap === '-') {
            if (err.err === 'x') {
                drawPath([[lower, y - internalRadius], [lower, y + internalRadius]]);
            } else {
                drawPath([[x - internalRadius, lower], [x + internalRadius, lower]]);
            }
        } else if (drawLower && typeof err.lowerCap === 'function') {
            if (err.err === 'x') {
                err.lowerCap(ctx, lower, y, internalRadius);
            } else {
                err.lowerCap(ctx, x, lower, internalRadius);
            }
        }
    }

    function draw(plot, ctx) {
        const plotOffset = plot.getPlotOffset();

        ctx.save();
        ctx.translate(plotOffset.left, plotOffset.top);
        plot.getData().forEach((s) => {
            if (s.points.errorbars && (s.points.xerr.show || s.points.yerr.show)) {
                drawSeriesErrors(plot, ctx, s);
            }
        });
        ctx.restore();
    }

    function init(plot) {
        plot.hooks.processRawData.push(processRawData);
        plot.hooks.draw.push(draw);
    }

    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'errorbars',
        version: '1.0'
    });
})(jQuery);
