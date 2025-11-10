// object destructuring
// array destructuring

const user = {
	id: 123,
	name: {
		firstName: 'Mezbaul',
		middleName: 'Abedin',
		lastName: 'Forhan'
	},
	gender: 'male',
	favoriteColor: 'black',
};

const { gender, name: {middleName: myMiddleName} } = user;
// console.log(gender, myMiddleName);

const friends = ['karim', 'Rahim', 'Mahim'];

const [,, myBestFriend] = friends;
// console.log(myBestFriend);