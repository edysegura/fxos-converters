ConversionController = function($scope) {
	//initialization	
	$scope.isKmToMile = true;
	$scope.$on('$viewContentLoaded', function() {
		$scope.resetFields();
		$scope.setCurrent();
	});
	
	$scope.kmToMile = function() {
		if($scope.km) {
			$scope.mile = $scope.km * 0.621371192;
		}
		else {
			$scope.mile = '';
		}
	};

	$scope.mileToKm = function() {
		if($scope.mile) {
			$scope.km = $scope.mile * 1.621371192;
		}
		else {
			$scope.mile = '';
		}
	};

	$scope.celsiusToFahrenheit = function() {
		if($scope.celsius != undefined) {
			$scope.fahrenheit = $scope.celsius * 1.8 + 32;
		}
		else {
			$scope.celsius = '';
		}
	};

	$scope.celsiusToKelvin = function() {
		if($scope.celsius != undefined) {
			$scope.kelvin = $scope.celsius + 273.15;
		}
		else {
			$scope.kelvin = '';
		}
	};

	$scope.fahrenheitToCelsius = function() {
		if($scope.fahrenheit != undefined) {
			$scope.celsius = ($scope.fahrenheit - 32) * (5/9);
		}
		else {
			$scope.celsius = '';
		}
	};

	$scope.fahrenheitToKelvin = function() {
		if($scope.fahrenheit != undefined) {
			$scope.kelvin = ($scope.fahrenheit + 459.67) * (5/9);
		}
		else {
			$scope.kelvin = '';
		}
	};

	$scope.kelvinToCelsius = function() {
		if($scope.kelvin != undefined) {
			$scope.celsius = $scope.kelvin - 273.15;
		}
		else {
			$scope.celsius = '';
		}
	};

	$scope.kelvinToFahrenheit = function() {
		if($scope.kelvin != undefined) {
			$scope.fahrenheit = ((($scope.kelvin) - 273.15) * 1.8) + 32;
		}
		else {
			$scope.fahrenheit = '';
		}
	};	

	$scope.setKmToMile = function() {
		$scope.isKmToMile = $scope.setCurrent();
	};

	$scope.setMileToKm = function() {
		$scope.isMileToKm = $scope.setCurrent();
	};

	$scope.setCelsiusToFahrenheit = function() {
		$scope.isCelsiusToFahrenheit = $scope.setCurrent();
	};

	$scope.setCelsiusToKelvin = function() {
		$scope.isCelsiusToKelvin = $scope.setCurrent();
	};

	$scope.setFahrenheitToCelsius = function() {
		$scope.isFahrenheitToCelsius = $scope.setCurrent();
	};

	$scope.setFahrenheitToKelvin = function() {
		$scope.isFahrenheitToKelvin = $scope.setCurrent();
	};

	$scope.setKelvinToCelsius = function() {
		$scope.isKelvinToCelsius = $scope.setCurrent();
	};

	$scope.setKelvinToFahrenheit = function() {
		$scope.isKelvinToFahrenheit = $scope.setCurrent();
	};

	$scope.resetFields = function() {
		$scope.km = '';
		$scope.mile = '';
		$scope.celsius = '';
		$scope.fahrenheit = '';
		$scope.kelvin = '';
	};

	$scope.setCurrent = function() {
		$scope.resetFields();

		$scope.isMileToKm =  false;
		$scope.isKmToMile =  false;
		$scope.isCelsiusToFahrenheit =  false;
		$scope.isCelsiusToKelvin =  false;
		$scope.isFahrenheitToCelsius =  false;
		$scope.isFahrenheitToKelvin =  false;
		$scope.isKelvinToCelsius =  false;
		$scope.isKelvinToFahrenheit =  false;

		return true;
	};
};
