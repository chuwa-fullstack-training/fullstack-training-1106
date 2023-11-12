// 6. change all code above to use ES6 class syntax
class Shape {
  constructor(type='shape') {
    this.type = type;
  }

  getType() {
    return this.type;
  }
}

// Triangle
class Triangle extends Shape{
  constructor(a, b, c) {
    super('triangle');
    this.a = a;
    this.b = b;
    this.c = c; 
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const s = this.getPerimeter() / 2;
    return (s*(s-this.a)*(s-this.b)*(s-this.c))**0.5;
  }
}

// Circle
class Circle extends Shape{
  constructor(r) {
    super('circle');
    this.r = r;
  }

  getPerimeter() {
    return 2 * Math.PI * this.r;
  }

  getArea() {
    return Math.PI * this.r**2;
  }
}

// test triangle 1
var tri1 = new Triangle(3, 4, 5);
console.log(tri1.type);
console.log(tri1.getPerimeter());
console.log(tri1.getArea());
console.log("===========================");

// test triangle 2
var tri2 = new Triangle(6, 8, 10);
console.log(tri2.type);
console.log(tri2.getPerimeter());
console.log(tri2.getArea());
console.log("===========================");

// test circle
var circle = new Circle(3);
console.log(circle.type);
console.log(circle.getPerimeter());
console.log(circle.getArea());

