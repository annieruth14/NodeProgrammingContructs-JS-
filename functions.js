// 1. Convert degF to degC and vice versa
const prompt = require('prompt-sync')();
{
    function celToFah(degC) {
        let degF = 0;
        if(degC >= 0 && degC <= 100) {
            degF = (degC * 9/5) + 32;
            console.log("Equivalent degF: "+ degF);
        }
        else
            console.log("Wrong input");
    }
    function fahToCel(degF) {
        let degC = 0;
        if(degF >= 32 && degF <= 212) {
            degC = (degF - 32) * 5/9;
            console.log("Equivalent degC: "+ degC);
        }
        else
            console.log("Wrong input");
    }
    console.log("1.Convert degree to fahrenheit  \n2.Convert fahrenheit to degree ")
    let n = parseInt(prompt("Enter 1 or 2: "));
    switch(n) {
        case 1:
            let degC = parseInt(prompt("Enter degC "));
            celToFah(degC);
            break;
        case 2:
            let degF = parseInt(prompt("Enter degF "));
            fahToCel(degF);
            break;
        default:
            console.log("Invalid input");
    }
}

// 2.check if two numbers are palindrome
{
    function checkPalindrome(number1) { 
        let remainder, temp, final = 0;
		while(number1 > 0)  {
			remainder = number1 % 10;
			number1 = parseInt(number1 / 10);
			final = final * 10 + remainder;
        }
        return final;
    }
    let num1 = parseInt(prompt("Enter number1: "));
    let num2 = parseInt(prompt("Enter number2: "));
    let result = checkPalindrome(num1);
    if(result == num2)
		console.log("Palindrome");
	else
		console.log("Not Palindrome");
}
 
// 3.check if a number is prime and then palindrome and again check if the palindrome is prime
{
    function checkPrime(number) {
        let i, flag = true;
        for(i = 2; i <= number - 1; i++) {
            if (number % i == 0) { 
                flag = false; 
                break; 
            } 
        }
        if(flag == true)
            return true;
        else 
            return false;
    }
    let num = parseInt(prompt("Enter a number: "));
    checkPrime(num);
    let result = checkPalindrome(num);
    let check = checkPrime(result);
    console.log(check);
}