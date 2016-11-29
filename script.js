var car = { make: 'Range Rover', fuelType: 'Diesel', color: 'Grey' };

function getAndPrint(String) {

	var property;
	property = prompt('What would you like to know about your car?', 'Enter make, fuelType or color');

	switch (property) {
		case 'make' : document.write('The ' + property + ' is ' + car.make); break;
	}
}