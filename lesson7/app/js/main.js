/**
 * Created by Nikita on 20.12.2017.
 */

var countries;

$(document).ready(function () {
    $('.carousel').slick({
        infinite: true,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.product').draggable({
        helper: "clone"
    });

    $('.cart').droppable({
        drop: function( event, ui ) {
            $(this).append($(ui.draggable[0]).clone());
            refreshCart();
        }
    });

    function refreshCart() {
        var total = 0;
        $('.cart').find('.price').each(function (index, element) {
            total += +$(element).text().match(/\d+\.\d+/)[0];
        });
        $('#cart-total span').text('$' + total);
    }

    $('input[data-type="datepicker"]').datepicker({
        firstDay: 1,
        dateFormat: "dd.mm.yy",
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    });

    var $contactForm = $('#contact-form');

    $contactForm.on("submit", function () {
        var $name = $('#name');
        var $birthday = $('#birthday');
        var $phone = $('#phone');
        var $email = $('#email');
        var $country = $('#country');

        var $nameLabel = $name.parent().children('label');
        var $birthdayLabel = $birthday.parent().children('label');
        var $phoneLabel = $phone.parent().children('label');
        var $emailLabel = $email.parent().children('label');
        var $countryLabel = $country.parent().children('label');

        $nameLabel.empty();
        $birthdayLabel.empty();
        $phoneLabel.empty();
        $emailLabel.empty();
        $countryLabel.empty();

        var submit = true;

        if (/[^a-zA-Z]/.test($name.val())) {
            $nameLabel.text('Only letters are allowed');
            submit = false;
        }

        if ($name.val().length === 0) {
            $nameLabel.text('Please enter your name');
            submit = false;
        }

        if (!/^\+7\(\d{3}\)\d{3}-\d{4}$/.test($phone.val())) {
            $phoneLabel.text('The phone number must look like +7(000)000-0000');
            submit = false;
        }

        if ($birthday.val().length === 0) {
            $birthdayLabel.text('Please enter your date of birth');
            submit = false;
        }

        if ($phone.val().length === 0) {
            $phoneLabel.text('Please enter your phone number');
            submit = false;
        }

        if (!/^[a-zA-Z][.\-_\w]*@[a-zA-Z][\w]*\.[a-zA-Z]+$/.test($email.val())) {
            $emailLabel.text('Please enter a correct e-mail address, like mymail@mail.ru');
            submit = false;
        }

        if ($email.val().length === 0) {
            $emailLabel.text('Please enter your e-mail');
            submit = false;
        }

        if ($country.val().length === 0) {
            $countryLabel.text('Country mustn\'t be empty');
            submit = false;
        }

        $contactForm.find('.form-alert').effect('bounce', {}, 500);

        var $dialog = $('<div />', {
            title: "Errors"
        });
        $dialog.append($('<p />', {text: $nameLabel.text()}));
        $dialog.append($('<p />', {text: $birthdayLabel.text()}));
        $dialog.append($('<p />', {text: $phoneLabel.text()}));
        $dialog.append($('<p />', {text: $emailLabel.text()}));
        $dialog.append($('<p />', {text: $countryLabel.text()}));
        $dialog.dialog({
            close: function (event, ui) {
                $dialog.remove();
            }
        });

        return submit;

    });

    $.ajax({
        type: 'GET',
        url: 'js/countries.json',
        dataType: 'json',
        success: function (data) {
            countries = data;
        }
    });

    var $countryInput = $('#country');
    var $countriesList = $('#countriesList');

    $countriesList.on('click', 'li', function (event) {
        $countryInput.val($(event.target).text());
        $countriesList.empty();
    });

    $countryInput.keyup(function () {
        $countriesList.empty();
        if ($countryInput.val().length > 2) {
            $(countries).each(function (index, element) {
                if (element.match($countryInput.val())) {
                    $countriesList.append($('<li />', {
                            text: element,
                            'data-id': index
                        })
                    );
                }
            });
        }
    });

});
