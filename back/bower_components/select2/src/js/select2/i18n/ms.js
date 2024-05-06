define(function () {
  // Malay
  const translations = {
    errorLoading: 'Keputusan tidak berjaya dimuatkan.',
    inputTooLong: function (args) {
      const overChars = args.input.length - args.maximum;
      return `Sila hapuskan ${overChars} aksara.`;
    },
    inputTooShort: function (args) {
      const remainingChars = args.minimum - args.input.length;
      return `Sila masukkan ${remainingChars} atau lebih aksara.`;
    },
    loadingMore: 'Sedang memuatkan keputusan…',
    maximumSelected: function (args) {
      return `Anda hanya boleh memilih ${args.maximum} pilihan.`;
    },
    noResults: 'Tiada padanan yang ditemui.',
    searching: 'Mencari…',
    removeAllItems: 'Keluarkan semua item',
  };

  // Helper function to format number with commas
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // Function to return translated string
  function t(key, args) {
    const translation = translations[key];

    if (typeof translation === 'function') {
      return translation(args);
    }

    return translation;
  }

  return {
    t,
    formatNumber,
  };
});
