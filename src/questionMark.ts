// ? : ternary operator : decision making 
// ?? ? nullish coalescing operator  // just null/ undefined work
// ?. optional chaining


const biyerJonnoEligible = (age: number) =>{

	// if else use-------
	// if(age >= 21){
	// 	console.log('You are eligible');
	// }else{
	// 	console.log('You are not eligible');
	// }

	// ternary operator -------
	const result = age >= 21 ? 'Yor are eligible' : 'You are not eligible';
	console.log(result);
};

// biyerJonnoEligible(28);


// ?? nullish coalescing -----only null and undefined work------------------------------------
const userTheme = undefined;

const selectedTheme = userTheme ?? 'Light Theme';

// console.log(selectedTheme);

// const isAuthenticated = null;
const isAuthenticated = '';

const resultWithTernary = isAuthenticated ? isAuthenticated : 'You are guest !';

const resultWithNullish = isAuthenticated ?? 'You are guest !';
// console.log({resultWithTernary}, {resultWithNullish});


//optional chaining ---------------------------------

const user: {
	address: {
		city: string;
		town: string;
		postalCode?: string;
	}
} = {
	address: {
		city: 'Dhaka',
		town: 'Banani'
	}
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);