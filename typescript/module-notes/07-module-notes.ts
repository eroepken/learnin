interface NamedPerson {
  firstName: string;
  age?: number; // ? means optional
  [propName: string]: any;  // This makes room for other properties that you don't know the name of yet. Line 19 works with this.
  greet(lastName: string): void;
}

function greet(person: NamedPerson) {
  console.log('Hello, ' + person.firstName);
}

function changeName(person: NamedPerson) {
  person.firstName = "Anna";
}

const person = {
  firstName: "Ellie",
  greet(lastName: string) {
    console.log('Hi, I am ' + this.firstName + ' ' + lastName);
  }
}

// greet({firstName: "Ellie", age: 30, hobbies: ['cooking', 'reading']}); // Error: Object literal may only specify known properties, and 'age' does not exist in type 'NamedPerson'.
greet(person);
changeName(person);
greet(person);
person.greet('Anything');

class Person implements NamedPerson {
  firstName: string;
  lastName: string;
  greet(lastName: string) {
    console.log('Hallo, Ich bin ' + this.firstName + ' ' + lastName);
  }
}

const myPerson = new Person();
myPerson.firstName = 'Hans';
myPerson.lastName = 'Gruber';
greet(myPerson);
myPerson.greet(myPerson.lastName);

// Function Types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(val1: number, val2: number) {
  return (val1 + val2) * 2;
}

console.log(myDoubleFunction(10, 20));

// Interface Inheritance
interface AgedPerson extends NamedPerson {
  age: number;  // Inherits requirements from NamedPerson, but this line makes the age property required.
}

const oldPerson: AgedPerson = {
  firstName: 'Ellie',
  age: 30,
  greet(lastName: string) {
    console.log('Hello');
  }
}

console.log(oldPerson);