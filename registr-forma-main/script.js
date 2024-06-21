// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordConfirmInput = document.getElementById('password-confirm');
    const birthDayInput = document.getElementById('birth-day');
    const submitButton = document.getElementById('form-button');

    // Utility function to check age
    function getAge(dateString) {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // Validation functions
    function validateFirstName() {
        const firstName = firstNameInput.value.trim();
        if (firstName.length < 2 || firstName.length > 50) {
            firstNameInput.classList.add('invalid');
            document.getElementById('first-name-error').innerText = 'Имя должно быть длиной от 2 до 50 символов.';
            return false;
        } else {
            firstNameInput.classList.remove('invalid');
            firstNameInput.classList.add('valid');
            document.getElementById('first-name-error').innerText = '';
            return true;
        }
    }

    function validateLastName() {
        const lastName = lastNameInput.value.trim();
        if (lastName.length < 2 || lastName.length > 50) {
            lastNameInput.classList.add('invalid');
            document.getElementById('last-name-error').innerText = 'Фамилия должна быть длиной от 2 до 50 символов.';
            return false;
        } else {
            lastNameInput.classList.remove('invalid');
            lastNameInput.classList.add('valid');
            document.getElementById('last-name-error').innerText = '';
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailInput.classList.add('invalid');
            document.getElementById('email-error').innerText = 'Введите корректный email.';
            return false;
        } else {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            document.getElementById('email-error').innerText = '';
            return true;
        }
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
        if (!passwordPattern.test(password)) {
            passwordInput.classList.add('invalid');
            document.getElementById('password-error').innerText = 'Пароль должен содержать минимум 8 символов, одну цифру, одну заглавную и строчную букву и один спецсимвол.';
            return false;
        } else {
            passwordInput.classList.remove('invalid');
            passwordInput.classList.add('valid');
            document.getElementById('password-error').innerText = '';
            return true;
        }
    }

    function validatePasswordConfirm() {
        const password = passwordInput.value.trim();
        const passwordConfirm = passwordConfirmInput.value.trim();
        if (password !== passwordConfirm) {
            passwordConfirmInput.classList.add('invalid');
            document.getElementById('password-confirm-error').innerText = 'Пароли не совпадают.';
            return false;
        } else {
            passwordConfirmInput.classList.remove('invalid');
            passwordConfirmInput.classList.add('valid');
            document.getElementById('password-confirm-error').innerText = '';
            return true;
        }
    }

    function validateBirthDay() {
        const birthDay = birthDayInput.value;
        if (getAge(birthDay) < 18) {
            birthDayInput.classList.add('invalid');
            document.getElementById('birth-day-error').innerText = 'Возраст должен быть не менее 18 лет.';
            return false;
        } else {
            birthDayInput.classList.remove('invalid');
            birthDayInput.classList.add('valid');
            document.getElementById('birth-day-error').innerText = '';
            return true;
        }
    }

    // Enable submit button if all fields are valid
    function enableSubmitButton() {
        if (validateFirstName() &&
            validateLastName() &&
            validateEmail() &&
            validatePassword() &&
            validatePasswordConfirm() &&
            validateBirthDay()) {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', 'disabled');
        }
    }

    // Event listeners for validation
    firstNameInput.addEventListener('blur', enableSubmitButton);
    lastNameInput.addEventListener('blur', enableSubmitButton);
    emailInput.addEventListener('blur', enableSubmitButton);
    passwordInput.addEventListener('blur', enableSubmitButton);
    passwordConfirmInput.addEventListener('blur', enableSubmitButton);
    birthDayInput.addEventListener('blur', enableSubmitButton);

    // Validate on form submit
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateFirstName() &&
            validateLastName() &&
            validateEmail() &&
            validatePassword() &&
            validatePasswordConfirm() &&
            validateBirthDay()) {
            alert('Форма успешно отправлена!');
            // Дополнительные действия по отправке формы
        } else {
            alert('Форма содержит ошибки. Пожалуйста, исправьте их перед отправкой.');
        }
    });
});
