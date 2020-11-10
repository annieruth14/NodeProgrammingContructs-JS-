// 1.Read a single digit number and write the number in word
const prompt = require('prompt-sync')();
{
    let number = prompt("Enter op1 single digit number ");
    console.log("Number is: " + number);
    if(number == 1)
        console.log("one");
    else if(number == 2) 
        console.log("two");
    else if(number == 3)
        console.log("three");
    else if(number == 4)
        console.log("four");
    else if(number == 5)
        console.log("five");
    else if(number == 6)
        console.log("six");
    else if(number == 7)
        console.log("seven");
    else if(number == 8)
        console.log("eight");
    else if(number == 9)
        console.log("nine");
    else
        console.log("Invalid input");
}

// 2.Read a Number and Display the week day
{
    let number = prompt("Enter op1 number from 1-7 ");
    console.log("Number is: " + number);
    if(number == 1)
        console.log("Day is Sunday");
    else if(number == 2) 
        console.log("Day is Monday");
    else if(number == 3)
        console.log("Day is Tuesday");
    else if(number == 4)
        console.log("Day is Wednesday");
    else if(number == 5)
        console.log("Day is Thursday");
    else if(number == 6)
        console.log("Day is Friday");
    else if(number == 7)
        console.log("Day is Saturday");
    else
        console.log("Invalid input");
}

// 3.Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
{
    let number = prompt("Enter number using 1 and 0 ");
    if(number == 1)
        console.log("unit");
    else if(number == 10)
        console.log("ten");
    else if(number == 100)
        console.log("hundred");
    else if(number == 1000)
        console.log("thousand");
    else if(number == 10000)
        console.log("Ten thousand");
    else if(number == 100000)
        console.log("lakh");
    else if(number == 1000000)
        console.log("million");
    else
        console.log("Wrong input");
}

// 4.Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
{
    let a = prompt("Enter the value of op1 ");
    let b = prompt("Enter the value of op2 ");
    let c = prompt("Enter the value of op3 ");
    let op1 = a+b*c;
    let op2 = a%b+c;
    let op3 = c+a/b;
    let op4 = a*b+c;
    if (op1 > op2 && op1 > op3 && op1 > op4)
        console.log("Largest: " + op1);
    else if (op2 > op1 && op2 > op3 && op2 > op4)
        console.log("Largest: " + op2);
    else if (op3 > op1 && op3 > op2 && op3 > op4)
        console.log("Largest: " + op3);
    else if (op4 > op1 && op4 > op1 && op4 > op3)
        console.log("Largest: " + op4);

    if (op1 < op2 && op1 < op3 && op1 < op4)
        console.log("Smallest: " + op1);
    else if (op2 < op1 && op2 < op3 && op2 < op4)
        console.log("Smallest: " + op2);
    else if (op3 < op1 && op3 < op2 && op3 < op4)
        console.log("Smallest: " + op3);
    else if (op4 < op1 && op4 < op1 && op4 < op3)
        console.log("Smallest: " + op4);
}