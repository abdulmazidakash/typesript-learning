// dynamically generalize: generic

// type GenericArray = Array<string>;
type GenericArray<T> = Array<T>;

// generic string array -----------------------------
// const friends: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
// const friends: GenericArray = ['Mr. X', 'Mr. Y', 'Mr. Z'];
const friends: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

// generic number array -----------------------------------
// const rollNumbers: number[] = [2, 3, 4, 5];
// const rollNumbers: Array<number> = [2, 3, 4, 5];
const rollNumbers: GenericArray<number> = [2, 3, 4, 5];

// generic boolean array -------------------------
// const isEligibleList: boolean[] = [true, false, true, false];
// const isEligibleList: Array<boolean> = [true, false, true, false];
const isEligibleList: GenericArray<boolean> = [true, false, true, false];


// generic object -------------------------------
type User = { name: string; age: number};

const userList: GenericArray<User> = [
	{
		name: 'Mr. X',
		age: 22,
	},
	{
		name: 'Mr. Y',
		age: 24,
	}
];

const sqrFunc = (value: number) =>{
	return value * value;
};

sqrFunc(4);  // dynamic parameter example

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [23, 43];
const coordinates2: Coordinates<string, string> = ['23', '43'];
