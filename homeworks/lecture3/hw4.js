{
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
Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c;
}
// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function(){
    let s = this.getPerimeter() /2;
    return Math.sqrt(s * (s - this.a) *(s - this.b) *(s - this.c));
}
// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(radius){
    this.radius = radius;
    this.type = 'circle';
//    this. __proto__ = Shape.prototype;//this doesn't work
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// 4. implement a method area for Circle class
Circle.prototype.area = function(){
    return (Math.PI * this.radius * this.radius);
}
// 5. implement a method circumference for Circle class
Circle.prototype.circumference = function(){
    return (2 * Math.PI * this.radius);
}
/////////// test cases below /////////////////////////////////
console.log("function inheritance test cases: \n");
let myTria = new Triangle(3,4,5);
console.log('perimeter: ',myTria.getPerimeter());
console.log('perimeter: ',myTria.getArea());
let myCircle = new Circle(1);
console.log('type: ',myCircle.getType());
console.log('circle area: ',myCircle.area());
console.log('circle circumference: ',myCircle.circumference());

}

{
// 6. change all code above to use ES6 class syntax
class Shape{
    type;
    constructor(){
        this.type = 'shape';
    }
    getType = function() {
        return this.type;
    }
}
class Triangle extends Shape{
    a;
    b;
    c;
    constructor(a,b,c){
        super();
        this.a = a;
        this.b = b;
        this.c = c;
        this.type = 'triangle';
    }
    getPerimeter(){
        return this.a + this.b + this.c;
    }
    getArea(){
        let s = this.getPerimeter() /2;
        return Math.sqrt(s * (s - this.a) *(s - this.b) *(s - this.c));
    }
}

class Circle extends Shape{

    constructor(radius){
        super();
        this.radius = radius;
        this.type = 'circle';
    }
    area(){
        return (Math.PI * this.radius * this.radius);
    }
    
    circumference = function(){
        return (2 * Math.PI * this.radius);
    }
}


/////////// test cases below /////////////////////////////////
console.log("\nclass inheritance test cases: \n");
let myTria = new Triangle(3,4,5);
console.log('perimeter: ',myTria.getPerimeter());
console.log('perimeter: ',myTria.getArea());
let myCircle = new Circle(1);
console.log('type: ',myCircle.getType());
console.log('circle area: ',myCircle.area());
console.log('circle circumference: ',myCircle.circumference());
}