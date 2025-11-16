// abstraction =============

// interface Vehicle {
// 	start(): void;
// 	stop(): void;

// };

abstract class Vehicle {
	abstract start(): void;
	abstract stop(): void;
};

class Car extends Vehicle{
	start(): void {
		console.log('car engine start');
	}
	stop(): void {
		console.log('car stopped');
	}
};

const myCar = new Car();
myCar.start();
myCar.stop();