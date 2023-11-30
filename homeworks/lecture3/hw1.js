/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const coins = [1, 5, 25, 50];
    const target = 100;
    const maxCount = 48;

    let result = [];

    for(let penny = 0; penny <= maxCount; penny++) {
        for(let nickel = 0; nickel <= maxCount; nickel++) {
            for(let quarter = 0; quarter <= maxCount; quarter++) {
                for(let halfDollar = 0; halfDollar <= maxCount; halfDollar++) {
                    if(penny + nickel + quarter + halfDollar === maxCount) {
                        if(penny * coins[0] + nickel * coins[1] + quarter * coins[2] + halfDollar * coins[3] === target) {
                            result.push([penny, nickel, quarter, halfDollar]);
                        }
                    }
                }
            }
        }
    }
    // print out 2 solutions
    while(result.length > 2) {
        result.pop();
    }
    return result;
}

console.log(pickCoins());