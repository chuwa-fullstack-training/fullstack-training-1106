/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  let solutions = [];

  for (let cents1 = 0; cents1 <= 48; cents1++) {
      for (let cents5 = 0; cents5 <= 48; cents5++) {
          for (let cents25 = 0; cents25 <= 48; cents25++) {
              for (let cents50 = 0; cents50 <= 48; cents50++) {
                  if (cents1 + 5 * cents5 + 25 * cents25 + 50 * cents50 === 100 &&
                      cents1 + cents5 + cents25 + cents50 === 48) {
                      solutions.push({
                          1: cents1,
                          5: cents5,
                          25: cents25,
                          50: cents50
                      });
                  }
              }
          }
      }
  }

  return solutions.slice(0, 2);
}


let result = pickCoins();
console.log(result);
  
  
