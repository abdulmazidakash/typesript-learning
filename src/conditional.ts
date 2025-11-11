// conditional type: this type depend on condition

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type RichPeoplesVehicle = {
	bike: string;
	car: string;
	ship: string;
};

// type CheckVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false;
type CheckVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false;

// type HasBike = CheckVehicle<'ship'>;
type HasBike = CheckVehicle<'tractor'>;
