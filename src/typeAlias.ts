// type alias

type User = {
	name: {
		firstName: string;
		lastName: string;
	},
	gender: 'male' | 'female',
	contactNo: string;
	address: {
		division: string;
		city: string;
	}
};

const user1: User = {
	name: {
		firstName: 'Mr. ',
		lastName: 'X',
	},
	gender: 'male',
	contactNo: '0123412',
	address: {
		division: 'chattogram',
		city: 'chattogram',
	}
};


const user2:{
	name: {
		firstName: string;
		lastName: string;
	},
	gender: 'male' | 'female',
	contactNo: string;
	address: {
		division: string;
		city: string;
	}
} = {
	name: {
		firstName: 'Mr. ',
		lastName: 'Y',
	},
	gender: 'male',
	contactNo: '0123412',
	address: {
		division: 'Dhaka',
		city: 'Dhaka',
	}
};


// array type alias
type IsAdmin = true;
const isAdmin: IsAdmin = true;

type Name = string;

const myName: Name = 'Me. X';

// function
type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2 ) => num1 + num2;