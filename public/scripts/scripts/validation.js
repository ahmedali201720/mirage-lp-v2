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

        emptyFieldObj = validateEmptyFields($("#mainFullName").val(), $("#mainMobile").val(), $("#mainEmail").val());

        if (!emptyFieldObj['nameValid']) {
            console.log(emptyFieldObj)
            $("#mainFullName").parent().find('.validation-failed').show(400);
            mainFormValidation['name'] = false;
            e.preventDefault();
        }

        if (!emptyFieldObj['mobileValid']) {
            $("#mainMobile").parent().find('.validation-failed').show(400);
            mainFormValidation['mobile'] = false;
            e.preventDefault();
        }

        if (!emptyFieldObj['emailValid']) {
            e.preventDefault();
            $("#mainEmail").parent().find('.validation-failed').show(400);
            mainFormValidation['email'] = false;
            e.preventDefault();
        }

        for (var key in mainFormValidation) {

            if (!mainFormValidation[key]) {
                e.preventDefault();
                break;
            }

        }
    });

    $("#contactSectionForm").submit(function (e) {

        emptyFieldObj = validateEmptyFields($("#fullName").val(), $("#mobile").val(), $("#email").val());

        if (!emptyFieldObj['nameValid']) {
            $("#fullName").parent().find('.validation-failed').show(400);
            contactFormValidation['name'] = false;
            e.preventDefault();
        }

        if (!emptyFieldObj['mobileValid']) {
            $("#mobile").parent().find('.validation-failed').show(400);
            contactFormValidation['mobile'] = false;
            e.preventDefault();
        }

        if (!emptyFieldObj['emailValid']) {
            e.preventDefault();
            $("#email").parent().find('.validation-failed').show(400);
            contactFormValidation['email'] = false;
            e.preventDefault();
        }

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

    function validateEmptyFields(name, mobile, email) {

        return {
            nameValid: name ? true : false,
            mobileValid: mobile ? true : false,
            emailValid: email ? true : false
        }

    }

});