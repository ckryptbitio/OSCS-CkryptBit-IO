/*!
 * jQuery UI Effects Shake 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/shake-effect/
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', './effect'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    const _ref = (direction) => (direction === 'up' || direction === 'down') ? 'top' : 'left';
    const _positiveMotion = (direction) => (direction === 'up' || direction === 'left');
    const _animationProperties = (distance, ref, positiveMotion) => ({
        [ref]: positiveMotion ? `-=${distance}` : `+=${distance}`,
    });

    const shakeEffect = (options, done) => {
        const el = $(this);
        const props = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'];
        const mode = $.effects.setMode(el, options.mode || 'effect');
        const direction = options.direction || 'left';
        const distance = Math.abs(options.distance) || 20;
        const times = options.times || 3;
        const anims = times * 2 + 1;
        const speed = Math.round(options.duration / anims);
        const ref = _ref(direction);
        const positiveMotion = _positiveMotion(direction);
        const animation = _animationProperties(distance, ref, positiveMotion);
        const animation1 = _animationProperties(distance * 2, ref, positiveMotion);
        const animation2 = _animationProperties(distance * 2, ref, !positiveMotion);

        $.effects.save(el, props);
        el.show();
        $.effects.createWrapper(el);

        el.animate(animation, speed, options.easing);

        for (let i = 1; i < times; i++) {
            el.animate(animation1, speed, options.easing).animate(animation2, speed, options.easing);
        }

        el
            .animate(animation1, speed, options.easing)
            .animate(animation, speed / 2, options.easing)
            .queue(function () {
                if (mode === 'hide') {
                    el.hide();
                }
                $.effects.restore(el, props);
                $.effects.removeWrapper(el);
                done();
            });

        const queue = el.queue();
        const queuelen = queue.length;

        // inject all the animations we just queued to be first in line (after "inprogress")
        if (queuelen > 1) {
            queue.splice.apply(queue, [1, 0].concat(queue.splice(queuelen, anims + 1)));
        }
        el.dequeue();
    };

    $.effects.define('shake', {
        shake: shakeEffect,
    });
}));
