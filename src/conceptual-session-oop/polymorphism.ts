class Animal {
	makeSound(){
		console.log('some generic animal make sound!');
	}
};


class Dog extends Animal{
	makeSound(){
		console.log('Bark');
	}
};

class Cat extends Animal{
	makeSound(){
		console.log('Meow');
	}
};

function playSound(animal: Animal){
	animal.makeSound();
};

const cat = new Cat();
const dog = new Dog();

playSound(cat);