// keyof - type operator

type RichPeoplesVehicle = {
	car: string; // key: value
	bike: string;
	cng: string;
};

type MyVehicle1 = 'car' | 'bike' | 'cng';
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = 'ship'; // ❌ not acceptable
const myVehicle1: MyVehicle2 = 'car'; // ✅ acceptable

type User = {
	id: number;
	name: string;
	address: {
		city: string;
	}
}
const user: User = {
	id: 23,
	name: 'Mezba',
	address: {
		city: 'ctg',
	},
};

// const myId = user.id;  // dot notation
// const myId = user['id'];  // bracket notation
// const myName = user['name'];
// const address = user['address'];

// console.log({myId, myName, address});

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
	return obj[key];
};

// const result = getPropertyFromObj(user, 'name');
const product = {
	brand: 'laptop',
};

const student = {
	id: 123,
	class: 'four',
}

const result = getPropertyFromObj(product, 'brand');
const result1 = getPropertyFromObj(student, 'id');
console.table(result);


