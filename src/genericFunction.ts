// generic function

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: { id: number; name: string}) => {
// 	return [value];
// };

const createArrayWithGeneric = <T>(value: T)=>{
	return [value]
}


// const arrString = createArrayWithString('Apple');
// const arrNumber = createArrayWithNumber(3);
// const arrUserObj = createArrayWithUserObj({id: 3, name: 'akash'});

const arrString = createArrayWithGeneric('Apple');
const arrNumber = createArrayWithGeneric(3);
const arrUserObj = createArrayWithGeneric({id: 3, name: 'akash'});


// tuple -------------------------------------
const createArrayWithTuple = (param1: string, param2: string) => [
	param1, 
	param2
];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) =>[
	param1, param2
];

const res1 = createArrayTupleWithGeneric('akash', false);
const res2 = createArrayTupleWithGeneric(222, { name: 'akash'});


// more example

const addStudentToCourse = <T>(studentInfo: T)=>{
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
};

const result = addStudentToCourse(student2);
console.log(result);