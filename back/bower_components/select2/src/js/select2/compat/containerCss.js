/**
 * ContainerCSS class that renders the container with the given CSS options
 * @param {Object} options - The options for the ContainerCSS
 */
define(['jquery', './utils'], function ($, CompatUtils) {
  function ContainerCSS(options) {
    this.options = options;
  }

  ContainerCSS.prototype.render = function (decorated) {
    const $container = decorated.call(this);

    const containerCssClass = this.getContainerCssClass();
    const containerCssAdapter = this.getContainerCssAdapter();
    const containerCss = this.getContainerCss();

    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

    $container.css(containerCss);
    $container.addClass(containerCssClass);

    return $container;
  };

  ContainerCSS.prototype.getContainerCssClass = function () {
    const containerCssClass = this.options.get('containerCssClass') || '';

    if ($.isFunction(containerCssClass)) {
      return containerCssClass(this.$element);
    }

    return containerCssClass;
  };

  ContainerCSS.prototype.getContainerCssAdapter = function () {
    const containerCssAdapter = this.options.get('adaptContainerCssClass') || (clazz => null);

    if (typeof containerCssAdapter !== 'function') {
      throw new Error('The `adaptContainerCssClass` option must be a function');
    }

    return containerCssAdapter;
  };

  ContainerCSS.prototype.getContainerCss = function () {
    const containerCss = this.options.get('containerCss') || {};

    if ($.isFunction(containerCss)) {
      return containerCss(this.$element);
    }

    return containerCss;
  };

  return ContainerCSS;
});
