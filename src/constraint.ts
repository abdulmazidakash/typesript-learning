// constrain : strict rules

type Student = {
	id: number; 
	name: string;
	dateOfBirth: string;
	class: number;
};

const addStudentToCourse = <T extends Student>(studentInfo: T)=>{
	return {
		course: 'Next Level',
		...studentInfo,
	};
};

const student1 = {
	id: 23, 
	name: 'akash',
	hasPen: true,
};

const student2 = {
	id: 23, 
	name: 'mezba',
	hasCar: true,
	isMarried: true,
	dateOfBirth: '23-23-4034',
	class: 3,
};

const result = addStudentToCourse(student2);
console.log(result);