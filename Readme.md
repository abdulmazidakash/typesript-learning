# 🧠 TypeScript Concepts & OOP Practice

This repository is my personal **TypeScript learning playground**.  
Here I practice core TypeScript concepts and Object-Oriented Programming (OOP) like:

- Basic types
- Functions
- Classes & Objects
- Access modifiers (public / private / protected)
- Inheritance, polymorphism, encapsulation
- Generics
- Enums
- Utility types and more

The goal is to build **strong fundamentals** so I can write clean, scalable code and feel confident in interviews.

---

## 📂 Project Structure (Main Files)

> (May not be 100% exact but shows the main learning areas.)

```bash
src/
├── abstractions.ts
├── accessModifiers.ts
├── accounts.ts
├── classes.ts
├── conditions.ts
├── constraints.ts
├── destructuring.ts
├── encapsulations.ts
├── enum.ts
├── functions.ts
├── genericFunctions.ts
├── generics.ts
├── genericsWithInterface.ts
├── getterSetter.ts
├── inheritance.ts
├── interfaces.ts
├── jsConfig.js
├── mapped.ts
├── nonPrimitives.ts
├── nullAbleUnknownNever.ts
├── polymorphism.ts
├── primitives.ts
├── questionMarks.ts
├── spreadAndRests.ts
├── statics.ts
├── tests.ts
├── typeAliases.ts
├── typeAssertions.ts
├── typeGuards.ts
├── unionAndIntersections.ts
└── utilities.ts
````

> `dist/` folder contains the compiled JavaScript.

---

## 🧩 Core Topics, Notes, Examples & Interview Q/A

Below are the main topics I am practicing in this repo.

---

## 1️⃣ Basic Types (`primitives.ts`, `nonPrimitives.ts`)

### Notes

* `number`, `string`, `boolean`, `null`, `undefined`, `void`
* Arrays: `number[]`, `string[]`
* Tuples: fixed-length, fixed-type arrays (e.g. `[string, number]`)

### Simple Example

```ts
const age: number = 23;
const name: string = "Akash";
const isDeveloper: boolean = true;

const scores: number[] = [80, 90, 75];
const user: [string, number] = ["Akash", 23];
```

### Interview Q/A

**Q:** What is the difference between `any` and `unknown`?
**A:** `any` disables type checking completely. `unknown` is safer: you must check the type before using it.

---

## 2️⃣ Functions (`functions.ts`, `genericFunctions.ts`)

### Notes

* Function types: parameters + return type
* Arrow function vs normal function
* Optional parameters: `param?: type`
* Default parameters: `param: type = defaultValue`

### Example

```ts
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;

const result = add(2, 3);      // 5
const result2 = multiply(4, 5); // 20
```

### Interview Q/A

**Q:** Why should you always specify return type in TypeScript?
**A:** It improves readability and catches mistakes early because the compiler can warn if a wrong value is returned.

---

## 3️⃣ Classes & Objects (`classes.ts`, `accounts.ts`)

### Notes

* `class` is a blueprint for creating objects.
* Contains:

  * properties (fields)
  * constructor
  * methods

### Example

```ts
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}

const dog = new Animal("Dogesh Vai", "Dog", "Ghew Ghew");
dog.makeSound();
```

**Output:**

```text
Dogesh Vai is making sound: Ghew Ghew
```

### Interview Q/A

**Q:** What is the difference between a class and an object?
**A:** A class is a blueprint; an object is an instance created from that blueprint.

---

## 4️⃣ Access Modifiers & Encapsulation (`accessModifiers.ts`, `encapsulations.ts`)

### Notes

* `public` – accessible from anywhere (default)
* `private` – accessible only **inside the same class**
* `protected` – accessible in the class and its **subclasses**
* Encapsulation = **hiding internal details** and exposing only what is needed.

### Example (from your screenshot style)

```ts
class BankAccount {
  public userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }

  // method that uses private method internally
  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }

  getBalance() {
    return this.userBalance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    // this.userBalance is accessible because it is protected
    this.userBalance = this.userBalance + 10;
  }
}

const mezbaBhaiAccount = new BankAccount(123, "Mezba", 12);
mezbaBhaiAccount.callHiddenMethod(34);
console.log(mezbaBhaiAccount.getBalance());
```

### Interview Q/A

**Q:** Why do we use `private` in a class?
**A:** To hide internal implementation and protect data from being changed directly from outside (encapsulation).

**Q:** When should you use `protected`?
**A:** When a property/method should not be public, but subclasses still need access.

---

## 5️⃣ Inheritance (`inheritance.ts`)

### Notes

* One class **extends** another.
* Reuse logic from parent class and add extra features.

### Example

```ts
class Person {
  constructor(public name: string) {}

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

class Student extends Person {
  constructor(name: string, public studentId: number) {
    super(name); // call parent constructor
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const s1 = new Student("Akash", 101);
s1.greet();  // Hello, I am Akash
s1.study();  // Akash is studying.
```

### Interview Q/A

**Q:** What is inheritance?
**A:** A mechanism where one class can acquire properties and methods of another class using `extends`.

---

## 6️⃣ Polymorphism (`polymorphism.ts`)

### Notes

* Same method name but **different behavior** in different classes.
* Usually comes with inheritance.

### Example

```ts
class Shape {
  area(): number {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const shapes: Shape[] = [new Rectangle(10, 5), new Circle(3)];

shapes.forEach(shape => {
  console.log(shape.area());
});
```

### Interview Q/A

**Q:** What is polymorphism?
**A:** Ability of different classes to provide different implementations for the same method (e.g., `area()` behaves differently for `Circle` and `Rectangle`).

---

## 7️⃣ Abstraction (`abstractions.ts`)

### Notes

* **Abstract class**: cannot be instantiated directly.
* Defines **common structure**; child classes must implement some methods.

### Example

```ts
abstract class Vehicle {
  constructor(public name: string) {}

  abstract move(): void; // must be implemented in child
}

class Car extends Vehicle {
  move() {
    console.log(`${this.name} is moving on road`);
  }
}

const car = new Car("Toyota");
car.move();
```

### Interview Q/A

**Q:** Why use abstract classes?
**A:** To enforce a standard interface for subclasses while allowing different implementations.

---

## 8️⃣ Enums (`enum.ts`)

### Notes

* `enum` is used to define a set of named constants.
* Makes code more readable than using raw strings/numbers.

### Example

```ts
enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

function canEdit(role: UserRole): boolean {
  return role === UserRole.Admin || role === UserRole.Editor;
}

console.log(canEdit(UserRole.Admin));  // true
console.log(canEdit(UserRole.Viewer)); // false
```

### Interview Q/A

**Q:** When would you use an enum?
**A:** When you have a fixed set of related values like roles, statuses, directions, etc.

---

## 9️⃣ Generics (`generics.ts`, `genericFunctions.ts`, `genericsWithInterface.ts`)

### Notes

* Generics allow functions/classes to work with **any type** while preserving type safety.
* Written with `<T>`.

### Example

```ts
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10);
const str = identity<string>("Akash");
```

### Interview Q/A

**Q:** Why do we need generics?
**A:** To write reusable code that is type-safe and works for multiple types.

---

## 🔟 Utility Types & Others (`utilities.ts`, `typeAliases.ts`, `unionAndIntersections.ts`)

### Notes (quick)

* `type` alias: custom type name
* Union: `type A = string | number`
* Intersection: `type C = A & B`
* Common utility types: `Partial<T>`, `Pick<T, K>`, `Omit<T, K>`, `Readonly<T>`

```ts
type User = {
  name: string;
  email: string;
  age?: number;
};

type UserPreview = Pick<User, "name" | "email">;

const u: UserPreview = {
  name: "Akash",
  email: "akash@example.com",
};
```

---

## 🧪 How to Run the Code

### 1️⃣ Install dependencies

```bash
npm install
```

(or if this is a simple TS playground, at least install typescript:)

```bash
npm install -D typescript
```

### 2️⃣ Compile & run

If `tsconfig.json` is configured:

```bash
npx tsc          # compile TypeScript -> JavaScript
node dist/file.js
```

Or use **ts-node** for direct running:

```bash
npm install -g ts-node typescript
ts-node src/classes.ts
```

---

## 🎯 Learning Goals

* Build strong mental models of **OOP in TypeScript**.
* Understand how **access modifiers**, **inheritance**, **polymorphism**, and **abstraction** work together.
* Be able to answer basic **TypeScript + OOP interview questions** confidently.
* Practice writing clean and readable code with types.

---

## 👤 Author

**Abdul Mazid Akash**
*Textile Engineer & Beginner Full Stack Web Developer*
Passionate about **problem solving**, **JavaScript**, and **TypeScript** fundamentals.

```

---

