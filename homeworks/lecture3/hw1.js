/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  const targetAmount = 100; // 100 cents = $1
  const res = [];

  for (let c1 = 0; c1 <= 48; c1++) {
    for (let c5 = 0; c5 <= 48; c5++) {
      for (let c25 = 0; c25 <= 48; c25++) {
        const c50 = 48 - c1 - c5 - c25;

        if (c1 + 5 * c5 + 25 * c25 + 50 * c50 === targetAmount && c50 >= 0) {
          res.push({ "1c": c1, "5c": c5, "25c": c25, "50c": c50 });
        }
      }
    }
  }

  return res.slice(0, 2);
}
console.log(pickCoins());
