{
	let name = 'dog';
	let dob = '2020-01-01';
	let sound = 'dark';
	let favoriteToy = 'Ball';

	function dogAge(dob: string): number {
		const age = Date.now() - new Date(dob).getTime();

		return Math.floor(age / (1000 * 60 * 24 * 365.25));
	};

	function makeSound(name: string, sound: string): string {
		return `${name} says ${sound}`;
	};

	// console.log(dogAge(dob));
	// console.log(makeSound(name, sound));

}

class Animal{
	name: string;
	dob: string;
	sound: string;

	constructor(name: string, dob: string, sound: string){
		this.name = name;
		this.dob = dob;
		this.sound = sound;
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
		return `${this.name} says ${this.sound}`;
	};
};

const cat = new Animal('cat', '2020-01-01', 'bark');
console.log(cat.getAge());
console.log(cat.makeSound());