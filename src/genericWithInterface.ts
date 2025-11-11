interface Developer <T, X = null> {
	name: string;
	salary: number;
	device: {
		brand: string;
		model: string;
		releasedYear: string;
	};
	smartWatch: T;
	bike?: X;
};

interface IBrandCharaWatch {
	heartRate: string;
	stopWatch: true;
};

interface IAppleWatch {
	heartRate: string;
	callSupport: boolean;
	calculator: boolean;
	AIFeature: boolean;
}	


const poorDeveloper: Developer<IBrandCharaWatch, {brand: 'Yamaha', engineCapacity: '200cc'}> = {
	name: 'Mr. poor',
	salary: 23,
	device: {
		brand: 'lenovo',
		model: 'A21',
		releasedYear: '2020',
	},
	smartWatch: {
		heartRate: '300',
		stopWatch: true,
	},
};

const richDeveloper: Developer<IAppleWatch> = {
	name: 'Mr. rich',
	salary: 26,
	device: {
		brand: 'hp',
		model: 'A21',
		releasedYear: '2030',
	},
	smartWatch: {
		heartRate: '300',
		callSupport: true,
		calculator: true,
		AIFeature: true

	},
};