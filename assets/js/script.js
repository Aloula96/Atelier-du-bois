// scripts.js

document.querySelector('form').addEventListener('submit', function (event) {

    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    // Validation flags
    let isValid = true;

    // Name validation
    if (name === '') {
        document.querySelector('#nameError').textContent = 'Name is required';
        document.querySelector('#nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.querySelector('#emailError').textContent = 'Valid email is required';
        document.querySelector('#emailError').style.display = 'block';
        isValid = false;
    }



    // Message validation
    if (message === '') {
        document.querySelector('#messageError').textContent = 'Message is required';
        document.querySelector('#messageError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form here using AJAX or similar methods
    }
});