define(function () {
  // Estonian
  return {
    inputTooLong: function (args) {
      const overChars = args.input.length - args.maximum;
      const message = `Sisesta ${overChars} täht${overChars !== 1 ? 'e' : ''} vähem`;
      return message;
    },
    inputTooShort: function (args) {
      const remainingChars = args.minimum - args.input.length;
      const message = `Sisesta ${remainingChars} täht${remainingChars !== 1 ? 'e' : ''} rohkem`;
      return message;
    },
    loadingMore: function () {
      return 'Laen tulemusi…';
    },
    maximumSelected: function (args) {
      const message = `Saad vaid ${args.maximum} tulemus${args.maximum !== 1 ? 't' : ''} valida`;
      return message;
    },
    noResults: function () {
      return 'Tulemused puuduvad';
    },
    searching: function () {
      return 'Otsin…';
    },
    removeAllItems: function () {
      return "Eemalda kõik esemed";
    }
  };
});
