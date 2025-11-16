//inheritance ==================

class Animal{
	name: string;
	dob: string;

	constructor(name: string, dob: string){
		this.name = name;
		this.dob = dob;
	};

	getAge(){
		const age = Date.now() - new Date(this.dob).getTime(); 
		// dob millisecond
		
		return Math.floor(age / (365.25 * 24 * 60 * 60 * 1000)); 
		// year millisecond 
		// 365.25 day, 
		// 24 hours, 
		// 60 minutes, 
		// 60 seconds, 
		// 1000 millisecond
	};

	
	makeSound(){
		return `${this.name} says`;
	};
};

class Dog extends Animal{
	sound: string;

	constructor(name: string, dob: string, sound:string){
		super(name, dob);
		this.sound = sound;
	};

	makeSound(): string {
		return `${this.name} says ${this.sound}`;
	};
};


class Class extends Animal{
	sound: string;

	constructor(name: string, dob: string, sound: string){
		super(name, dob);
		this.sound = sound;
	};

	makeSound(): string {
		return `${this.name} says ${this.sound}`;
	}
}

const cat = new Animal('cat', '2020-01-01');
const dog = new Animal('dog', '2020-01-01');

console.log(cat.getAge());
console.log(cat.makeSound());