// Converting string to number using parseInt
let stringInt = "42a";
let parsedInt = parseInt(stringInt);
console.log(Number(stringInt)); // same as parseInt(stringInt)
console.log(parsedInt); // Output: 42 (integer)

// Converting string to number using parseFloat
let stringFloat = "3.14";
let parsedFloat = parseFloat(stringFloat);
console.log(parsedFloat); // Output: 3.14 (float)

// Converting number to string using toString()
let number = 42;
let convertedString = number.toString();
console.log(convertedString); // Output: "42" (string)

// Converting string to boolean
let stringBoolean = "true";
let convertedBoolean = Boolean(stringBoolean);
console.log(convertedBoolean); // Output: true (boolean)

// Converting number to boolean
let numberBoolean = 0;
let convertedBoolean2 = Boolean(numberBoolean);
console.log(convertedBoolean2); // Output: false (boolean)

// Converting boolean to number
let booleanValue = true;
let convertedNumber2 = Number(booleanValue);
console.log(convertedNumber2); // Output: 1 (number)

// Converting boolean to string
let booleanString = false;
let convertedString2 = String(booleanString);
console.log(convertedString2); // Output: "false" (string)
