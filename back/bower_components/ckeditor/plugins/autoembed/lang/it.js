// Use const instead of var for constant variables
const langConfig = {
  "autoembed": {
    "it": {
      "embeddingInProgress": "Provando ad incorporare l'URL incollato...",
      "embeddingFailed": "Impossibile incorporare automaticamente questo URL."
    }
  }
};

// Use CKEDITOR.plugins.addTranslations instead of CKEDITOR.plugins.setLang
CKEDITOR.plugins.addTranslations(langConfig);
