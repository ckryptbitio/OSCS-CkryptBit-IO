define([
  'jquery'
], function ($) {
  /**
   * InfiniteScroll class
   * @constructor
   * @param {Object} decorated - The decorated object
   * @param {jQuery} $element - The element to be decorated
   * @param {Object} options - The options for the decorator
   * @param {Object} dataAdapter - The data adapter for the decorator
   */
  function InfiniteScroll(decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function ($container) {
    var self = this;

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      requestAnimationFrame(function () {
        var isLoadMoreVisible = $.contains(
          document.documentElement,
          self.$loadingMore[0]
        );

        if (self.loading || !isLoadMoreVisible) {
          return;
        }

        var currentOffset = self.$results.offset().top +
          self.$results.outerHeight(false);
        var loadingMoreOffset = self.$loadingMore.offset().top +
          self.$loadingMore.outerHeight(false);

        if (currentOffset + 50 >= loadingMoreOffset) {
          self.loadMore();
        }
      });
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params)
      .fail(function () {
        // Handle errors here
      });
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = this.createLoadingMoreOption('loadingMore');

    return $option;
  };

  InfiniteScroll.prototype.createLoadingMoreOption = function (messageKey) {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get(messageKey);

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});
