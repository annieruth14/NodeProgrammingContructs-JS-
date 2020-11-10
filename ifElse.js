// 1. The program reads 5 Random 3 Digit values and then finds the minimum and the maximum value
{
   let num1 = Math.floor(Math.random() * 999);
   let num2 = Math.floor(Math.random() * 999);
   let num3 = Math.floor(Math.random() * 999);
   let num4 = Math.floor(Math.random() * 999);
   let num5 = Math.floor(Math.random() * 999);
   console.log("Numbers are: " + num1 + " " + num2 + " " + num3 + " " + num4 + " " + num5);
   let minNum = Math.min(num1, num2, num3, num4, num5);
   let maxNum = Math.max(num1, num2, num3, num4, num5);
   console.log("Minimum: "+ minNum + "    Maximum: "+ maxNum);
}

// 2. The program takes day and month from the command line and console.logs true if day of month is between March 20 and June 20, false otherwise

// We use prompt-sync module to retrieve user input
const prompt = require('prompt-sync')();
{
    const month = prompt("Enter month ");
    let day = prompt("Enter day of the month ");   //The prompt() function returns the user feedback and stores the return value to the variable
    let checkDate = new Date();
    checkDate.setDate(day);
    checkDate.setMonth(month);
    let dateFrom = new Date(2020, 03, 20);
    let dateTo = new Date(2020, 06, 20);
    if(checkDate > dateFrom && checkDate < dateTo) 
        console.log("True");
    else
        console.log("False");
}

// 3. checks whether given year is leap year or not
{
    let year = prompt("Enter a year to check whether its leap year or not ");
    if (year % 400 == 0) 
        console.log("Leap Year");
    else if (year % 100 == 0) 
        console.log("Not a Leap Year");
    else if (year % 4 == 0) 
        console.log("Leap Year");   
    else
        console.log("Not a Leap Year"); 
}

// 4. Flip a coin and print heads or tails accordingly
{
    const HEAD = 0;
    const TAIL = 1;
    let coin = Math.floor(Math.random() * 10) % 2;
    if(coin == HEAD)
        console.log(HEAD + " : Heads");
    else if (coin == TAIL)
        console.log(TAIL + " : Tails");
}