// Define the language object for Bidi plugin in Danish
const bidiLangDa = {
  ltr: 'Tekstretning fra venstre til højre',
  rtl: 'Tekstretning fra højre til venstre'
};

// Assign the language object to the CKEditor's Bidi plugin
CKEDITOR.plugins.setLang('bidi', 'da', bidiLangDa);
