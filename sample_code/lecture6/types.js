"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type: number
var count = 5;
// type: string
var firstName = 'Aaron';
// type: boolean
var checked = true;
// type: array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// type: tuple
var x = ['hello', 10];
// type: enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var up = Direction.Up;
// type: any
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = [1, 2, 3];
var another = notSure;
// type: unknown
var userInput;
userInput = 5;
userInput = 'Aaron';
var userName = userInput;
var userName2 = userInput;
// let userName3: number = notSure;
// type: object
var obj1 = { name: 'Aaron' };
var obj2 = function () { };
var obj3 = [1, 2, 3];
// type: void
function logMessage() {
    console.log('This is a message');
}
var unusable = undefined || null; // strictNullChecks - false
// type: never
function error(message) {
    throw new Error(message);
}
function controlFlowAnalysisWithNever(foo) {
    if (typeof foo === 'string') {
        // string
    }
    else if (typeof foo === 'number') {
        // number
    }
    else {
        // never
        var check = foo;
    }
}
// type Foo = string | number | boolean;
// type: null & undefined
var n = null;
var u = undefined;
var n2 = null;
var u2 = undefined;
