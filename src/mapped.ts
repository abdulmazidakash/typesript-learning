// mapped types

// map

const arrayOfNum: number[] = [1, 4, 6];
const arrayOfString: string[] = ['1', '2', '3'];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

// console.log(arrayOfStringUsingMap);

const user = {
	id: 21
};

type AreaOfNum = {
	height: number;
	width: number;
};

type Height = AreaOfNum['height'];

// type AreaOfString = {
// 	height: string;
// 	width: string;
// };

// type AreaOfString = {
// 	[key in 'height' | 'width']: string;
// }

// type AreaOfBool = {
// 	[key in keyof AreaOfNum]: boolean;
// }

type Area<T> = {
	[key in keyof T]: T[key];
};

/**
key >>> height >>> string
key >>> width >>> number

T >>> {height: string; width: string}

T['width'] : number;

'height' | 'width'
 
 */

const area1: Area<{ height: string; width: number}> = {
	height: '50',
	width: 40
};



