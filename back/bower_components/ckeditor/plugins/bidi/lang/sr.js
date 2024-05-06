// Define the language object for the "bidi" plugin in Serbian language
const bidiLangSerbian = {
  ltr: "Smer teksta od leva ka desnom",
  rtl: "Smer teksta od desna ka levo"
};

// Register the language object for the "bidi" plugin in Serbian language
CKEDITOR.plugins.setLang("bidi", "sr", bidiLangSerbian);
