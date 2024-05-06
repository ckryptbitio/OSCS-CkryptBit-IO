const beautify = require('js-beautify').html;

const entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};

const validateEntity = (entity) => {
  const validEntities = Object.keys(entityMap);
  return validEntities.includes(entity);
};

module.exports.register = function (Handlebars, options) {
  Handlebars.registerHelper('code', function (hboptions) {
    if (typeof hboptions.fn !== 'function') {
      throw new Error('hboptions.fn must be a function');
    }

    let codeStr = String(hboptions.fn(this)).trim();
    if (typeof codeStr !== 'string') {
      throw new Error('codeStr must be a string');
    }

    try {
      codeStr = beautify(codeStr, {
        "wrap_line_length": 80,
        "wrap_attributes": "auto",
        "indent_scripts": "normal"
      });
    } catch (error) {
      throw new Error(`Error beautifying code: ${error.message}`);
    }

    for (const [entity, replacement] of Object.entries(entityMap)) {
      if (!validateEntity(entity)) {
        throw new Error(`Invalid entity: ${entity}`);
      }

      codeStr = codeStr.replace(new RegExp(entity, 'g'), replacement);
    }

    return `<div class="example-code">${codeStr}</div>`;
  });
};
