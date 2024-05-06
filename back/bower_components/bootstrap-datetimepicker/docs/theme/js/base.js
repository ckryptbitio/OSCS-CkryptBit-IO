(function () {
    // Prettyify
    function prettyPrint() {
        try {
            PR.prettyPrint();
        } catch (e) {
            console.error('Error executing prettyPrint():', e);
        }
    }

    $(document).ready(function () {
        prettyPrint();
    });

    // Scrollspy
    const navHeight = $('.navbar').outerHeight(true) + 10;

    $('body').scrollspy({
        target: '.bs-sidebar',
        offset: navHeight
    });

    // Prevent disabled links from causing a page reload
    $("li.disabled a").click(function (event) {
        preventDefault(event);
    });

    // Adjust the scroll height of anchors to compensate for the fixed navbar
    let disableShift = false;
    function shiftWindow() {
        if (disableShift) {
            disableShift = false;
        } else {
            const scrolledToBottomOfPage = (
                (window.innerHeight + window.scrollY) >= document.body.offsetHeight
            );
            if (!scrolledToBottomOfPage) {
                scrollBy(0, -60);
            }
        }
    }
    if (location.hash) {
        shiftWindow();
    }
    $(window).on("hashchange", shiftWindow);

    // Deal with clicks on nav links that do not change the current anchor link.
    $("ul.nav a").click(function () {
        const href = this.href;
        const suffix = location.hash;
        const matchesCurrentHash = (href.indexOf(suffix, href.length - suffix.length) !== -1);
        if (location.hash && matchesCurrentHash) {
            // Force a single 'hashchange' event to occur after the click event
            disableShift = true;
            location.hash = '';
        }
    });

    $(document).on('DOMNodeInserted', function (e) {
        if (e.target.id === 'carbonads') {
            $('.bs-sidebar').affix({
                offset: {
                    top: $('#carbonads').height() + 10
                }
            });
        }
    });

    // Utility function to prevent default behavior of an event
    function preventDefault(event) {
        event.preventDefault();
    }
})();
