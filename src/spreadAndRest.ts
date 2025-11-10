// spread and rest operator

const friends = ['Rahim', 'Karim'];

const schoolFriends = ['mintu', 'chintu', 'pintu'];

const collegeFriends = ['mr. smart', 'mr. very very smart'];

// const friends = ['Rahim', 'Karim'];

friends.push(...schoolFriends);

// console.log(friends);


const user = { name: 'akash', phoneNo: 143214324};
const otherInfo = { hobby: 'outing', favoriteColor: 'black'};

const userInfo = { ...user, otherInfo};

// console.log(userInfo);

// rest operator ------------------------

const sendInvite = (friend1: string, friend2: string, friend3: string) =>{
	console.log(`send invite to ${friend1}`);
	console.log(`send invite to ${friend2}`);
	console.log(`send invite to ${friend3}`);
};

// console.log(sendInvite('pintu', 'chintu', 'chulbul'));

const sendInvitationRestOperator = (...friends: string[]) =>{
	friends.forEach((friend: string)=> console.log(`send invitation: ---> ${friend}`))
};


console.log(sendInvitationRestOperator('pintu', 'mintu', 'chintu'));
