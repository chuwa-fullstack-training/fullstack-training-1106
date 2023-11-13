class Shape {
    constructor() {
        this.type = 'shape';
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
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.type = 'circle';
        this.r = r;
    }

    circumference() {
        const pi = 3.14;
        return 2 * this.r * pi;
    }

    area() {
        const pi = 3.14;
        return pi * Math.pow(this.r, 2);
    }
}

const triangle = new Triangle(3, 4, 5);
console.log(triangle.getType()); // Output: triangle
console.log(triangle.getPerimeter()); // Output: 12
console.log(triangle.getArea()); // Output: 6

const circle = new Circle(4);
console.log(circle.getType()); // Output: circle
console.log(circle.area()); // Output: 50.26548245743669
console.log(circle.circumference()); // Output: 25.132741228718345
// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax