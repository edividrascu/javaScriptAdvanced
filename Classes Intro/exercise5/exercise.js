// Defina una clase llamada AreaCalculator. Dentro de él, crea un método estático que te permita calcular el
// área de la figura geométrica pasada como parámetro. El método te permitirá calcular el área del cuadrado,
// el rectángulo y el círculo.

class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure) {
    if (figure instanceof Square) {
      return "square is: " + figure.side * figure.side;
    } else if (figure instanceof Rectangle) {
      return "Rectangle is: " + figure.height * figure.width;
    } else if (figure instanceof Circle) {
     let area = Math.PI*(figure.radius**2) 
      return "Circle is: " + area;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
