// unknown ===============

const discountCalculator = (input: unknown) =>{
	if(typeof input === 'number'){
		let discount = input * 0.1;
		console.log(discount);
	}else if(typeof input === 'string'){
		// let splittedPrice = input.split(' ');
		// console.log(splittedPrice);
		let [discount] = input.split(' ');
		// console.log(Number(discount) * 0.1);
		let discountedPrice = Number(discount) * 0.1;
		console.log(discountedPrice);
	}else{
		console.log('wrong input');
	}
};

// discountCalculator(100);
// discountCalculator('100 tk');
// discountCalculator(null)
// const ternaryDiscount = (input: unknown)=>{
// 	const basePrice = 
// 	  typeof input === 'number' ? input * 0.1 :
// 	  typeof input === 'string' ? Number(input.split(' ')[0]) * 0.1:
// 	  null;

// 	  basePrice !== null ? console.log('input number or string: --->',basePrice) : console.log('wrong input');

// };

// ternaryDiscount(100);
// ternaryDiscount('100 tk');
// ternaryDiscount(null);


const ternaryDiscount = (input: unknown) =>{
	const basePrice = typeof input === 'number' ? input * 0.1:
					  typeof input === 'string' ? Number(input.split(' ')[0]) * 0.1 : null;

		 basePrice !== null ? console.log(basePrice): console.log('wrong input');
};

// ternaryDiscount(120)
// ternaryDiscount('120 tk')
// ternaryDiscount(null)

// const throwError = (msg: string):never =>{
// 	throw new Error(msg);	
// };

// throwError('gasdlkfg')

const evenOrOdd = (num: number) =>{
	const number = num % 2 === 0 ? 'even' : 'odd';
	return number;
};

// console.log(evenOrOdd(4));
// console.log(evenOrOdd(41));

const checkGrade = (num: number)=>{
	let grade = num >= 80 ? '80 + A' : 
				num >=  60 ? '60 + B' :
				num >= 40 ? '40 + C' : '40 - F';
	return grade;
};

// console.log(checkGrade(23));;
// console.log(checkGrade(45));;
// console.log(checkGrade(67));;
// console.log(checkGrade(80));;
type User = {
	name: string;
	isLoggedIn: boolean;
};

const user: User = {
	name: 'akash',
	isLoggedIn: false,
	// isLoggedIn: true,
};


const getWelcomeMessage = (user: User) =>{
	const message = user.isLoggedIn ? 'how many mobile do you have': 'please logged in';
	return message;
};

// console.log(getWelcomeMessage(user));

// const checkAdult = (number: number)=>{
// 	let age = number >= 18 ? 'adult' : 'minor';
// 	return age;
// };
const checkAdult = (age: number)=> age >= 18 ? 'adult': 'minor';

// console.log(checkAdult(34));
// console.log(checkAdult(4));

const checkGradeSecond = (score: number) =>{
	const grade = score >= 80 ? 'A' :
				  score >= 60 ? 'B' :
				  score >= 40 ? 'C' :
				  'F';
			return grade;
};

const mapGrades = (marks: number[]) =>{
	const grade = marks.map((mark)=> checkGradeSecond(mark));
	return grade;
};

// console.log(mapGrades([34, 56, 76, 87]));

const evenOrOddSecond = (num: number) =>{
	const number = num % 2 === 0 ? 'even' : 'odd';
	return number;
};

const mapOddOrEven = (numbers: number[]) => numbers.map((num)=>evenOrOddSecond(num));

// console.log(mapOddOrEven([4, 6, 7, 8, 9]));
type GenericArray<T> = Array<T>;

type User1 = {
	name: string; 
	age: number;
}

const userList: User1[] = [
	{
		name: 'Mr. X',
		age: 23,
	},
	{
		name: 'Mr. Y',
		age: 32,
	}
];


interface User2 {
	name: string;
	age: number;
};


const user2: User2 = {
	name: 'shakib',
	age: 32,
};

// generic array =============================

type TGenericArray<T> = Array<T>
// const numberGeneric: number[] = [2, 4, 5, 4, 2];
// const numberGeneric: Array<number> = [2, 4, 5, 4, 2];
const numberGeneric: TGenericArray<number> = [2, 4, 5, 4, 2];

// const stringGeneric: string[] = ['shakib', 'tamim', 'musfiq'];
const stringGeneric: TGenericArray<string> = ['shakib', 'tamim', 'musfiq'];

// const booleanGeneric: boolean[] = [true, false, true, false];
const booleanGeneric: TGenericArray<boolean> = [true, false, true, false];

// generic tuple =========================
type TTuple<X, Y> = [X, Y];

const tuple: TTuple<string, string> = ['shakib', 'tamim'];

const tupleNumber: TTuple<number, number> = [3, 4];


// generic object
type TGenericArrayOfObject<T> = Array<T>
type TGenericUser = {
	name: string;
	age: number;
}

const genericUser: TGenericArrayOfObject<TGenericUser>  = [
	{ 
		name: 'sk',
		age: 3
	},
	{
		name: 'aksh',
		age: 3,
	}
];

// generic interface ===================

interface Developer<T, X = null> {
	name: string;
	salary: number;
	device: {
		brand: string;
		model: string;
	};
	smartWatch: T ;
	bike?: X ;
};

interface BrandCharaWatch {
	heartRate: string;
	stopWatch: boolean;
};



const richDeveloper: Developer<BrandCharaWatch, {speed: string; engine: string}> = {
	name: 'Mr. Poor',
	salary: 2000,
	device: {
		brand: 'Lenovo',
		model: 'A21',
	},
	smartWatch:{
		heartRate: '423',
		stopWatch: true,
	},
	bike: {
		speed: 'fsdrf',
		engine: '200cc'
	}

};

const poorDeveloper: Developer<BrandCharaWatch> = {
	name: 'Mr. Poor',
	salary: 2000,
	device: {
		brand: 'Lenovo',
		model: 'A21',
	},
	smartWatch:{
		heartRate: '423',
		stopWatch: true,
	}

};

const createArrayWithString = (value: string) => [value];


