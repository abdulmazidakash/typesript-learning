// 

class BankAccount {
	public readonly userId: number;
	public userName: string;
	// private userBalance: number;
	protected userBalance: number;

	constructor(userId: number, userName: string, userBalance: number){
		this.userId = userId;
		this.userName = userName;
		this.userBalance = userBalance;
	};

	addBalance(balance: number){
		this.userBalance = this.userBalance + balance;
	}
};

class StudentBankAccount extends BankAccount {
	test(){
		this.userBalance = this.userBalance;
	}
}

const mezbaBhaiAccount = new BankAccount(123, 'Mezba', 12);
mezbaBhaiAccount.addBalance(34);
