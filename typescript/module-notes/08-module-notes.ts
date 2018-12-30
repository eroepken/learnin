// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo('Ellie'));
console.log(echo(27));
console.log(echo({name: 'Ellie', age: 30}));

// Better Generic - Makes TypeScript aware of the return type.
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho('Ellie').length);
console.log(betterEcho<number>(27)); // This would error out if we used <string>
console.log(betterEcho({name: 'Ellie', age: 30}));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(4.50);
// testResults.push('string'); // Error: Argument of type '"string"' is not assignable to parameter of type 'number'.

// Arrays
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}
printAll<string>(['apples', 'bananas']);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('Something'));

// Generic Classes
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());