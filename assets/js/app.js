$(document).ready(function () {
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });
    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    $(window).on('load', function () {
        aos_init();
    });

});