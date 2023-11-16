// Conditional Statements (if-else)
/* test comment */

let num = 10;
let another = 20;

if (num > 0) {
  console.log('Number is positive');
} else if (num < 0) {
  console.log('Number is negative');
} else {
  console.log('Number is zero');
}

// Loop Statements (for loop)
for (let i = 0; i < 5; i++) {
  console.log('Iteration:', i);
}

// Loop Statements (while loop)
let j = 0;
while (j < 5) {
  console.log('Iteration:', j);
  j++;
}

// Jump Statements (break)
for (let k = 0; k < 10; k++) {
  if (k === 5) {
    break;
  }
  console.log('Iteration:', k);
}

// Jump Statements (continue)
for (let m = 0; m < 5; m++) {
  if (m === 2) {
    continue;
  }
  console.log('Iteration:', m);
}

function test(num) {
  if (num == 0) {
    return 0;
  }
  if (num < 0) {
    throw new Error('Number is negative');
  }
  console.log('Number is positive');
}

let a = test(-1);

// age < 18 ? '' : age < 45 ? '' : age < 60 ? '' : '';

let b = { id: 1, name: 'John' };
