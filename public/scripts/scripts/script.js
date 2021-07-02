$(document).ready(function () {

    // owl carousel scripts

    $(".owl-carousel").owlCarousel({

        loop: true,
        margin: 60,
        mouseDrag: true,
        touchDrag: true,
        slideTransition: 'linear',
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        rtl: true,
        responsive: {

            280: {
                items: 1
            }

        }

    });

});