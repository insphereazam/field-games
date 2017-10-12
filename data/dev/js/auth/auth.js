function additionalFamily(field, rules, i, options){
    if($('#MemberType').val() === 'family' && $('#AdditionalFamily').val() === "") {
        rules.push('required');
        //return "Please fill Primary Membership No.";
    }
}

function studentNumber(field, rules, i, options){
    if(($('#MemberType').val() === 'student' || $('#MemberType').val() === 'pensioner') && $('#StudentCardNumber').val() === "") {
        rules.push('required');
    }
}

function fireArms(field, rules, i, options){
    if(($('#FirearmMake').val() !== '' || $('#FirearmModel').val() !== '' || 
            $('#FirearmCalibre').val() !== '' || $('#SerialNumber').val() !== '' || $('#AdditionalFirearms').is(':checked')) && field.val() === "") {
        rules.push('required');
    }
}

function donationVal(field, rules, i, options){
    if(($('#Donate').is(':checked') || $('#FightingFund').is(':checked'))&& $('#donation').val() === "") {
        rules.push('required');
        //return "Please fill Primary Membership No.";
    }
}

//function memberBefore(field, rules, i, options){
//    if(!$('#MemberYes').is(':checked') && !$('#MemberNo').is(':checked')) {
//        $('.alert.alert-danger p.error-message').html("Please select Yes or No for 'Have you been a member before?'.");
//        $('.alert.alert-danger').removeClass('hide');
//    }
//}

var FieldGameAuthController = (function ($) {

    return {
        signup: function () {
            FieldGameAuthController.Signup.init();
        },
        signupv2: function () {
            FieldGameAuthController.SignupV2.init();
        }
    };

}(jQuery));

FieldGameAuthController.SignupV2 = (function ($) {

    var attachEvents = function () {
        
        var handler = StripeCheckout.configure({
            key: stripePublishKey,
            image: baseHttpPath  + '/resources/fieldgames/images/favicons/apple-touch-icon-152x152.png',
            locale: 'auto',
            'allow-remember-me': false,
            token: function(token) {
                $("#stripe_token").val(token.id);
                $('#signupForm').submit();
            }
        });
          
        $('.CreditCardBtn').on('click', function(e){
            e.preventDefault();
            
            $('.OtherPaymentOptions').addClass('hide');
            $('#ElectronicFundsTransfer,#PaymentByCheque').prop('checked', false);
            
            var valid = $("#signupForm").validationEngine('validate');
            if (!valid) {
                return;
            }
            
            var total = parseFloat($('#MemberType').find(':selected').data('cost'));
            if($('#donation').val() != "") {
                var value = $('#donation').val();
                value = value.replace(/[^\d\.]+/g,'');
                value = value.replace(/(\..*)\./g,'$1');
                var don = parseFloat(value);
                if(!isNaN(don) && don > 0) {
                    total = don + total;
                }
            }            
            
            var totalCents = total * 100;
            if(isNaN(totalCents) || totalCents <= 0) {
                alert("Please select a Membership Type");
                return false;
            }
            
            handler.open({
                name: 'Field & Game',
                description: 'Field & Game Membership',
                currency: 'AUD',
                email: $('#Email').val(),
                amount: totalCents
            });
        });
        
        // Close Checkout on page navigation:
        window.addEventListener('popstate', function() {
            handler.close();
        });
        
        $('.OtherPaymentOptionsBtn').on('click', function(){
            $('.OtherPaymentOptions').removeClass('hide');
        });
        
        $('#signupForm').validationEngine({
            prettySelect: true, promptPosition : "topRight", showOneMessage: true,
            onValidationComplete: function(form, status){ // when validate is on and the form scan is completed
                if (status == true) { // equiv to success everythings is OK
                    // we disable the default from action to make our own action like alert or other function
                    form.on('submit', function(e) {
                        e.preventDefault();
                    });
                    
                    if ($('.OtherPaymentOptions').hasClass('hide') && $("#stripe_token").val() == '') {
                        alert("Please click on Pay by Credit Card to connect");
                        return false;
                    }
                    
                    if (!$('.OtherPaymentOptions').hasClass('hide') && !$('#ElectronicFundsTransfer').is(':checked') && !$('#PaymentByCheque').is(':checked')) {
                        alert("Please select atleast one payment method");
                        return false;
                    }
                    
                    // your function or your action
                    var formData = $('#signupForm').serialize();
                    formData += "&_csrf=" + yii.getCsrfToken();
                    $.ajax({
                        url: baseHttpPath + '/auth/save-user',
                        type: 'post',
                        data: formData,
                        dataType: 'json',
                        success: function (data) {
                            if (data.success === 1) {
                                window.location = baseHttpPath + '/auth/complete-signup';
                            }
                            else {
                                $('.alert.alert-danger p.error-message').html(data.error);
                                $('.alert.alert-danger').removeClass('hide');                                    
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            $().General_ShowNotification({type: 'error',message: jqXHR.responseText});
                        },
                        beforeSend: function(jqXHR, settings) { 
                            $('body').addClass('Signup__Error');
                        },
                        complete: function(jqXHR, textStatus) {
                            $('body').removeClass('Signup__Error');
                        }
                    }); 

                    //alert("Successful! Now submitting");
                    return true;
                } 
            }
        });

        //Select2 box
        $("select.form-control").select2({
            blurOnChange: true,
            dropdownAutoWidth: true
        });

        $('#DOB.date').datepicker({
            'autoclose': true,
            format: 'dd/mm/yyyy'            
        });        
        
        $('#donation').on('keyup', function(e){
            if(e.which === 18) {
                e.preventDefault();
            }
            
            //get numeric value only
            var cost = parseFloat($('#MemberType').find(':selected').data('cost'));
            var totalCost = cost;
            var value = $(this).val();
            value = value.replace(/[^\d\.]+/g,'');
            value = value.replace(/(\..*)\./g,'$1');
            var don = parseFloat(value);
            if(!isNaN(don) && don > 0) {
                totalCost = cost+don;
            }
            
            $('#TotalPayable').val('$ ' + totalCost.toFixed(2) + ' inc GST');
        });
        
        $('#MemberType').on('change', function(e){
            
            var cost = parseFloat($(this).find(':selected').data('cost'));
            var total = new Number(cost);
            $('#TotalMembershipFees').val('$ ' + total.toFixed(2) + ' inc GST');
            if($('#donation').val() != "") {
                var value = $('#donation').val();
                value = value.replace(/[^\d\.]+/g,'');
                value = value.replace(/(\..*)\./g,'$1');
                var don = parseFloat(value);
                if(!isNaN(don) && don > 0) {
                    cost += don;
                }
            }
            
            total = new Number(cost);
            $('#TotalPayable').val('$ ' + total.toFixed(2) + ' inc GST');
            
            var memberType = $(this).val();
            
            if(memberType === 'family') {
                $('.additional-family-row').removeClass('hide');
                $('.type-help').html("(Spouse or Child U18)");
                $('.type-help').removeClass('hide');
            }
            else {
                $('.additional-family-row').addClass('hide');
                if(memberType === 'student' || memberType === 'pensioner') {
                    $('.type-help').html("Proof must be provided");
                    $('.type-help').removeClass('hide');
                }
                else {
                    $('.type-help').addClass('hide');
                }
            }
            

            
            if (memberType === 'junior' || memberType === 'superjunior') {
                $('.firearm').val('');
                $('.firearm').prop("disabled", true);
            }
            else {
                $('.firearm').prop("disabled", false);
            }
            
            $('#donation').prop("disabled", false);
        });
        
        $('#SameResidentialAddress').on('click', function(e){
            
            if($(this).is(':checked')) {
                $('#PostalAddress').val($('#ResidentialAddress').val());
                $('#Suburb2').val($('#Suburb').val());
                //$('#State2').val($('#State').val());
                $('#Postcode2').val($('#Postcode').val());
                var $state2 = $('#State2').select();
                $state2.val($('#State').val()).trigger("change");
            }
            
        });

    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));

FieldGameAuthController.Signup = (function ($) {

    var attachEvents = function () {
        
        $('#same_as_postal').click(function(e) {
            if ($(this).is(':checked')) {
                $('#signupform-residential_address').val($('#signupform-postal_address').val());
                $('#signupform-residential_postcode').val($('#signupform-postal_postcode').val());
            }
        });
        
        $('#signupform-dateofbirth').datetimepicker({
            autoclose: true,
            format: 'dd-mm-yyyy',    //'mm-dd-yyyy HH:ii:ss P',
            pickerPosition: "bottom-left",
            initialDate: '01-01-1980',
            minView: 2
        });
                
        $('.membershipSignupForm').on('click', function() {
           var elem = $(this);
           var data = elem.data('membership');
           var cost = elem.data('cost');
           $('.membershipForm').find('.active').removeClass('active');
           elem.addClass('active');
           $('#memberTypeInput').val(data);
           $('#cost').removeClass('hide');
           $('#cost').children('span').text(cost);
           if(elem.hasClass('family')) {
              $('.additionalInfo').removeClass('hide'); 
           }
           else {
              $('.additionalInfo').addClass('hide');
              $('#additionalFamilyInfo').val('');
           }
        });
    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));

