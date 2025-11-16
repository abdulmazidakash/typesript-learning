class Pizza{
	topping: string;
	size: number;

	constructor(topping: string, size: number){
		this.topping = topping;
		this.size = size;
	};

	serve(){
		return console.log(`Serving ${this.size} inch ${this.topping} pizza.`);
	}
};

// const user = new Pizza('cheese', 10);
// console.log(user.serve());


class Car{
	brand: string;
	speed: number;

	constructor(brand: string, speed: number){
		this.brand = brand;
		this.speed = speed;
	};

	drive(){
		return console.log(`${this.brand} car driving speed ${this.speed}`);
	}
};

const tesla = new Car('Tesla', 233);
console.log(tesla.drive());