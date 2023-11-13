function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function() {
    return this.type;
}

function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
}
// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function() {
    // get area by Heron's formula
    let s = (this.a + this.b + this.c) / 2;     // semi-perimeter
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
}
// test
const t1 = new Triangle(3, 4, 5);
console.log("t1 Perimeter: ", t1.getPerimeter());      // Perimeter:  12
console.log("t1 Area: ", t1.getArea());                // Area:  6

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(radius) {
    this.type = 'circle';
    this.r = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// 4. implement a method area for Circle class
Circle.prototype.getArea = function() {
    return Math.PI * this.r * this.r;
}
// 5. implement a method circumference for Circle class
Circle.prototype.getCircumference = function () {
    return 2 * Math.PI * this.r;
}
// test
const c1 = new Circle(3);
console.log("c1 Area: ", c1.getArea());                     // Area:  28.274333882308138
console.log("c1 Circumference: ", c1.getCircumference());   // Circumference:  18.84955592153876

// 6. change all code above to use ES6 class syntax
class Shape1 {
    constructor() {
        this.type = 'shape';
    }

    getType() {
        return this.type;
    }
}

class Triangle1 extends Shape1 {
    constructor(a, b, c) {
        super();
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }
    
    getArea() {
        let s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}
// test
const t2 = new Triangle1(3, 4, 5);
console.log("t2 Perimeter: ", t2.getPerimeter());      // Perimeter:  12
console.log("t2 Area: ", t2.getArea());                // Area:  6

class Circle1 extends Shape1 {
    constructor(radius) {
        super();
        this.type = 'circle';
        this.r = radius;
    }

    getArea() {
        return Math.PI * this.r * this.r;
    }

    getCircumference() {
        return 2 * Math.PI * this.r;
    }
}
// test
const c2 = new Circle(3);
console.log("c2 Area: ", c2.getArea());                     // Area:  28.274333882308138
console.log("c2 Circumference: ", c2.getCircumference());   // Circumference:  18.84955592153876