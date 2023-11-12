/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {

  const msg = [" 1c: ", " 5c: ", " 25c: ", " 50c: "];

  // method 1
  var method1 = [45, 1, 2, 0].map((x, i) => {
    return msg[i] + x;
  })
  console.log("method 1:\n" + method1.toString())

  // method 2
  var method2 = [35, 13, 0, 0].map((x, i) => {
    return msg[i] + x;
  })
  console.log("method 2:\n" + method2.toString())
}

pickCoins();