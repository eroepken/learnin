// string
let myName = 'Ellie';
// myName = 15; // Type '15' is not assignable to type 'string'.

// number, can also be float
let myAge = 30;
// myAge = 'Ellie'; // Type '"Ellie"' is not assignable to type 'number'.

// boolean
let hasHobbies = false;
// hasHobbies = 1; // Type '1' is not assignable to type 'boolean'.
// In TS, you can cast 1 as a boolean (true), but you will get the above error if you try to just use a number in a boolean's place.

// assign types
/*let myRealAge;  // TS sees this as any type.
myRealAge = 30;
myRealAge = '30'; */

let myRealAge: number;  // This is how you can be explicit with type in TS.
myRealAge = 30;
//myRealAge = '30'; // Type '"30"' is not assignable to type 'number'.

// array
let hobbies = ['cooking', 'reading'];
// hobbies = [100]; // Type 'number' is not assignable to type 'string'.
// TS assumes an array of strings.

let stuff: any[] = ['cooking', 'reading']; // An array of anything.
stuff = [100];

// tuples - an array of mixed types, but a limited number of items.
let address: [number, string] = [788, 'Norman Drive'];

// enum
enum Color {
  Red,          // 0
  Green = 100,  // 100; defaults to 1
  Blue          // 101; defaults to 2
}

let favColor: Color = Color.Green;
// console.log(favColor); // Outputs 100.

// any
let car: any = 'Ford';
// console.log(car);
car = { brand: 'Ford', model: 'Fusion', year: 2014 }
// console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
// console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello!');
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(10, 2));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; // Type '() => void' is not assignable to type '(val1: number, val2: number) => number'. Type 'void' is not assignable to type 'number'.
// myMultiply(); // An argument for 'val1' was not provided.
myMultiply = multiply;
// console.log(myMultiply(2, 4));

// objects
let user: { name: string, age: number } = {
  name: 'Ellie',
  age: 30
};
console.log(user);
// user = {}; // Type '{}' is missing the following properties from type '{ name: string; age: number; }': name, age

// Type '{ a: string; b: number; }' is not assignable to type '{ name: string; age: number; }'.
//   Object literal may only specify known properties, and 'a' does not exist in type '{ name: string; age: number; }'.
// user = {
//   a: 'Hello',
//   b: 22
// }

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [5, 10, 15],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 30;
myRealRealAge = "30";
// myRealRealAge = true; // Type 'true' is not assignable to type 'string | number'.

// check types
let finalValue = "A string";
if (typeof finalValue == 'number') {
  console.log('Final value is a number.')
}
if (typeof finalValue == 'string') {
  console.log('Final value is a string.')
}

// never type - Function never finishes
function neverReturns(): never {
  throw new Error('Error!');
}

// nullable
// let canBeNull = 12;
// canBeNull = null; // with strictNullChecks set to true, errors: Type 'null' is not assignable to type 'number'.
let canBeNull: number | null = 12;
let canAlsoBeNull; // undefined
canAlsoBeNull = null;

let canThisBeNull = null;
// canThisBeNull = 12; // with strictNullChecks set to true, errors: Type '12' is not assignable to type 'null'.
