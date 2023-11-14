/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let rst = [];
    for (let oneC = 0; oneC <=48; oneC++){
        for (let fiveC = 0; fiveC <=48; fiveC++){
            for (let twnFC = 0; twnFC <=48; twnFC++){
                for (let fiftyC = 0; fiftyC <=48; fiftyC++){
                    let totalCoins = oneC + fiveC + twnFC + fiftyC;
                    let totalValue = oneC * 1 + fiveC * 5 + twnFC * 25 + fiftyC * 50;

                    if (totalCoins === 48 && totalValue === 100){
                        rst.push([oneC, fiveC, twnFC, fiftyC]);
                    }
                    if (rst.length === 2){
                        console.log(rst[0]);
                        console.log(rst[1]);
                        return rst;
                    }
                }
            }
        }
    }
}
