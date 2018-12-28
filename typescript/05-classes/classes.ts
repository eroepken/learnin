class Person {
  name: string;
  private type: string = 'person';
  protected age: number;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  setAge(age: number): void {
    this.age = age;

    if (age >= 30) {
      this.setType('Old woman');
    } else {
      this.setType('Young woman');
    }
  }

  setType (type: string): void {
    this.type = type;
  }

  printAge(): void {
    console.log(this.age);
  }

  printType(): void {
    console.log(this.type);
  }
}

// const me = new Person('Ellie', 'ornateapple');
// console.log(me);
// me.setAge(30);
// me.printType();

// function setUser(user: Person): void {
//   const myUser = user;
// }

class Ellie extends Person {
  constructor() {
    super('Ellie', 'ornateapple');
    this.setAge(30);
  }
}

// const me = new Ellie();
// console.log(me);

// Getters & Setters
class Plant {
  private _species: string = 'Default';

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    }
  }

  get species() {
    return this._species;
  }
}

// const plant = new Plant();
// console.log(plant.species);
// plant.species = 'AB';
// console.log(plant.species);
// plant.species = 'ABCD';
// console.log(plant.species);

// Static props/methods
class Helpers {
  static PI: number = 3.14159;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
// console.log(2 * Helpers.PI);
// console.log(Helpers.calcCircumference(8));

// Abstract Classes
abstract class Project {
  projectName: string = 'Default';
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string) {
    this.projectName = name;
  }
}

// let project = new ITProject();
// console.log(project);
// project.changeName('New IT Project');
// console.log(project);
// console.log(project.calcBudget());

// Private constructors
// SINGLETON
class OnlyOne {
  private static instance: OnlyOne;
  private constructor(public readonly name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne('The Only One'); // Constructor of class 'OnlyOne' is private and only accessible within the class declaration.
let right = OnlyOne.getInstance();
// right.name = 'WW Visitor Site'; // Cannot assign to 'name' because it is a read-only property.
console.log(right.name);
