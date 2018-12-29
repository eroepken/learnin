// Compile this using the command: tsc app.ts --outFile app.js
// It doesn't compile everything into one file otherwise.
/// <reference path="math.ts" />

console.log(MyMath.Rectangle.calculateRectangle(10,20));
console.log(MyMath.Circle.calculateCircumference(5));