describe("ConversionController", function() {
	var ctrl, scope;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller(ConversionController, {
			$scope : scope
		});
	}));

	it('should invoke reset fields and set the current fields based on $viewContentLoaded event', function() {
		//given
		spyOn(scope, 'resetFields');
		spyOn(scope, 'setCurrent');

		//when
		scope.$emit('$viewContentLoaded');

		//then
		expect(scope.resetFields).toHaveBeenCalled();
		expect(scope.setCurrent).toHaveBeenCalled();
	});

	describe('Length', function() {
		it('should convert 1 kilomiter to 0.621371192 mile', function() {
			//given
			scope.km = 1;

			//when
			scope.kmToMile();

			//then
			expect(scope.mile).toBe(0.621371192);
		});

		it('should convert 1 mile to kilometer 1.621371192', function() {
			//given
			scope.mile = 1;

			//when
			scope.mileToKm();

			//then
			expect(scope.km).toBe(1.621371192);
		});
	});

	describe('Temperature', function() {
		it('should convert 1 celsius to 33.8 fahrenheit', function() {
			//given
			scope.celsius = 1;

			//when
			scope.celsiusToFahrenheit();

			//then
			expect(scope.fahrenheit).toBe(33.8);
		});

		it('should convert 1 celsius to 274.15 kelvin', function() {
			//given
			scope.celsius = 1;

			//when
			scope.celsiusToKelvin();

			//then
			expect(scope.kelvin).toBe(274.15);
		});

		it('should convert 1 fahrenheit to -17.22222222222222 celsius', function() {
			//given
			scope.fahrenheit = 1;

			//when
			scope.fahrenheitToCelsius();

			//then
			expect(scope.celsius).toBe(-17.22222222222222);
		});

		it('should convert 1 fahrenheit to -255.9277777777778 kelvin', function() {
			//given
			scope.fahrenheit = 1;

			//when
			scope.fahrenheitToKelvin();

			//then
			expect(scope.kelvin).toBe(255.9277777777778);
		});

		it('should convert 1 kelvin to -272.15 celsius', function() {
			//given
			scope.kelvin = 1;

			//when
			scope.kelvinToCelsius();

			//then
			expect(scope.celsius).toBe(-272.15);
		});

		it('should convert 1 kelvin to -457.86999999999995 fahrenheit', function() {
			//given
			scope.kelvin = 1;

			//when
			scope.kelvinToFahrenheit();

			//then
			expect(scope.fahrenheit).toBe(-457.86999999999995);
		});
	});

});
