// Exercise 1 - How was your TypeScript Class?
class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk() {
    console.log("Toooooooooot!");
  };

  accelerate (speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class baseObject {
  width = 0;
  length = 0;
};

class Rectangle extends baseObject {
  calcSize(): number {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
  private _firstName: string = "";

  get firstName() {
      return this._firstName;
  }
  set firstName(value: string) {
      if (value.length > 3) {
          this._firstName = value;
      }
      else {
          this._firstName = "";
      }
  }
}
let person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
