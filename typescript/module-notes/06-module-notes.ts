namespace Module6 {
  const PI = 3.14159;

  export function calculateCircumference(diameter: number) {
    console.log(PI); // 3.14159
    return diameter * PI;
  }

  export function calculateRectangle(width: number, length: number) {
    return width * length;
  }
}

const PI = 2.99; // Doesn't collide with PI inside the namespace.

console.log(Module6.calculateRectangle(10,20));
console.log(Module6.calculateCircumference(5));
console.log(PI);  // 2.99

/**
 * Disadvantages:
 * 
 * - Must be imported in the correct order.
 * - Can be difficult to know which files have which dependencies. (ES6 is much more declarative.)
 */