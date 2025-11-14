// node --watch index.ts ===============
// eslint extension from microsoft (show runtime error);
// npm i -g typescript (typescript package install globally);
// primitive type === number, string, boolean, null, undefined
// non-primitive type === object, array
// enum
// any 
// void === no return
// never
// any === can't type check
// any === can type check




type TPerson = {
	name: string;
	age: number;
	city: string;
};

const person: TPerson = {
	name: 'akash',
	age: 23,
	city: 'feni',
};


// console.log(person);

// enum ==============
// enum TrafficLight {
// 	Red,
// 	Green, 
// 	Yellow
// };


// void === no return
function person1(): void{
	console.log('good morning');
};

// person1()

// never ====== unstoppable loop

function loop(): never {
	while(true){
		console.log('forever');
	}
};

// loop()

// any  && unknown =============
// let box: any = 4;
let box: unknown = 4;
box = 'test';

if(typeof box === 'string'){
	// console.log(box.toUpperCase());
};

// console.log(box.toUpperCase());

// type intersection  '&'=================

type TPersonName = { name: string};
type TPersonAge = { age: number};

let personIntersection: TPersonName & TPersonAge = {
	name: 'akash',
	age: 23,
};


// type alias = type nickname =================

type TStdRoll = number;

let stdRoll: TStdRoll = 23;

let stdName: string = 'akash';


// type generic ======== dynamic value =============

function greet<T>(value: T): T {
	return value;
}

// const result = greet<string>('akash');
// console.log(result);
// const result1 = greet<number>(2);
// console.log(result1);

function firstIndex<T>(arr: T[]) : T | undefined {
	return arr[0];
};

// const num = firstIndex<number>([34, 43, 54, 23]);
// console.log(num);
// const string = firstIndex<string>(['akash', 'shakib', 'tamim']);
// console.log(string);

// normal function
function getFirstIndexNumber (arr: number[]): number | undefined{
	return arr[0];
};

function getFirstIndexString(arr: string[]): string | undefined{
	return arr[0];
}


// extends ==================

function length<T extends { length: number } >(value: T): void {
	// console.log(value.length);
};

length('hello');
length([2, 3, 5]);

// length(10)

// let num = 'hello';
// console.log(length(num));

function add(...num:number[]): number | undefined{
	return num.reduce((a, b)=> a + b, 0);
};

// console.log(add(1));
// console.log(add(3,4, 5, 6));

const num = [2, 4, 5];
const numSpread = [...num, 6, 2, 2];
// console.log(numSpread);

// optional chaining =================
const user: {
	name: string;
	age: number;
	isMarried?: boolean; // optional chaining 
	gender: 'male' | 'female',
} = {
	name: 'akash',
	age: 23,
	gender: 'female',
};

// console.log(user);

// nullish coalescing

let num2: number | null = null;
let display = num2 ?? 23;
// console.log(display);


type TUser = {
	name: string;
	age?: number | null;
	address?: {
		city?: string;
	}
};

let user1: TUser = { name: 'omar', age: 23};
// const user2: TUser = { name: 'shakib '};
const user2: TUser = { name: 'shakib ', address: { city: 'dhaka'}};

// console.log(user2.age);

// let age1 = user1.age ?? 12;
// let age2 = user2.age ?? 34;

// let age1 = user1.address?.city;
// let age2 = user2.address.city;

// console.log(age1, age2);

function greeting(name: string): string {
	return `Hello ${name}`
};

// console.log(greeting('shakib'));

function add1(a: number, b: number): number{
	return a + b;
};

// console.log(add1(3,4));

// function UC(arr: string[]):string[]{
// 	const toUpper = arr.map((item)=> item.toUpperCase());
// 	return toUpper;
// };

// const arrUpper = ['dhaka', 'chattagram'];
// console.log(UC(arrUpper));

function UCL(arr: string[], minLength: number):string[]{
	return arr.filter((word) => word.length >= minLength);
};

// const arrUpperL = ['dhaka', 'chattagram'];
// console.log(UCL(arrUpperL, 3));

type TUser3 = {
	name: string;
	email: string;
	number: number;
};


// user update time use typescript partial key word =======
const partialUser: Partial<TUser3> = {
	name: 'shakib',
	email: 'shakib@gmail.com'
};


type TStd = 'akash' | 'dhaka';

// const roll: Record<TStd, number> = {
// 	Rakib: 24,
// };


// pick =====================

type TPickUser = {
	name: string;
	email: string;
	password: number;
};

type picktype = Pick<TPickUser, 'name'>;

const user6: picktype = {
	name: 'hasan'
};

// omit ===================

// promise ==============
const promise: Promise<number> = Promise.resolve(2);

type TWithOutAwaited = typeof promise;

type TTypeCheck = Awaited<typeof promise>;

promise.then((value)=> console.log(value))