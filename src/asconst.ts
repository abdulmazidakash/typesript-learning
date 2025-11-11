// as const assertion


// enum UserRoles {
// 	Admin = 'Admin',
// 	Editor = 'Editor',
// 	Viewer = 'Viewer',
// }


// const UserRoles = {
// 	Admin:'Admin',
// 	Editor: 'Editor',
// 	Viewer: 'Viewer',
// } as const;


const UserRoles = {
	Admin:'ADMIN',
	Editor: 'EDITOR',
	Viewer: 'VIEWER',
} as const;

/**
 const UserRoles = {
	readonly Admin:'Admin',
	readonly Editor: 'Editor',
	readonly Viewer: 'Viewer',
} as const;

1. typeof operator
2. keyof operator

const user = {
	Id: 23,
	name: 'mezba'
};

user['id'] >>> 324

typeof user;

type user {
	id: number;
	name: string;
};

typeof UserRoles

{
	Admin: 'Admin';
	Editor: 'Editor';
	Viewer: 'Viewer';
}

keyof typeof UserRoles
'Admin' | 'Editor' | 'Viewer' ;

'ADMIN' | 'EDITOR' | 'VIEWER' ;

UserRoles['Admin'] >>> 'ADMIN'
	typeof UserRoles[keyof typeof UserRoles]


*/

// UserRoles.Admin = 'Mon Chasse';

const canEdit = ( role: (typeof UserRoles) [keyof typeof UserRoles]) =>{
	if(role === UserRoles.Admin || role === UserRoles.Editor){
		return true;
	} 
	return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);