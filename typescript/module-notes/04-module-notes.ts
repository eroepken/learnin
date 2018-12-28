// let & const
let variable = "Test";
variable = "Another test";

const maxLevels = 100;
// maxLevels = 99; // Cannot assign to 'maxLevels' because it is a constant.

// Block scope
function reset() {
  let variable = null;
  // console.log(variable); // null
}
reset();
// console.log(variable); // "Another test"

// Arrow functions
const addNumbers = function(number1: number, number2: number): number {
  return number1+number2;
}
// console.log(addNumbers(6, 7));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
// console.log(multiplyNumbers(6, 5));

const greet = (): void => {
  console.log('Hello!');
};
// greet();

// Default parameters
const countdown = (start: number = 10): void => {
  while(start > 0) {
    start--;
  }
  // console.log('Done', start);
}
countdown();

// Rest & Spread
const numbers = [-1, 0, 1, 2, 3, 4, 5];
// console.log(Math.max(...numbers));

function makeArray(...args: number[]) {
  return args;
}
// console.log(makeArray(1, 2, 6));

// Using tuples for rest expressions
function printInfo(...info: [string, number]) {
  console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
// printInfo('Ellie', 30);

// Destructuring
const myHobbies = ['Cooking', 'Reading'];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = {username: 'Ellie', age: 30};
const {username: myName, age: myAge} = userData;
console.log(myName, myAge);

// Template literals
const userName = 'Ellie';
const greeting = `Hello, I'm ${userName}.
I love to read!
Nice to meet you.`;
console.log(greeting);
