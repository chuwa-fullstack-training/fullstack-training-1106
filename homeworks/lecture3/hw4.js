function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function () {
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
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}

// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function () {
    // using Heron's Formula: Area of triangle = √(s(s-a)(s-b)(s-c))
    let s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
}

// test cases
const triangle1 = new Triangle(3, 4, 5);
const triangle2 = new Triangle(5, 5, 5);

console.assert(triangle1.getPerimeter() === 12, "Test 1 failed");
console.assert(triangle2.getPerimeter() === 15, "Test 2 failed");
console.assert(triangle1.getArea() === 6, "Test 3 failed");
console.assert(Number(triangle2.getArea().toFixed(3)) === 10.825, "Test 4 failed");

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(r) {
    this.type = 'circle';
    this.r = r;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// 4. implement a method area for Circle class
Circle.prototype.getArea = function () {
    return Math.PI * this.r * this.r;
}

// 5. implement a method circumference for Circle class
Circle.prototype.getCircumference = function () {
    return 2 * Math.PI * this.r;
}

// test cases
const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.assert(Number(circle1.getArea().toFixed(3)) === 3.142, "Test 5 failed");
console.assert(Number(circle2.getArea().toFixed(3)) === 12.566, "Test 6 failed");
console.assert(Number(circle1.getCircumference().toFixed(3)) === 6.283, "Test 7 failed");
console.assert(Number(circle2.getCircumference().toFixed(3)) === 12.566, "Test 8 failed");

// 6. change all code above to use ES6 class syntax

// implement shape
class ShapeClass {
    constructor() {
        this.type = 'shape';
    }

    getType() {
        return this.type;
    }
}

// implement triangle 
class TriangleClass extends ShapeClass {
    constructor(a, b, c) {
        super("triangle");
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

// implement circle
class CircleClass extends ShapeClass {
    constructor(r) {
        super("circle");
        this.r = r;
    }
    getArea() {
        return Math.PI * this.r * this.r;
    }
    getCircumference() {
        return 2 * Math.PI * this.r;
    }
}

// test cases
const triangle3 = new TriangleClass(3, 4, 5);
const triangle4 = new TriangleClass(5, 5, 5);

console.assert(triangle3.getPerimeter() === 12, "Test 9 failed");
console.assert(triangle4.getPerimeter() === 15, "Test 10 failed");
console.assert(triangle3.getArea() === 6, "Test 11 failed");
console.assert(Number(triangle4.getArea().toFixed(3)) === 10.825, "Test 12 failed");

const circle3 = new CircleClass(1);
const circle4 = new CircleClass(2);

console.assert(Number(circle3.getArea().toFixed(3)) === 3.142, "Test 13 failed");
console.assert(Number(circle4.getArea().toFixed(3)) === 12.566, "Test 14 failed");
console.assert(Number(circle3.getCircumference().toFixed(3)) === 6.283, "Test 15 failed");
console.assert(Number(circle4.getCircumference().toFixed(3)) === 12.566, "Test 16 failed");