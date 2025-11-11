// enum

// set of fixed string literal ek jaigai rakhe

// type UserRoles = 'Admin' | 'Editor' | 'Viewer';

enum UserRoles {
	Admin = 'Admin',
	Editor = 'Editor',
	Viewer = 'Viewer',
}

// const canEdit = ( role: UserRoles) =>{
// 	if(role === 'Admin' || role === 'Editor'){
// 		return true;
// 	} 
// 	return false;
// };

const canEdit = ( role: UserRoles) =>{
	if(role === UserRoles.Admin || role === UserRoles.Editor){
		return true;
	} 
	return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);