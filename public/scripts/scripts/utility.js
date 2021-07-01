$(document).ready(function () {

    const fixedContactButton = $("#fixedContactButton");
    const contactIconsContainer = $("#contactIconsContainer");

    const mainHeaderMenuToggler = $("#mainHeaderMenuToggler");
    const topHeaderLinksContainer = $("#topHeaderLinksContainer");

    var fixedContactButtonOpened = false;
    var mainHeaderMenuTogglerOpened = false;

    fixedContactButton.click(function () {

        if (!fixedContactButtonOpened) {
            openFixedContactIcon($(this));
        }
        else {
            closeFixedContactIcon($(this));
        }

    });

    mainHeaderMenuToggler.click(function () {

        if (!mainHeaderMenuTogglerOpened) {
            openMainHeaderToggler($(this));
        }
        else {
            closeMainHeaderToggler($(this));
        }

    });

    $(window).scroll(function () {
        if (fixedContactButtonOpened) {
            closeFixedContactIcon($(this));
        }
        if (mainHeaderMenuTogglerOpened) {
            closeMainHeaderToggler($(this));
        }
    })

    function openFixedContactIcon(button) {
        $(".fa-ellipsis-v", button).hide();
        $(".fa-times", button).show();
        contactIconsContainer.show(500);
        fixedContactButtonOpened = true;

    }

    function closeFixedContactIcon(button) {
        $(".fa-times", button).hide();
        $(".fa-ellipsis-v", button).show();
        contactIconsContainer.hide(500);
        fixedContactButtonOpened = false;
    }

    function openMainHeaderToggler(button) {
        $(".fa-bars", button).hide();
        $(".fa-times", button).show();
        $(".fa-times", button).addClass('rotate-z-180');
        topHeaderLinksContainer.show(250);
        mainHeaderMenuTogglerOpened = true;

    }

    function closeMainHeaderToggler(button) {
        $(".fa-times", button).hide();
        $(".fa-bars", button).show();
        $(".fa-times", button).removeClass('rotate-z-180');
        topHeaderLinksContainer.hide(250);
        mainHeaderMenuTogglerOpened = false;
    }

})