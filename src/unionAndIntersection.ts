// union |

type UserRole = 'admin' | 'user';

const getDashboard = ( role: UserRole) =>{
	if(role === 'admin'){
		return 'Admin Dashboard';
	}else if(role === 'user'){
		return 'User Dashboard';
	}else{
		return 'Guest Dashboard';
	}
};

getDashboard('guset'); // must use admin or user

// intersection '&' ----------------------
type Employee = {
	id: string;
	name: string;
	phoneNo: string;
};

type Manager = {
	designation: string;
	teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
	id: '1234',
	name: 'Chowdhury Shaheb',
	phoneNo: '345',
	designation: 'manager',
	teamSize: 21,
};

