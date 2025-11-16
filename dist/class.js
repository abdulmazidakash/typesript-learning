// oop - class - object
// class Animal {
// 	name: string;
// 	species: string;
// 	sound: string
// 	constructor(name: string, species: string, sound: string){
// 		this.name = name;
// 		this.species = species;
// 		this.sound = sound;
// 	};
// 	makeSound(){
// 		console.log(`${this.name} is making sound: ${this.sound}`);
// 	}
// };
// const dog = new Animal('dogesh vai', 'dog', 'ghew ghew');
// dog.makeSound();
// const cat = new Animal('cat vai', 'cat', 'mew mew');
// cat.makeSound();
// console.log(dog.name);
// console.log(dog.sound);
// console.log(dog.species);
// function add ( num1: number, num2: number){}
var Animal = /** @class */ (function () {
    function Animal(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    ;
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " is making sound: ").concat(this.sound));
    };
    return Animal;
}());
;
var dog = new Animal('dogesh vai', 'dog', 'ghew ghew');
dog.makeSound();
var cat = new Animal('cat vai', 'cat', 'mew mew');
cat.makeSound();
