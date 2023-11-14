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
// 2. implement a method getArea for Triangle class
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}
Triangle.prototype.getArea = function () {
    let s = (this.a + this.b + this.c) / 2;
    let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return area;
}

let t = new Triangle(3, 4, 5);
console.log(t.getType());
console.log(t.getPerimeter() === 3 + 4 + 5);
console.log(t.getArea() === 3 * 4 / 2);

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(r) {
    Shape.call(this);
    this.type = 'circle';
    this.radius = r;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
// 4. implement a method area for Circle class
Circle.prototype.getArea = function () {
    return this.radius ** 2 * Math.PI;
}
// 5. implement a method circumference for Circle class
Circle.prototype.getCircumference = function () {
    return 2 * this.radius * Math.PI;
}
let c = new Circle(3);
console.log(c.getType());
console.log(c.constructor === Circle);
console.log(c.getArea() === 3 * 3 * Math.PI);
console.log(c.getCircumference() === 2 * 3 * Math.PI);
// 6. change all code above to use ES6 class syntax

class Shape2 {
    constructor() {
        this.type = 'shape';
    }
    getType() {
        return this.type;
    }
}
class Triangle2 extends Shape2 {
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
        let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return area;
    }
}

class Circle2 extends Shape2 {
    constructor(r) {
        super();
        this.type = "circle";
        this.radius = r;
    }
    getCircumference() {
        return 2 * this.radius * Math.PI;
    }
    getArea() {
        return this.radius ** 2 * Math.PI;
    }
}
let t2 = new Triangle2(3, 4, 5);
console.log(t2.getType());
console.log(t2.constructor === Triangle2);
console.log(t2.getPerimeter() === 3 + 4 + 5);
console.log(t2.getArea() === 3 * 4 / 2);

let c2 = new Circle2(3);
console.log(c2.getType());
console.log(c2.constructor === Circle2);
console.log(c2.getArea() === 3 * 3 * Math.PI);
console.log(c2.getCircumference() === 2 * 3 * Math.PI);