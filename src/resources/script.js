/* global jQuery */

(function ($) {
    // Set up interval check to see when Neo field is done loading
    // (it adds style attribute to body)
    var checkCount = 0;
    var loadCheck = setInterval(function () {
        checkCount++;
        if ($('body')[0].hasAttribute('style') || (checkCount > 10)){
            clearInterval(loadCheck);
            $(".instructions a").attr("target", "_blank");
        }
    }, 1000);
})(jQuery);
