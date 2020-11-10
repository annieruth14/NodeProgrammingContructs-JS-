// 1.print a table of the powers of 2 that are less than or equal to 2^number till 256 is reached
const prompt = require('prompt-sync')();
{
    let number = parseInt(prompt("Enter a value of number for finding power of 2: "));
    let result = 1, i = 0;
    while(result <= 256 && i<= number) {
        console.log("for " + i + " : " + result);
        result = result * 2;
        i++;
    }
}

// 3. Flip a coin and print heads or tails accordingly 11 times
{
    const HEAD = 0;
    const TAIL = 1;
    let countHead = 0, countTail = 0;
    while(countTail < 11 || countTail < 11) {
        let coin = Math.floor(Math.random() * 10) % 2;
        if(coin == HEAD) {
            countHead++;
            console.log("Heads: "+ countHead);
        }
        else if (coin == TAIL) {
            countTail++
            console.log("Tails: "+ countTail);
        }
    }
   
}

// 4. gambler bets and wins
{
    const BET = 1;
    const WIN = 1;
    const LOSE = 0;
    const MAX_GOAL = 200;
    let money = 100, countWin = 0, bet = 0;
    console.log("Gambling program");
    while(money < MAX_GOAL && money != 0) {
        bet++
        let gamble = Math.floor(Math.random() * 10) % 2;
        if(gamble == WIN) {
            money = money + BET;
            countWin++;
        }
        else if(gamble == LOSE) {
            money = money - BET;
        }
    }
    console.log("Number of bets made: "+ bet + " times");
    console.log("Gambler won: "+ countWin + " times");
}