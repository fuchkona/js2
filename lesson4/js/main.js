/**
 * Created by Nikita on 20.12.2017.
 */

var ACTIVE_CLASS = 'active';
var countries;

$(document).ready(function () {
    var $headers = $('.tabs-header');
    var $tabs = $('.tabs-tab');

    $headers.on('click', function (event) {
        var $currentTab = $tabs.filter('.' + ACTIVE_CLASS);
        var $newTab = $("#tab-" + $(event.target).data('tab'));
        if ($newTab.attr('id') !== $currentTab.attr('id')) {
            $headers.removeClass(ACTIVE_CLASS);
            $(event.target).addClass(ACTIVE_CLASS);
            $currentTab.slideUp(500).removeClass(ACTIVE_CLASS);
            $newTab.slideDown(500).addClass(ACTIVE_CLASS);
        }
    });

    $("#contact-form").on("submit", function () {
        var $name = $('#name');
        var $phone = $('#phone');
        var $email = $('#email');
        var $country = $('#country');

        var $nameLabel = $name.parent().children('label');
        var $phoneLabel = $phone.parent().children('label');
        var $emailLabel = $email.parent().children('label');
        var $countryLabel = $country.parent().children('label');

        $nameLabel.empty();
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

    $countryInput.keyup(function () {
        console.log($countryInput.val().length);
        $countriesList.text(null);
        if ($countryInput.val().length > 2) {
            $(countries).each(function (index, element) {
                if (element.match($countryInput.val())) {
                    var $li = $(document.createElement('li'));
                    $li.data('id',index);
                    $li.text(element);
                    $countriesList.append($li);
                }
            });
            $countriesList.children('li').on('click', function (event) {
                $countryInput.val($(event.target).text());
                $countriesList.text(null);
            })
        }
    });

});
