MetricConversionController = function($scope) {
		$scope.km = '';
		$scope.mile = '';
		$scope.isKmToMile = true;
		$scope.isMileToKm = false;

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

		$scope.setKmToMile = function() {
			$scope.isKmToMile = true;
			$scope.isMileToKm = false;
		};

		$scope.setMileToKm = function() {
			$scope.isMileToKm = true;
			$scope.isKmToMile = false;
		};
};