// static ================

class Counter {

	// count: number = 0;
	static count: number = 0;

	static increment(){
		// return this.count = this.count + 1;
		return Counter.count = Counter.count + 1;
	};

	static decrement(){
		// return this.count = this.count - 1;
		return Counter.count = Counter.count - 1;
	}
};


// const instance1 = new Counter();
// console.log(instance1.increment());
// console.log(instance1.increment());
// console.log(instance1.increment());


// const instance2 = new Counter();
// console.log(instance2.increment());
// console.log(instance2.increment());
// console.log(instance2.increment());
// console.log(instance2.increment());


// static counter ==================
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());