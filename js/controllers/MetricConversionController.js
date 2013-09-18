conversionApp.controller('MetricConversionController', function($scope) {
	$scope.km = '';
	$scope.mile = '';
	$scope.celsius = '';
	$scope.farenheit = '';
	$scope.isKmToMile = true;
	$scope.isMileToKm = false;
	$scope.isCelsiusToFarenheit = false;
	$scope.isFarenheitToCelsius = false;

	$scope.kmToMile = function() {
		if($scope.km) {
			$scope.mile = $scope.km * 0.621371192;
		}
		else {
			$scope.mile = 0;
		}
	};

	$scope.mileToKm = function() {
		if($scope.mile) {
			$scope.km = $scope.mile * 1.621371192;
		}
		else {
			$scope.km = 0;
		}
	};

	$scope.celsiusToFarenheit = function() {
		if($scope.celsius) {
			$scope.farenheit = $scope.celsius * (9/5) + 32;
		}
		else {
			$scope.farenheit = 0;
		}
	};

	$scope.farenheitToCelsius = function() {
		if($scope.farenheit) {
			$scope.celsius = ($scope.farenheit - 32) * (5/9);
		}
		else {
			$scope.celsius = 0;
		}
	};

	$scope.setKmToMile = function() {
		$scope.isKmToMile = true;
		$scope.isMileToKm = false;
		$scope.isCelsiusToFarenheit = false;
		$scope.isFarenheitToCelsius = false;
		$scope.km = '';
		$scope.mile = '';
		$scope.celsius = '';
		$scope.farenheit = '';

	};

	$scope.setMileToKm = function() {
		$scope.isMileToKm = true;
		$scope.isKmToMile = false;
		$scope.isCelsiusToFarenheit = false;
		$scope.isFarenheitToCelsius = false;
		$scope.km = '';
		$scope.mile = '';
		$scope.celsius = '';
		$scope.farenheit = '';
	};

	$scope.setCelsiusToFarenheit = function() {
		$scope.isKmToMile = false;
		$scope.isMileToKm = false;
		$scope.isCelsiusToFarenheit = true;
		$scope.isFarenheitToCelsius = false;
		$scope.km = '';
		$scope.mile = '';
		$scope.celsius = '';
		$scope.farenheit = '';
	};

	$scope.setFarenheitToCelsius = function() {
		$scope.isKmToMile = false;
		$scope.isMileToKm = false;
		$scope.isCelsiusToFarenheit = false;
		$scope.isFarenheitToCelsius = true;
		$scope.km = '';
		$scope.mile = '';
		$scope.celsius = '';
		$scope.farenheit = '';
	};

});