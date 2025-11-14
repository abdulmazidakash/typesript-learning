class Parent {
	name: string;
	age: number;
	address: string;

	constructor(name: string, age: number, address: string){
		this.name = name;
		this.age = age;
		this.address = address;
	};

	getSleep(numOfHours: number){
		console.log(`${this.name} ${numOfHours} ghonta gomai`);
	};
}

class Student extends Parent{

};

const person1 = new Student('shakib', 32, 'dhaka');
person1.getSleep(34);

class Teacher extends Parent{
	designation: string;

	constructor(name: string, age: number, address: string, designation: string){
		super(name, age, address);
		this.designation = designation;
	};

	getSleep(numOfHours: number){
		console.log(`${this.name} ${numOfHours} gonta gomai`);
	};

	takeClass(classHours: number){
		console.log(`${this.name} ${classHours} gonta class ney`);
	}
};

const teacher = new Teacher('tamim', 53, 'dhaka', 'senior teacher');
teacher.takeClass(43);