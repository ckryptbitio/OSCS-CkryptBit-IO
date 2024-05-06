/**
 * Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// Use const for variable declarations that won't be reassigned
const pluginName = 'codesnippet';

// Use array literals instead of creating a new array with the Array constructor
const langEntries = [
  ['button', 'Vložte ukážku programového kódu'],
  ['codeContents', 'Obsah kódu'],
  ['emptySnippetError', 'Ukážka kódu nesmie byť prázdna.'],
  ['language', 'Jazyk'],
  ['title', 'Ukážka programového kódu'],
  ['pathName', 'ukážka programového kódu']
];

// Use a computed property name for the object key
const langSk = {
  [pluginName]: {
    ...langEntries.reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {})
  }
};

// Export the language object as the default export
export default langSk;
