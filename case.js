// 1.Read a single digit number and write the number in word
const prompt = require('prompt-sync')();
{
    const number = prompt("Enter a single digit number ");
    console.log("Number is: " + number);
    switch(parseInt(number)) {
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
        default:
            console.log("Invalid input");
            break;
    }
}

// 2.Read a Number and Display the week day
{
    let number = prompt("Enter a number from 1-7 ");
    console.log("Number is: " + number);
    switch(parseInt(number)) {
        case 1:
            console.log("Day is Sunday");
            break;
        case 2:
            console.log("Day is Monday");
            break;
        case 3:
            console.log("Day is Tuesday");
            break;
        case 4:
            console.log("Day is Wednesday");
            break;
        case 5:
            console.log("Day is Thursday");
            break;
        case 6:
            console.log("Day is Friday");
            break;
        case 7:
            console.log("Day is Saturday");
            break;
        default:
            console.log("Invalid input");
    }
}

// 3.Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
{
    let number = prompt("Enter number using 1 and 0 ");
    switch(parseInt(number)) {
        case 1:
            console.log("unit");
            break;
        case 10:
            console.log("ten");
            break;
        case 100:
            console.log("hundred");
            break;
        case 1000:
            console.log("thousand");
            break;
        case 10000:
            console.log("ten thousand");
            break;
        default:
            console.log("Invalid input");
    }
}

// 4.Unit conversion of different length units
{
    console.log("1.Feet to Inch \n2.Inch to Feet \n3.Feet to Meter \n4.Meter to feet");
    let key = prompt("Enter a number ");
    switch(parseInt(key)) {
        case 1:
            let feet = prompt("Enter the feet value ")
            let inch = parseInt(feet) * 12;
            console.log("Inch value: "+ inch);
            break;
        case 2:
            let inch1 = prompt("Enter the inch value ");
            let feet1 = parseInt(inch1) / 12;
            console.log("Feet value: "+ feet1);
            break;
        case 3:
            let feet2 = prompt("Enter the feet value ");
            let meter = parseInt(feet2) / 3.26;
            console.log("Meter value: "+ meter);
            break;
        case 4:
            let meter1 = prompt("Enter the meter value ");
            let feet3 = parseInt(meter1) * 3.26;
            console.log("Feet value: "+ feet3);
            break;
        default:
            console.log("Invalid input");
    }
} 