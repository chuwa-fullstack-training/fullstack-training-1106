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
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax

Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
}

Triangle.prototype.getArea = function() {
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
}

const t = new Triangle(3, 4, 5);
console.log(t.getPerimeter());
console.log(t.getArea());

function Circle(radius) {
    this.type = 'circle';
    this.r = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.getArea = function() {
    return Math.PI * this.r * this.r;
}

Circle.prototype.getCircumference = function() {
    return 2 * Math.PI * this.r;
}

const c = new Circle(3);
console.log(c.getCircumference());
console.log(c.getArea());


class ShapeClass {
    constructor() {
        this.type = 'shape';
    }

    getType() {
        return this.type;
    }
}

class TriangleClass extends ShapeClass {
    constructor(a, b, c) {
        super();
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea() {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }
}
console.log("class results:")

const tClass = new TriangleClass(3, 4, 5);
console.log(tClass.getType());
console.log(tClass.getArea());
console.log(tClass.getPerimeter());

class CircleClass extends ShapeClass {
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

const cClass = new CircleClass(3);
console.log(cClass.getType());
console.log(cClass.getCircumference());
console.log(cClass.getArea());