/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const solutions = [];
    var count = 2;

    for (let oneCent = 0; oneCent <= 48; oneCent++) {
        for (let fiveCents = 0; fiveCents <= 48; fiveCents++) {
            for (let twentyFiveCents = 0; twentyFiveCents <= 48; twentyFiveCents++) {
                for (let fiftyCents = 0; fiftyCents <= 48; fiftyCents++) {
                    if (oneCent + 5 * fiveCents + 25 * twentyFiveCents + 50 * fiftyCents === 100 && oneCent + fiveCents + twentyFiveCents + fiftyCents === 48) {
                        solutions.push([oneCent, fiveCents, twentyFiveCents, fiftyCents]);
                        count--;
                    }
                    if (count === 0) return solutions;
                }
                if (count === 0) return solutions;
            }
            if (count === 0) return solutions;
        }
        if (count === 0) return solutions;
    }

    return solutions;
}

const res = pickCoins();
console.log(res[0]);
console.log(res[1]);