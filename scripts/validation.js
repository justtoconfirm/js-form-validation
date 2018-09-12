// https://ourcodeworld.com/articles/read/37/how-to-create-your-own-javascript-library
// https://code.tutsplus.com/tutorials/build-your-first-javascript-library--net-26796

(function(window) {

	// Enable strict mode
	'use strict';

	// This function will contain all our code
	function formValidInit() {

		// Generate an empty object within the window object
		var _formValidObject = {};

		// This variable containing properties will be inaccessible outside of the library
		var settings = {
			testingProp: 100,
			disabled: false
		};

		/* We will add functions to our library here */

		// Method used for testing
		// e.g. formValid.setTesting(400);
		_formValidObject.setTesting = function(value) {
			settings.testingProp = value;
			return value;
		};

		// Change a private property
		// Allows disabled property to be set to true or false
		// e.g. formValid.setDisabled(true);
		_formValidObject.setDisabled = function(disabledStatus) {
			if (typeof(disabledStatus) === 'boolean') {
				settings.disabled = disabledStatus;
			} else {
				console.error('Disabled needs to be set to true or false');
			}

			return settings.disabled;
		};

		return _formValidObject;
	}

	// Library needs to be globally accessible, save in window object
	// 'formValid' becomes similar to '$' in jQuery
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