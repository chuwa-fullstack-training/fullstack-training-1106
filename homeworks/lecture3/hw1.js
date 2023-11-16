/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    // solution: we pick the smallest coin first, then we replace the smaller coin with bigger coin until we reach the goal
    let calc = dest => {
        let res = [];
        let denomination = [49, 24, 4]; // @TODO: since it is impossible to put 50c in the answer, so we can safely remove 49 if needed
        if (denomination.includes(dest))
            res = [[dest]];
        denomination.forEach(deno => {
            if (dest >= deno)
                res = res.concat(calc(dest-deno).map(item => item.concat(deno)));
        })
        return res;
    }
    let solutions = calc(52); // assume we have 48 * 1c, we need 52c more to have 1 dollar
    solutions = solutions
        .map(sol => { // convert to count, make it more readable
            let count = {}, coins = 0;
            for (let ele of sol) {
                count[ele+1] = (count[ele+1] ?? 0) + 1;
                coins += 1;
            }
            count[1] = 48 - coins;
            return count;
        })
        .filter((value, index, self) => // remove duplicate
            index === self.findIndex((t) => t['1'] === value['1'])
        )
    return [solutions[0], solutions[1]]
}

module.exports = pickCoins;