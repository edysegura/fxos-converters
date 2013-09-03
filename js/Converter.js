var Converter = {

	init: function() {
		Converter.setForm();
		Converter.setOnChange();
	},

	setForm: function() {
		var form = document.querySelector('form');
		if (form) {
			form.addEventListener(
				//event
				'submit',
				//event listener
				Converter.submitListener,
				//user capture
				true
			);
		}
	},

	setOnChange: function() {
		var inputKm = document.getElementById('km');
		if (inputKm) {
			inputKm.addEventListener(
				//event
				'keyup',
				//listener
				Converter.submitListener,
				//user capture
				false
			);
		}
	},

	submitListener: function(event) {
		var inputKm = document.getElementById('km');
		var km = parseFloat(inputKm.value);
		var mile = Converter.kmToMile(km);
		Converter.showResult(mile);
		//to avoid the form submition and the page reloads
		event.preventDefault();
	},

	kmToMile: function(km) {
		var mile = km * 0.62;
		return mile;
	},

	showResult: function(result) {
		var divResult = document.getElementById('result');
		if (divResult && !isNaN(result)) {
			divResult.innerHTML = result.toFixed(2);
		}
		else {
			divResult.innerHTML = 0;
		}
	}

};

//initialization
Converter.init();
