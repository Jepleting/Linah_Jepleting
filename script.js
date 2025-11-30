const form = document.getElementById('booking-form');

form.addEventListener('submit', function (event) {
    // Clear old error messages
    clearErrors();

    let isValid = true;

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const type = document.getElementById('appointmentType');
    const firstVisitRadios = document.getElementsByName('firstVisit');

    // Name: required
    if (fullName.value.trim() === '') {
        showError('name-error', 'Please enter your full name.');
        isValid = false;
    }

    // Email: basic pattern + required
    if (email.value.trim() === '') {
        showError('email-error', 'Please enter your email address.');
        isValid = false;
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
        showError('email-error', 'Please enter a valid email address.');
        isValid = false;
    }

    // Phone: required  
    const phoneDigits = phone.value.replace(/\D/g, '');
    if (phone.value.trim() === '') {
        showError('phone-error', 'Please enter your phone number.');
        isValid = false;
    } else if (phoneDigits.length < 8) {
        showError('phone-error', 'Please enter a valid phone number.');
        isValid = false;
    }

    // Date: required
    if (date.value === '') {
        showError('date-error', 'Please choose a preferred date.');
        isValid = false;
    }

    // Time: required
    if (time.value === '') {
        showError('time-error', 'Please choose a preferred time.');
        isValid = false;
    }

    // Appointment type: required
    if (type.value === '') {
        showError('type-error', 'Please select an appointment type.');
        isValid = false;
    }

    // First visit radio: required
    let firstVisitSelected = false;
    for (const radio of firstVisitRadios) {
        if (radio.checked) {
            firstVisitSelected = true;
            break;
        }
    }
    if (!firstVisitSelected) {
        showError('firstVisit-error', 'Please tell us if this is your first visit.');
        isValid = false;
    }

    // If any field is invalid, prevent submission
    if (!isValid) {
        event.preventDefault();
    }
});

function showError(id, message) {
    const span = document.getElementById(id);
    if (span) {
        span.textContent = message;
    }
}

function clearErrors() {
    const errorSpans = document.querySelectorAll('.error-message');
    errorSpans.forEach(function (span) {
        span.textContent = '';
    });
}