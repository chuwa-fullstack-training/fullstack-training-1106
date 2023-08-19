// union
function printId(id: number | string) {
  console.log('Your ID is: ' + id);
  // console.log(id.toUpperCase());
}

printId(101);
printId('202');

function getFirstTwo(input: number[] | string) {
  return input.slice(0, 2);
}

getFirstTwo([1, 2, 3, 4]);
getFirstTwo('Hello');

function move(direction: 'up' | 'down' | 'left' | 'right', distance: number) {
  console.log(`Moving ${distance} steps ${direction}`);
}

move('up', 10);
move('down', 20);
move('north', 30);

// narrowing
function printId3(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId3('1a2s3d');
