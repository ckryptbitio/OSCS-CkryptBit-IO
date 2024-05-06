// Define the language object for the 'bidi' plugin in Mongolian
const bidiLangMn = {
  ltr: 'Зүүнээс баруун тийш бичлэг',
  rtl: 'Баруунаас зүүн тийш бичлэг'
};

// Register the language object with CKEditor
CKEDITOR.plugins.setLang('bidi', 'mn', bidiLangMn);
