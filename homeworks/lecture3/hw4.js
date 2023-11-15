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
Triangle.prototype.constructor = Triangle; //在Circle里不加这行好像也没事啊，为什么？？？

// your code goes here
// 1. implement a method getPerimeter for Triangle class
Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c;
}

let tran = new Triangle(3,4,6);
console.log(tran.getPerimeter());
// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function(){
    let s = (this.a+this.b+this.c) / 2;
    let ans = Math.sqrt(s * (s-this.a) * (s-this.b) * (s-this.c));
    return ans
}
console.log(tran.getArea());

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(radius){
    this.type = "circle";
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
// 4. implement a method area for Circle class
Circle.prototype.getArea = function(){
    return Math.PI * this.radius * this.radius;
}

var circle = new Circle(3);
console.log(circle.getArea());
// 5. implement a method circumference for Circle class
Circle.prototype.circumference = function(){
    return Math.PI * this.radius * 2;
}
console.log(circle.circumference());
// 6. change all code above to use ES6 class syntax

class ShapeAlias{
    constructor(type){
        this.type = type;
    }
    getType(){
        return this.type;
    }
}

class TriangleAlias extends ShapeAlias{
    constructor(a,b,c){
        super("triangle");
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter(){
        return this.a + this.b + this.c;
    }
    getArea(){
        let s = (this.a+this.b+this.c) / 2;
        let ans = Math.sqrt(s * (s-this.a) * (s-this.b) * (s-this.c));
        return ans
    }
}

class CircleAlias extends ShapeAlias{
    constructor(radius){
        super("circle");
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
    circumference(){
        return Math.PI * this.radius * 2;
    }
}

console.log("-------------------classes test----------------")
var triangleSub = new TriangleAlias(3,4,6);
console.log(triangleSub.getType())
console.log(triangleSub.getPerimeter());
console.log(triangleSub.getArea())

var circleSub = new CircleAlias(5);
console.log(circleSub.getType())
console.log(circleSub.getArea())
console.log(circleSub.circumference());
