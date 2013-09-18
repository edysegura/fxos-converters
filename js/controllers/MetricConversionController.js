conversionApp.controller('MetricConversionController', function($scope) {
	
	$scope.isKmToMile = true;

	$scope.$on('$viewContentLoaded', function() {
		$scope.setFieldVoid();
		$scope.setValid();
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

	$scope.celciusToFare = function() {
		if($scope.celcius) {
			$scope.fare = $scope.celcius * 1.8 + 32;
		}
		else {
			$scope.celcius = '';
		}
	};

	$scope.fareToCelcius = function() {
		if($scope.fare) {
			$scope.celcius = ($scope.fare - 32) * (5/9);
		}
		else {
			$scope.celcius = '';
		}
	};

	$scope.kelvinToCelcius = function() {
		if($scope.kelvin) {
			$scope.celcius = $scope.kelvin - 273;
		}
		else {
			$scope.celcius = '';
		}
	};


	//Controle de tela
	$scope.setKmToMile = function() {
		$scope.isKmToMile = $scope.setValid();
	};

	$scope.setMileToKm = function() {
		$scope.isMileToKm = $scope.setValid();
	};

	$scope.setCelciusToFare = function() {
		$scope.isCelciusToFare = $scope.setValid();
	};
	$scope.setFareToCelcius = function() {
		$scope.isFareToCelcius = $scope.setValid();
	};
	$scope.setKelvinToCelcius = function() {
		$scope.isKelvinToCelcius = $scope.setValid();
	};


	//Metodos auxiliares
	$scope.setFieldVoid = function() {
		$scope.km = '';
		$scope.mile = '';
		$scope.celcius = '';
		$scope.fare = '';
		$scope.kelvin = '';

	};

	$scope.setValid = function() {
		$scope.setFieldVoid();

		$scope.isMileToKm =  false;
		$scope.isKmToMile =  false;
		$scope.isCelciusToFare =  false;
		$scope.isFareToCelcius =  false;
		$scope.isKelvinToCelcius =  false;

		return true;
	};

});
