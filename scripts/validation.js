// https://ourcodeworld.com/articles/read/37/how-to-create-your-own-javascript-library
// https://code.tutsplus.com/tutorials/build-your-first-javascript-library--net-26796
// http://dfsq.info/site/read/writing-your-own-jquery
// https://stackoverflow.com/questions/11167317/what-is-the-purpose-of-a-parameter-named-undefined-in-a-javascript-function

(function(window, undefined) {

	// Enable strict mode
	'use strict';

	// This function will contain all our code
	// Constructor
	function formValidInit() {

		// TESTING:
		// Add the novalidate attribute when the JS loads
		// Disable the native browser validation by adding the novalidate attribute to our forms
		// The native browser validation will be applied as fallback should the JS not load
		// Add the 'validate' class to the <form> element to apply
		var forms = document.querySelectorAll('.js-validate');
		for (var i = 0; i < forms.length; i++) {
			forms[i].setAttribute('novalidate', true);
		}

		// Generate an empty object within the window object
		// Check to see if the object currently exists before creating it
		var _formValidObject = _formValidObject || {};

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