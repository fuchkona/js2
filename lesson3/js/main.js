/**
 * Created by Nikita on 16.12.2017.
 */

var inputText = "'Lorem ipsum dolor sit amet's, consectetur adipisicing elit's.'\n" +
    "'Cumque eaque eos in iste odio sed, tenetur ullam!'\n'Beatae blanditiis cum " +
    "distinctio dolor eius eligendi eos's esse, est excepturi harum neque placeat " +
    "qui rem saepe suscipit!'\n'Accusamus consectetur inventore laborum nulla " +
    "perferendis quia, tempora veniam!'\n'Aliquid's aperiam dolorum enim, error " +
    "fugiat iure laudantium libero modi molestias nam officia, praesentium " +
    "repellat suscipit totam's ut.'\n'Fuga molestiae natus neque?'\n'A asperiores culpa " +
    "dicta obcaecati ratione repellat, repudiandae.'\n'Aliquam's assumenda cumque " +
    "dolores iste laborum's magnam numquam quasi quibusdam, quisquam quo temporibus " +
    "voluptates voluptatibus voluptatum.'\n'Commodi cum eligendi magni nemo provident, " +
    "quidem recusandae sed?'\n'Amet's'.";

window.onload = function () {
    document.getElementById('input-text').value = inputText;
    document.getElementById('btnReplaceSingleQuotes').addEventListener('click', replaceSingleQuotes);
    document.getElementById('contact-form').onsubmit = checkFields;
};

function replaceSingleQuotes() {
    inputText = document.getElementById('input-text').value;
    document.getElementById('output-text').innerText = inputText.replace(/\B'|'\B/g, '"');
}

// - Имя содержит только буквы;
// - Телефон подчиняется шаблону +7(000)000-0000;
// - E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru
// - Текст произвольный;

function checkFields() {
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');

    var nameLabel = name.parentNode.getElementsByClassName('form-alert')[0];
    var phoneLabel = phone.parentNode.getElementsByClassName('form-alert')[0];
    var emailLabel = email.parentNode.getElementsByClassName('form-alert')[0];

    nameLabel.innerText = null;
    phoneLabel.innerText = null;
    emailLabel.innerText = null;

    var submit = true;

    if (/[^a-zA-Z]/.test(name.value)) {
        name.parentNode.getElementsByClassName('form-alert')[0].innerText = 'Only letters are allowed';
        submit = false;
    }

    if (name.value.length === 0) {
        nameLabel.innerText = 'Please enter your name';
        submit = false;
    }

    if (!/^\+7\(\d{3}\)\d{3}-\d{4}$/.test(phone.value)) {
        phoneLabel.innerText = 'The phone number must look like +7(000)000-0000';
        submit = false;
    }

    if (phone.value.length === 0) {
        phoneLabel.innerText = 'Please enter your phone number';
        submit = false;
    }

    if (!/^[a-zA-Z][\.\-\_\w]*@[a-zA-Z][\w]*\.[a-zA-Z]+$/.test(email.value)) {
        emailLabel.innerText = 'Please enter a correct e-mail address, like mymail@mail.ru';
        submit = false;
    }

    if (email.value.length === 0) {
        emailLabel.innerText = 'Please enter your e-mail';
        submit = false;
    }

    return submit;
}