// encapsulation === ================================

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

	private addBalance(balance: number){
		this.userBalance = this.userBalance + balance;
	};

	callHiddenMethod(balance: number){
		// private method class ar vitore ar akta method a access kora jai
		this.addBalance(balance);
	}
};

class StudentBankAccount extends BankAccount {
	 private test(){
		// protected method child ar moddhe access kora jai
		this.userBalance = this.userBalance;
	};
};



const mezbaBhaiAccount = new BankAccount(123, 'Mezba', 12);
mezbaBhaiAccount.addBalance(34);
