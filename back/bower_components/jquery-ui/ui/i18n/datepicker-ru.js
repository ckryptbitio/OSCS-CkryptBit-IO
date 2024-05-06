/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */

(function( $ ) {
  'use strict';

  // If AMD is defined, use it; otherwise, assume a browser environment
  if ( typeof define === 'function' && define.amd ) {
    define([ 'jquery-ui/datepicker' ], factory);
  } else {
    factory($.datepicker);
  }

  // The factory function for creating the regional settings
  function factory(datepicker) {
    const regionalOptions = {
      closeText: 'Закрыть',
      prevText: '&#x3C;Пред',
      nextText: 'След&#x3E;',
      currentText: 'Сегодня',
      monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
      ],
      monthNamesShort: [
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек'
      ],
      dayNames: [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота'
      ],
      dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      weekHeader: 'Нед',
      dateFormat: 'dd.mm.yy',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ''
    };

    // Merge the regional options with the default settings
    const mergedOptions = Object.assign({}, datepicker.regional['']);
    Object.assign(mergedOptions, regionalOptions);

    // Set the merged options as the default for the 'ru' region
    datepicker.setDefaults(datepicker.regional['ru'] = mergedOptions);

    // Return the regional options for possible use elsewhere
    return datepicker.regional['ru'];
  }
})(jQuery);
