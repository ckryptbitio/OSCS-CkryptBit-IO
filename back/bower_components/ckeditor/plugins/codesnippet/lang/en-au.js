/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/

// Use const instead of var for constant variables
const pluginName = 'codesnippet';
const langCode = 'en-au';

CKEDITOR.plugins.setLang(pluginName, langCode, {
  button: 'Insert Code Snippet',
  codeContents: 'Code content',
  emptySnippetError: 'A code snippet cannot be empty.',
  language: 'Language',
  title: 'Code snippet',
  pathName: 'code snippet'
});
