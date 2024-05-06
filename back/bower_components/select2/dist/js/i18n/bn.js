/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function ($, undefined) {
    'use strict';

    if ($.fn.select2 && $.fn.select2.amd) {
        var e = $.fn.select2.amd;

        e.define('select2/i18n/bn', [], function () {
            return {
                errorLoading: function () {
                    return 'ফলাফলগুলি লোড করা যায়নি।';
                },
                inputTooLong: function (e) {
                    var t = e.input.length - e.maximum,
                        n = 'অনুগ্রহ করে ' + t + ' টি অক্ষর মুছে দিন।';
                    return t !== 1 ? (n = 'অনুগ্রহ করে ' + t + ' টি অক্ষর মুছে দিন।') : n;
                },
                inputTooShort: function (e) {
                    var t = e.minimum - e.input.length,
                        n = t + ' টি অক্ষর অথবা অধিক অক্ষর লিখুন।';
                    return n;
                },
                loadingMore: function () {
                    return 'আরো ফলাফল লোড হচ্ছে ...';
                },
                maximumSelected: function (e) {
                    var t = e.maximum + ' টি আইটেম নির্বাচন করতে পারবেন।';
                    return e.maximum !== 1 ? (t = e.maximum + ' টি আইটেম নির্বাচন করতে পারবেন।') : t;
                },
                noResults: function () {
                    return 'কোন ফলাফল পাওয়া যায়নি।';
                },
                searching: function () {
                    return 'অনুসন্ধান করা হচ্ছে ...';
                }
            };
        });
    }
}(jQuery));
