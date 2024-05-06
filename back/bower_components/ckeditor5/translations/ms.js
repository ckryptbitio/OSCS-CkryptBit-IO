(function (d) {
  const l = d.ms = d.ms || {};
  l.dictionary = Object.assign(
    l.dictionary || {},
    {
      "Cannot upload file:": "Gagal memuat naik fail"
    }
  );
  l.getPluralForm = function (n) {
    return 0; // You might want to implement a proper pluralization logic here
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
