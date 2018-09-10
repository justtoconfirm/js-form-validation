var emailField = document.getElementById('emailField');
var submitButton = document.getElementById('submitButton');

emailField.addEventListener('keyup', function(event) {
	isValidEmail = emailField.checkValidity();

	if (isValidEmail) {
		submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
	}
});

submitButton.addEventListener('click', function(event) {
	alert('Form Submitted');
});