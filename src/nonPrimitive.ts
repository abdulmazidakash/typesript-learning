// array, object

// ts - tuple

let bazarList: string[] = ['eggs', 'milk', 'sugar']; // only string array assignable

bazarList.push(true); // argument boolean is not assignable string array, only string assignable

let mixedArr: (string | number)[] = ['eggs', 3, 'milk', 4, 'sugar'];
mixedArr.push(true); // argument boolean is not assignable, just string and number assignable 

//---------------------ts-tuple-----------------------

let coordinates: [number, number] = [20, 30]; //when array length fixed, use this format;

let couple: [string, string] = ['husband', 'wife'];

let akashNameAndRoll: [string, number] = ['akash', 23];

let destination: [string, string, number] = ['Dhaka', 'chattagram', 2];

// reference type : object ------------------------

let user: {
	// organization: 'Programming Hero'  // value => type, literal type
	readonly organization: string // access modifier
	firstName: string,
	middleName?: string,  //optional type
	lastName: string,
	isMarried: boolean,
} = {
	organization: 'Programming Hero',
	firstName: 'Abdul',
	middleName: 'Mazid', //optional type
	lastName: 'Akash',
	isMarried: true,
};

// user.organization = 'Programming Hero fire'; // not assignable, because use literal types

console.log(user);