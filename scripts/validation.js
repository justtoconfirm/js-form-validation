// https://ourcodeworld.com/articles/read/37/how-to-create-your-own-javascript-library
// https://code.tutsplus.com/tutorials/build-your-first-javascript-library--net-26796

(function(window) {

	// Enable strict mode
	'use strict';

	// This function will contain all our code
	function formValidInit() {

		// Generate an empty object within the window object
		var _formValidObject = {};

		// We will add functions to our library here

		return _formValidObject;
	}

	// Library needs to be globally accessible, save in window object
	if(typeof(window.formValid) === 'undefined') {
		window.formValid = formValidInit();
	}

})(window);

/*
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
*/