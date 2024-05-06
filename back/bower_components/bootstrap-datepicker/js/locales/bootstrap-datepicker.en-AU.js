;(function($) {
  // Australian English translation for bootstrap-datepicker
  // Steve Chapman <steven.p.chapman@gmail.com>
  // License: MIT

  // Use template literals for readability
  const AustralianEnglish = {
    days: [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`],
    daysShort: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
    daysMin: [`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`],
    months: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
    monthsShort: [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`],
    today: `Today`,
    monthsTitle: `Months`,
    clear: `Clear`,
    weekStart: 1,
    format: `d/mm/yyyy`
  };

  $.fn.datepicker.dates['en-AU'] = AustralianEnglish;
}(jQuery));
