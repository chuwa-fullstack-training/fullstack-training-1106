function print() {
  function printNumber(string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(string);
        resolve();
      }, 1000);
    });
  }

  // Using a loop to print 1, 2, 3 with a delay of 1 second between each number
  printNumber("green")
    .then(() => printNumber("y"))
    .then(() => printNumber("r"))
    .then(() => {
      console.log("Done");
    });
}

print();