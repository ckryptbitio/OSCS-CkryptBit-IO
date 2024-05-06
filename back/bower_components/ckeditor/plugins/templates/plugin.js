/**
 * Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * The templates plugin for CKEditor.
 *
 * @module templates
 * @requires dialog
 * @lang af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn
 * @icon templates,templates-rtl
 * @hidpi
 * @init
 */
function ckeditorTemplatesPlugin(editor) {
  'use strict';

  // Add the templates dialog.
  CKEDITOR.dialog.add('templates', CKEDITOR.getUrl(this.path + 'dialogs/templates.js'));

  // Add the templates command.
  addTemplatesCommand(editor);

  // Add the templates button.
  editor.ui.addButton('Templates', {
    label: editor.lang.templates.button,
    command: 'templates',
    toolbar: 'doctools,10'
  });

  // Add templates configuration.
  editor.config.templates_files = [CKEDITOR.getUrl('plugins/templates/templates/default.js')];
  editor.config.templates_replaceContent = true;

  // Add templates.
  var templates = {};
  CKEDITOR.addTemplates = function (name, definition) {
    templates[name] = definition;
  };

  // Get templates.
  CKEDITOR.getTemplates = function (name) {
    return templates[name];
  };

  // Load templates.
  CKEDITOR.loadTemplates = function (names, callback) {
    var urls = [];

    for (var i = 0, length = names.length; i < length; i++) {
      var name = names[i];

      if (!f[name]) {
        urls.push(name);
        f[name] = 1;
      }
    }

    if (urls.length) {
      CKEDITOR.scriptLoader.load(urls, function () {
        callback();
      }, {
        async: true,
        onError: function () {
          console.error('Error loading templates: ' + urls.join(', '));
          callback();
        }
      });
    } else {
      callback();
    }
  };

  var f = {};
}
