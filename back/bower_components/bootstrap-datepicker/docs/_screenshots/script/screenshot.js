/* jshint phantom:true, devel:true */
/* Usage: phantomjs screenshot.js in.html out.png */

const sys = require('system'),
    page = new WebPage();

page.viewportSize = {
    width: 800,
    height: 600
};

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.onError = function(msg, trace) {
    console.log(msg);
    console.log('Trace:');
    trace.forEach(function(t) {
        console.log(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function ' + t.function +')' : ''));
    });
};

page.onResourceError = function(resourceError) {
    console.log('Unable to load resource (URL:' + resourceError.url + '):', resourceError.errorString);
};

page.open(sys.args[1], function(status) {
    if (status !== 'success') {
        console.log('Bad status: %s', status);
        phantom.exit(1);
    }
    setTimeout(function() {
        const box = page.evaluate(() => {
            const lefts = [],
                rights = [],
                tops = [],
                bottoms = [],
                padding = 10, // px
                selection, show;

            if (window.setup) window.setup();

            show = $('body').data('show');
            show = show ? $(show) : $('*');

            show.filter(function() {
                return 'datepicker' in $(this).data();
            }).datepicker('show');

            selection = $($('body').data('capture'));

            tops = Array.from(selection, function(el) {
                return $(el).offset().top;
            });

            lefts = Array.from(selection, function(el) {
                return $(el).offset().left;
            });

            bottoms = Array.from(selection, function(el) {
                return $(el).offset().top + $(el).outerHeight();
            });

            rights = Array.from(selection, function(el) {
                return $(el).offset().left + $(el).outerWidth();
            });

            const b = {
                top: Math.min(...tops),
                left: Math.min(...lefts)
            };

            b.width = Math.max(...rights) - b.left;
            b.height = Math.max(...bottoms) - b.top;

            return {
                top: Math.max(b.top - padding, 0),
                left: Math.max(b.left - padding, 0),
                width: b.width + 2 * padding,
                height: b.height + 2 * padding
            };
        });

        if (box) {
            page.clipRect = box;
            page.render(sys.args[2]);
            phantom.exit();
        } else {
            console.log('Unable to get the bounding box');
            phantom.exit(1);
        }
    }, 1);
});
