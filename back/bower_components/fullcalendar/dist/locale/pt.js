!function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("moment"), require("fullcalendar")))
    : "function" == typeof define && define.amd
    ? define(["moment", "fullcalendar"], t)
    : "object" == typeof exports
    ? t(require("moment"), require("fullcalendar"))
    : t(e.moment, e.FullCalendar);
})("undefined" != typeof self ? self : this, function (e, t) {
  function o(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  var n = {};
  return (
    (o.m = e),
    (o.c = n),
    (o.d = function (e, t, r) {
      o.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 185))
  )(0, function (t) {
    return t.defineLocale("pt", {
      months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
        "_"
      ),
      monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
      weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
        "_"
      ),
      weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
      weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY HH:mm",
        LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
      },
      calendar: {
        sameDay: "[Hoje às] LT",
        nextDay: "[Amanhã às] LT",
        nextWeek: "dddd [às] LT",
        lastDay: "[Ontem às] LT",
        lastWeek: function () {
          return 0 === this.day() || 6 === this.day()
            ? "[Último] dddd [às] LT"
            : "[Última] dddd [às] LT";
        },
        sameElse: "L",
      },
      relativeTime: {
        future: "em %s",
        past: "há %s",
        s: "segundos",
        ss: "%d segundos",
        m: "um minuto",
        mm: "%d minutos",
        h: "uma hora",
        hh: "%d horas",
        d: "um dia",
        dd: "%d dias",
        M: "um mês",
        MM: "%d meses",
        y: "um ano",
        yy: "%d anos",
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%dº",
      week: { dow: 1, doy: 4 },
    });
  })(1, function (e) {
    e.locale("pt", {
      buttonText: {
        month: "Mês",
        week: "Semana",
        day: "Dia",
        list: "Agenda",
      },
      allDayText: "Todo o dia",
      eventLimitText: "mais",
      noEventsMessage: "Não há eventos para mostrar",
    });
  });
});
