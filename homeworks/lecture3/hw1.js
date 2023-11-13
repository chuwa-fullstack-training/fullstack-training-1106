/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  const solutions = [];

  function findSolutions() {
    for (let a = 0; a <= 48; a++) {
      for (let b = 0; b <= 48; b++) {
        for (let c = 0; c <= 48; c++) {
          let d = 48 - a - b - c;
          if (d >= 0 && (a + 5 * b + 25 * c + 50 * d === 100)) {
            solutions.push([a, b, c, d]);
            if (solutions.length === 2) return;
          }
        }
      }
    }
  }

  findSolutions();
  console.log(solutions[0]);
  console.log(solutions[1]);
}

pickCoins();


