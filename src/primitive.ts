// string, number, boolean, undefined, null

// TS: never, unknown, void

let userName: string = 'akash123'; // explicit mean data type define developer

let userId = 123; // implicit mean data type typescript guess type value

userName.tofixed(); //not working string tofixed function error show typescript 
userId.toFixed(); // tofixed function working only number typescript

let isAdmin = false;  //typescript guess type
isAdmin = true;

let x: undefined = undefined;