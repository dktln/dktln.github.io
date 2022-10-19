(function ($) {
    "use strict";
    if ($('.typed-text-output').length == 1) {
        let typed = new Typed('.typed-text-output', {
            strings: $('.typed-text').text().split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
})(jQuery);

