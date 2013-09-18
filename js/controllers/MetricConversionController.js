conversionApp.controller('MetricConversionController', function($scope) {
	$scope.km = '';
	$scope.mile = '';
	$scope.celsius = '';
	$scope.fahr = '';

	$scope.isKmToMile = true;
	$scope.isMileToKm = false;
	$scope.isCelsiusToFahr = false;
	$scope.isFahrToCelsius = false;

	$scope.kmToMile = function() {
		if($scope.km) {
			$scope.mile = $scope.km * 0.621371192;
		}
		else {
			$scope.km = 0;
		}
	};

	$scope.mileToKm = function() {
		if($scope.mile) {
			$scope.km = $scope.mile * 1.621371192;
		}
		else {
			$scope.mile = 0;
		}
	};

	$scope.celsiusTofahr = function() {
		if($scope.celsius) {
			$scope.fahr = $scope.celsius * 1.8 + 32;
		}
		else {
			$scope.celsius = 0;
		}
	};

	$scope.fahrTocelsius = function() {
		if($scope.fahr) {
			$scope.celsius = $scope.fahr - 32 * 0.555 ;
		}
		else {
			$scope.fahr = 0;
		}
	};

	$scope.setKmToMile = function() {
		$scope.isKmToMile = true;
		$scope.isMileToKm = false;
		$scope.isCelsiusToFahr = false;
		$scope.isFahrToCelsius = false;
		$scope.km = '';
		$scope.mile = '';
		$scope.celsius = '';
		$scope.fahr = '';

	};

	$scope.setMileToKm = function() {
		$scope.isMileToKm = true;
		$scope.isKmToMile = false;
		$scope.isCelsiusToFahr = false;
		$scope.isFahrToCelsius = false;
		$scope.km = '';
		$scope.mile = '';
		$scope.celsius = '';
		$scope.fahr = '';

	};

	$scope.setCelsiusToFahr = function() {
		$scope.isCelsiusToFahr = true;
		$scope.isFahrToCelsius = false;
		$scope.isMileToKm = false;
		$scope.isKmToMile = false;
		$scope.km = '';
		$scope.mile = '';
		$scope.celsius = '';
		$scope.fahr = '';

	};

	$scope.setFahrToCelsius = function() {
		$scope.isFahrToCelsius = true;
		$scope.isCelsiusToFahr = false;
		$scope.isMileToKm = false;
		$scope.isKmToMile = false;
		$scope.km = '';
		$scope.mile = '';
		$scope.celsius = '';
		$scope.fahr = '';

	};

});