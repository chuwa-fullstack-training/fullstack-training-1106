/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    
    for (let a=0; a<48; a++) {
        for (let b=0; b<48; b++) {
            for (let c=0; c<48; c++) {
                const d = 48 - a - b - c;
                const curr_total = 1 * d + 5 * c + 25 * b + 50 * a;

                if (curr_total == 100) {
                    console.log(`We could pick ${twoDigit(d)} 1c coin, ${twoDigit(c)} 5c coin, ${twoDigit(b)} 25c coin, and ${twoDigit(a)} 50c coin.`);
                }
            }
        }
    }
    return;
}

function twoDigit(num) {
    return String(num).padStart(2, '0');
}

pickCoins();
