// getter and setter 

class BankAccount {
	userId: number;
	userName: string;
	userBalance: number;

	constructor(userId: number, userName: string, userBalance: number){
		this.userId = userId;
		this.userName = userName;
		this.userBalance = userBalance;
	};

	// addBalance(balance: number){
	// 	return this.userBalance = this.userBalance + balance;
	// };

	// set keyword used =============
	set addBalance(amount: number){
		this.userBalance = this.userBalance + amount;
	};

	// getBalance(){
	// 	return this.userBalance;
	// };

	// get keyword used =================
	get getBalance(){
		return this.userBalance;
	}
};

const mezbaBhaiAccount = new BankAccount(12, 'mezba', 42);
// mezbaBhaiAccount.addBalance(23);
// console.log(mezbaBhaiAccount);
// console.log(mezbaBhaiAccount.getBalance());;

// setter and getter used =================
mezbaBhaiAccount.addBalance = 2;
console.log(mezbaBhaiAccount.getBalance); // function call korte hoi na