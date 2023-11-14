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
    this.__proto__ = Triangle.prototype;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c
};

Triangle.prototype.getArea = function () {
    let s = this.getPerimeter() / 2;
    return Math.sqrt(s *((s - this.a) * (s - this.b) * (s - this.c)));
};

function Circle(r){
    this.type = 'circle'
    this.radius = r;
    this.__proto__ = Circle.prototype;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
    return Math.PI * this.radius**2
}

Circle.prototype.circumference = function () {
    return 2 * this.radius * Math.PI
}

// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax

class Shape {
    constructor(type){
        this.type = 'shape';
    }

    getType () {
        return this.type
    }
}

class Triangle extends Shape{
    constructor(a,b,c){
        super();
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter () {
        return this.a + this.b + this.c;
    }

    getArea () {
        let s = this.getPerimeter() / 2;
    return Math.sqrt(s *((s - this.a) * (s - this.b) * (s - this.c)));
    }
}

class Circle extends Shape{
    constructor(r){
        super();
        this.type = 'circle';
        this.radius = r;
    }

    area () {
        return Math.PI * this.radius**2
    }

    circumference () {
        return 2 * this.radius * Math.PI
    }
}