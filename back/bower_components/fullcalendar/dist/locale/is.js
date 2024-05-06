!function (e, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r(require("moment"), require("fullcalendar")))
    : "function" == typeof define && define.amd
    ? define(["moment", "fullcalendar"], r)
    : "object" == typeof exports
    ? r(require("moment"), require("fullcalendar"))
    : r(e.moment, e.FullCalendar);
})("undefined" != typeof self ? self : this, function (e, r) {
  function n(e) {
    if (t[e]) return t[e].exports;
    var r = (t[e] = { i: e, l: !1, exports: {} });
    return e[e].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  var t = {};
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (e, r, n) {
      n.a
        ? n.a(e, r)
        : Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
    }),
    (n.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(r, "a", r), r;
    }),
    (n.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (n.p = ""),
    n((n.s = 149))
  );
});
