// instance of type guard / type narrowing

class Person{
	name: string;

	constructor(name: string){
		this.name = name;
	};

	getSleep(numOfHours: number){
		console.log(`${this.name} doinik ${numOfHours} gonta gomai`);
	}
};

class Student extends Person {
	constructor(name: string){
		super(name)
		this.name = name;
	};

	doStudy(numOfHours: number){
		console.log(`${this.name} doinik ${numOfHours} gonta study kore`);
	}
};

class Teacher extends Person{
	constructor(name: string){
		super(name);
	};

	takeClass(numOfHours: number){
		console.log(`${this.name} doinik ${numOfHours} gonta class ney`);
	}
};

const isStudent = (user: Person) =>{
	return user instanceof Student;  // user is student
};

const isTeacher = (user: Person) =>{
	return user instanceof Teacher;  // user is teacher
}

const getUserInfo = (user: Person) =>{
	if(isStudent(user)){
		user.doStudy(4);
	}else if(isTeacher(user)){
		user.takeClass(4);
	}else{
		user.getSleep(3);
	}
};

const person1 = new Person('shakib');
// getUserInfo(person1)
const teacher1 = new Teacher('tamim');
getUserInfo(teacher1);