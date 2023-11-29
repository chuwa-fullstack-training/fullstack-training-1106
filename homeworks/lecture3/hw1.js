/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    let solutions = 0;

    for (let cents1 = 0; cents1 <= 48 && solutions < 2; cents1++) {
        for (let cents5 = 0; cents5 <= 20 && solutions < 2; cents5++) {
            for (let cents25 = 0; cents25 <= 4 && solutions < 2; cents25++) {
                for (let cents50 = 0; cents50 <= 1 && solutions < 2; cents50++) {
                    const totalCents = cents1 + cents5 * 5 + cents25 * 25 + cents50 * 50;

                    if (totalCents === 100) {
                        console.log(
                            cents1 + 'x1c + ' + cents5 + 'x5c + ' + cents25 + 'x25c + ' + cents50 + 'x50c = $1'
                        );

                        solutions++;
                    }
                }
            }
        }
    }
}

pickCoins();



