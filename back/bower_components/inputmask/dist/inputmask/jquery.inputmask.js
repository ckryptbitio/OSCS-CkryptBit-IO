(function($, Inputmask) {
  'use strict';

  $.fn.inputmask = function(fn, options) {
    const input = this[0];

    if (typeof options === 'undefined') {
      options = {};
    }

    if (typeof fn === 'string') {
      switch (fn) {
        case 'unmaskedvalue':
          return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();

        case 'remove':
          return this.each(function() {
            if (this.inputmask) {
              this.inputmask.remove();
            }
          });

        case 'getemptymask':
          return input && input.inputmask ? input.inputmask.getemptymask() : '';

        case 'hasMaskedValue':
          return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();

        case 'isComplete':
          return !input || !input.inputmask || input.inputmask.isComplete();

        case 'getmetadata':
          return input && input.inputmask ? input.inputmask.getmetadata() : undefined;

        case 'setvalue':
          $(input).val(options);
          if (input && typeof input.inputmask === 'undefined') {
            $(input).triggerHandler('setvalue');
          }
          break;

        case 'option':
          if (typeof options === 'string') {
            return this.each(function() {
              if (typeof this.inputmask !== 'undefined') {
                this.inputmask.option(options);
              }
            });
          }
          if (input && typeof input.inputmask !== 'undefined') {
            input.inputmask.option(options);
          }
          break;

        default:
          options.alias = fn;
          const nptmask = new Inputmask(options);
          return this.each(function() {
            nptmask.mask(this);
          });
      }
    } else {
      if (typeof fn === 'object') {
        const nptmask = new Inputmask(fn);
        if (typeof fn.mask === 'undefined' && typeof fn.alias === 'undefined') {
          return this.each(function() {
            if (typeof this.inputmask !== 'undefined') {
              return this.inputmask.option(fn);
            }
            nptmask.mask(this);
          });
        }
        return this.each(function() {
          nptmask.mask(this);
        });
      }
      if (typeof fn === 'undefined') {
        return this.each(function() {
          const nptmask = new Inputmask(options);
          nptmask.mask(this);
        });
      }
    }

    return $.fn.inputmask;
  };
})(jQuery, window.Inputmask);
