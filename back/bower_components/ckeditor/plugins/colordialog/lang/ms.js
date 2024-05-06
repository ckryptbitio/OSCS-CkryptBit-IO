// Rewritten and improved code for CKEditor color dialog language configuration

// Use const for constant variables
const colorDialogLang = {
  clear: "Bersih",
  highlight: "Highlight",
  options: "Pilihan Warna",
  selected: "Warna Terpilih",
  title: "Pilih Warna"
};

// Use CKEDITOR.plugins.addTranslations() to add translations for the 'colordialog' plugin
CKEDITOR.plugins.addTranslations("colordialog", colorDialogLang, "ms");
