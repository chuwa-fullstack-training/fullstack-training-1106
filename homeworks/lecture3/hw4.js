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
    let s = (this.a + this.b + this.c)/2;
    return Math.sqrt(s* (s-this.a) * (s-this.b) * (s-this.c));
}

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(radius) {
    this.type = 'circle';
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// 4. implement a method area for Circle class
Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius;
}

// 5. implement a method circumference for Circle class
Circle.prototype.circumference = function() {
    return Math.PI * 2 * this.radius;
}

// test cases:
var t = new Triangle(3, 6, 7);
console.log(t.constructor === Triangle); // Output: true 
console.log(t.getType()); // Output: triangle 
console.log(t.getPerimeter()); // Output: 16 
console.log(t.getArea());  // Output: 8.94427190999916

console.log('-------------------'); 

var c = new Circle(3);
console.log(c.constructor === Circle); // Output: true 
console.log(c.getType()); // Output: circle 
console.log(c.area()); // Output: 28.274333882308138 
console.log(c.circumference());  // Output: 18.84955592153876




// 6. change all code above to use ES6 class syntax
class Shape {
    constructor() {
        this.type = 'shape'
    }

    getType() {
        return this.type;
    }
}

class Triangle extends Shape {
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
        let s = (this.a + this.b + this.c)/2;
        return Math.sqrt(s* (s-this.a) * (s-this.b) * (s-this.c));
    }
}


class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = 'circle';
        this.radius = radius;
    }

    area () {
        return Math.PI * this.radius * this.radius;
    }

    circumference () {
        return Math.PI * 2 * this.radius;
    }

}

// test cases:
var t = new Triangle(3, 6, 7);
console.log(t.constructor === Triangle); // Output: true 
console.log(t.getType()); // Output: triangle 
console.log(t.getPerimeter()); // Output: 16 
console.log(t.getArea());  // Output: 8.94427190999916

console.log('-------------------'); 

var c = new Circle(3);
console.log(c.constructor === Circle); // Output: true 
console.log(c.getType()); // Output: circle 
console.log(c.area()); // Output: 28.274333882308138 
console.log(c.circumference());  // Output: 18.84955592153876