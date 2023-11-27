/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    const solutions = [];
  
    for (let c1 = 0; c1 <= 48; c1++) {
      for (let c5 = 0; c5 <= 10; c5++) {
        for (let c25 = 0; c25 <= 2; c25++) {
          const c50 = (48 - c1 - 5 * c5 - 25 * c25) / 50;
          
          if (Number.isInteger(c50) && c1 + 5 * c5 + 25 * c25 + 50 * c50 === 100) {
            solutions.push([c1, c5, c25, c50]);
            if (solutions.length === 2) {
              return solutions;
            }
          }
        }
      }
    }
  
    return solutions;
  }
  
  // Find and print two solutions
  const solutions = pickCoins();
  console.log("Solution 1:", solutions[0]);
  console.log("Solution 2:", solutions[1]);
  
  
