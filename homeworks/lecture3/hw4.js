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
    let p = (this.a + this.b + this.c) / 2;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
}
// 测试用例：
const t1 = new Triangle(3, 4, 5);
console.log("周长：", t1.getPerimeter());
console.log("面积：", t1.getArea());
const t2 = new Triangle(5, 12, 13);
console.log("周长：", t2.getPerimeter());
console.log("面积：", t2.getArea());

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
const c = new Circle(1);
console.log("面积：", c.getArea());
console.log("周长：", c.getCircumference());

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
        let p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

}
class Circle1 extends Shape1 {
    constructor(r) {
        super();
        this.type = 'circle';
        this.r = r;
    }
    getArea() {
        return Math.PI * this.r * this.r;
    }
    getCircumference() {
        return 2 * Math.PI * this.r;
    }
}
// 测试用例：
const t3 = new Triangle1(3, 4, 5);
console.log("周长：", t1.getPerimeter());
console.log("面积：", t1.getArea());
const t4 = new Triangle1(5, 12, 13);
console.log("周长：", t2.getPerimeter());
console.log("面积：", t2.getArea());
const c1 = new Circle1(1);
console.log("面积：", c1.getArea());
console.log("周长：", c1.getCircumference());