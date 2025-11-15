// oop - inheritance
// oop - polymorphism 
// oop - abstraction
// oop - encapsulation

class Person {
	getSleep(){
		console.log(`i am a normal person. i sleep 8 hours`);
	}
};

class Student extends Person {
	getSleep(){
		console.log(`i am a student. i sleep 7 hours`);
	}
};

class NextLevelDeveloper extends Person {
	getSleep() {
		console.log(`i am a next level developer. i sleep 6 hours`);
	}
};

const getSleepingHours = (params: Person) =>{
	params.getSleep();
};

const person = new Person();
const student = new Student();
const nextLevelDeveloper = new NextLevelDeveloper();

// getSleepingHours(person)

// second example ==================

class Shape {
	getArea(): number{
		return 0;
	}
};

class Circle extends Shape {
	radius: number;

	constructor(radius: number){
		super();
		this.radius = radius;
	};

	getArea(): number {
		return Math.PI * this.radius * this.radius
	}
};

class Rectangle extends Shape {
	height: number;
	width: number;

	constructor(height: number, width: number){
		super();
		this.height = height;
		this.width = width;
	};

	getArea(): number {
		return this.height * this.width;
	}
};

const getArea = (params: Shape)=>{
	console.log(params.getArea());
};

const shape1 = new Shape();
const circle = new Circle(4);
const rectangle = new Rectangle(4,4);

getArea(shape1)
getArea(circle)
getArea(rectangle)

