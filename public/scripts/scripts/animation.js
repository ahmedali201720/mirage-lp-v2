
$(document).ready(function () {

    const servicesSection = $("#servicesSection");

    if (servicesSection.length) {
        var servicesSectionTop = $(servicesSection).offset().top;
    }

    $(window).scroll(function () {

        if (window.pageYOffset > servicesSectionTop - $(window).height()) {
            $(".header", servicesSection).addClass('bottomUpAnimation');
            $(".service-item", servicesSection).addClass('bottomUpAnimation');
            $(".section-link a", servicesSection).addClass('bottomUpAnimation');
        }

    });

})