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

// 6. change all code above to use ES6 class syntax\
Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c
}

Triangle.prototype.getArea = function(){
    let s = (this.a + this.b + this.c) / 2;

    let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return area;
}

t = new Triangle(3, 4, 5);
console.log(t.getPerimeter());
console.log(t.getArea());

function Circle(r) {
    this.type = 'circle';
    this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function(){
    return Math.PI * this.r * this.r;
}

Circle.prototype.circumference = function(){

    return 2*Math.PI*this.r;
}

t = new Circle(3);
console.log(t.area());
console.log(t.circumference());

// 6. change all code above to use ES6 class syntax\
/*
class Shape{
    constructor(shape = 'shape'){
        this.type = shape;
    }

    getType(){
        return this.type;
    }
}

class Triangle extends Shape{
    constructor(a, b, c){
        super('triangle');
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter(){
        return this.a + this.b + this.c;
    }

    getArea(){
        let s = (this.a + this.b + this.c) / 2;

        let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

        return area;
    }
}

class Circle extends Shape{
    constructor(r){
        super('circle');
        this.r = r;
    }

    area(){
        return Math.PI * this.r * this.r;
    }

    circumference(){
        return 2*Math.PI*this.r;
    }
}*/