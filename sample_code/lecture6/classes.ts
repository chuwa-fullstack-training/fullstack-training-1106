class Point {
  x: number;
  y: number;
} // --strictPropertyInitialization = false

const pt = new Point();
pt.x = 1;
pt.y = 2;

class Shape {
  readonly shape: string = "Shape";

  constructor(shape?: string) {
    if (shape) this.shape = shape;
  }
}

const shape = new Shape();
console.log(shape.shape); // Shape
const shape2 = new Shape("Circle");
console.log(shape2.shape); // Circle
shape.shape = "Square"; // Cannot assign to 'shape' because it is a read-only property.

// Constructor overloads
class Point2 {
  x: number;
  y: number;

  constructor(x: number, y: number);
  constructor(x: number);
  constructor(x: number, y?: number) {
    this.x = x;
    this.y = y || 0;
  }
}

// methods
class Point3 {
  x: number;
  y: number;

  constructor();
  constructor(x: number);
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  dist(point: Point3 = new Point3()): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

const originPt = new Point3();
const pt3 = new Point3(3, 4);
console.log(pt3.dist(new Point3(1, 1)));

// Inheritance
interface Animal {
  type: string;
  name: string;
  age: number;

  speak(): void;
}

class Dog implements Animal {
  type: string = "dog";
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak(): void {
    console.log("woof");
  }
}

// member visibility
class Animal2 {
  private type: string = "animal";

  private speak(): void {
    console.log("animal speak");
  }
}

class Dog2 extends Animal2 {
  speak(): void {
    console.log("woof");
  }
}

class Base {
  protected type: string = "base";
}

class Derived extends Base {
  printType(): void {
    console.log(this.type);
  }
}

const base = new Base();
const derived = new Derived();
derived.printType(); // base
base.type; // Property 'type' is protected and only accessible within class 'Base' and its subclasses.

// cross-instance private access
class A {
  private x: number;

  constructor(x: number = 0) {
    this.x = x;
  }

  public sameAs(other: A = new A()): boolean {
    return other.x === this.x;
  }
}

// static blocks in classes
class B {
  static x: number = 0;

  static {
    B.x = 1;
  }
}

let staticValue = B.x; // 1

// Generic classes
class Box<T> {
  contents: T;

  constructor(value: T) {
    this.contents = value;
  }
}

const box = new Box<string>("hello");

// `this`-based type guards
class Animal3 {
  isDog(): this is Dog3 {
    return this instanceof Dog3;
  }

  isCat(): this is Cat3 {
    return this instanceof Cat3;
  }
}

class Dog3 extends Animal3 {}

class Cat3 extends Animal3 {}

let dog = new Dog3();
dog.isDog(); // true
dog.isCat(); // false

export {};
