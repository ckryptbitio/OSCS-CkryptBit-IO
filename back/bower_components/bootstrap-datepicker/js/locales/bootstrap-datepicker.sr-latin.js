/**
 * Serbian latin translation for bootstrap-datepicker
 * Bojan Milosavlević <milboj@gmail.com>
 */
(function($) {
  'use strict';

  $.fn.datepicker.dates['sr-latin'] = {
    days: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"],
    daysShort: ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"],
    daysMin: ["N", "Po", "Ut", " Sr", "Če", "Pe", "Su"],
    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
    today: "Danas",
    weekStart: 1,
    format: "dd.mm.yyyy",
    clear: "Obriši",
    close: "Zatvori",
    dateFormat: "dd.mm.yyyy",
    firstDay: 1,
  };
}(jQuery));
