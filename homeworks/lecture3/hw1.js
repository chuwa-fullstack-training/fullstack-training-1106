/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    //there are unlimited numbers of 1c, 5c, 25c, 50c, pick 48 coins to have 1 dollar
    // implement here
    let count = 0; // count the number of solutions
    for (let one = 0; one <= 48; one++){
        for (let five = 0; five <= 20; five++){
            for (let t_five = 0; t_five <= 4; t_five++){
                for (let fifty = 0; fifty <= 2; fifty++){
                    if ((one + five + t_five+fifty === 48) && (one + 5*five + 25*t_five+ 50*fifty === 100)){
                        count++;
                        if (count > 2) break;
                        console.log(`Solution ${count}: ${one} 1c, ${five} 5c, ${t_five} 25c, ${fifty} 50c`);
                        
                    }
                }
            }
        }
    }
        
}
pickCoins();
