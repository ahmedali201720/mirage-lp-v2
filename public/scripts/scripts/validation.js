$(document).ready(function () {

    var mainFormValidation = {
        'name': false,
        'mobile': false,
        'email': false,
    }

    var contactFormValidation = {
        'name': false,
        'mobile': false,
        'email': false,
    }

    $("#mainFullName , #fullName").keyup(function (e) {

        var result = validateText($(this).val(), 4);
        if (result) {
            $(this).removeClass('border-danger');
            $(this).parent().find('.validation-failed').hide(400);
            if ($("#mainSectionForm").find($(this)).length > 0) {
                mainFormValidation['name'] = true;
            }
            else
                contactFormValidation['name'] = true;
        }
        else {
            $(this).addClass('border-danger');
            $(this).parent().find('.validation-failed').show(400);
            if ($("#mainSectionForm").find($(this)).length > 0)
                mainFormValidation['name'] = false;
            else
                contactFormValidation['name'] = false;
        }

    });

    $("#mainMobile , #mobile").keypress(function (e) {

        var keyCode = e.which ? e.which : e.keyCode;
        if (!(keyCode >= 48 && keyCode <= 57)) {
            return false;
        }

    });

    $("#mainMobile , #mobile").keyup(function (e) {

        var result = validateMobile($(this).val(), 11);
        if (result) {
            $(this).removeClass('border-danger');
            $(this).parent().find('.validation-failed').hide(400);
            if ($("#mainSectionForm").find($(this)).length > 0)
                mainFormValidation['mobile'] = true;
            else
                contactFormValidation['mobile'] = true;
        }
        else {
            $(this).addClass('border-danger');
            $(this).parent().find('.validation-failed').show(400);
            if ($("#mainSectionForm").find($(this)).length > 0)
                mainFormValidation['mobile'] = false;
            else
                contactFormValidation['mobile'] = false;
        }

    });

    $("#mainEmail , #email").keyup(function (e) {

        var result = validateEmailAddress($(this).val());
        if (result) {
            $(this).removeClass('border-danger');
            $(this).parent().find('.validation-failed').hide(400);
            if ($("#mainSectionForm").find($(this)).length > 0)
                mainFormValidation['email'] = true;
            else
                contactFormValidation['email'] = true;
        }
        else {
            $(this).addClass('border-danger');
            $(this).parent().find('.validation-failed').show(400);
            if ($("#mainSectionForm").find($(this)).length > 0)
                mainFormValidation['email'] = false;
            else
                contactFormValidation['email'] = false;
        }

    });

    $("#mainSectionForm").submit(function (e) {
        for (var key in mainFormValidation) {

            if (!mainFormValidation[key]) {
                e.preventDefault();
                break;
            }

        }
    });

    $("#contactSectionForm").submit(function (e) {
        console.log(contactFormValidation);
        for (var key in contactFormValidation) {

            if (!contactFormValidation[key]) {
                e.preventDefault();
                break;
            }

        }
    });

    function validateEmailAddress(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateText(value, min) {
        let count = value.length;
        if (count >= min) {
            return true;
        }
        else {
            return false;
        }
    }

    function validateMobile(value, count) {
        let numberCount = value.length;
        if (count == numberCount && (value.startsWith('01'))) {
            return true;
        }
        else {
            return false;
        }
    }



});