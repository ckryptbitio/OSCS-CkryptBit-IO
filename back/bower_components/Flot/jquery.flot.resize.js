(function () {
    // Debounce function from lodash
    const _debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    };

    const options = { }; // no options

    function init(plot) {
        const placeholder = plot.getPlaceholder();

        // Warn if the placeholder has a fixed size
        if (placeholder.css('height') !== 'auto' || placeholder.css('width') !== 'auto') {
            console.warn('The placeholder for the plot has a fixed size. The resize plugin may not work correctly.');
        }

        function onResize() {
            // somebody might have hidden us and we can't plot
            // when we don't have the dimensions
            if (placeholder.width() === 0 || placeholder.height() === 0) {
                return;
            }

            plot.resize();
            plot.setupGrid();
            plot.draw();
        }

        function bindEvents(plot, eventHolder) {
            const debouncedOnResize = _debounce(onResize, 100);
