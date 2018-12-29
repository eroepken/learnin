namespace MyMath {
  export namespace Circle {
    const PI = 3.14159;

    export function calculateCircumference(diameter: number) {
      console.log(PI); // 3.14159
      return diameter * PI;
    }
  }

  export namespace Rectangle {
    export function calculateRectangle(width: number, length: number) {
      return width * length;
    }
  }
}