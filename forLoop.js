// 1.print a table of the powers of 2 that are less than or equal to 2^number
 const prompt = require('prompt-sync')();
{
    let number = prompt("Enter a value of number for finding power of 2: ");
    let result = 1;
    for(let i = 0; i <= parseInt(number); i++) {
        console.log("for "+ i + " : " + result);
        result = result * 2;
    }
}

// 2.print nth harmonic number
{
    let number = prompt("Enter a value of number for printing Harmonic number: ");
    let harmonic = 1.00; 
    for (let i = 2; i <= number; i++) { 
        harmonic += 1 / i; 
    } 
    console.log("Harmonic number: "+ harmonic);
}

// 3. given a number check whether it is prime or not
{
    let number = prompt("Enter a number to check whether it is prime or not ");
    let i, flag = true;
    for(i = 2; i <= number - 1; i++) {
        if (number % i == 0) { 
            flag = false; 
            break; 
        } 
    }
    if(flag == true)
        console.log(number + " is prime");
    else 
        console.log(number + " is not prime");
                  
}

// 4.print prime numbers in a given range
{
    const lowerNumber = parseInt(prompt('Enter lower number: '));
    const higherNumber = parseInt(prompt('Enter higher number: '));
    console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
    for(let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}

// 5.Find factorial of a number
{
    function factorial(number){
        let result = 1;
        if (number == 0 || number == 1)
          return result;
        else{
            for(let i = number; i >= 1; i--){
                result = result * i;
            }
            return result;
        }  
    }
    let number = parseInt(prompt("Enter a number to find its factorial: "))
    result = factorial(number)
    console.log("The factorial of " + number + " is " + result);
}

// 6.Finding factors of a number using prime factorisation method
{
    function primeFactor(number){
        if(number % 2 == 0){
            console.log("2 ");
            number /= 2;
        }
        for (let i = 3; i*i <= number; i ++) { 
            while (number % i == 0) { 
                console.log(i + " "); 
                number /= i; 
            } 
        } 
    }
    let number = parseInt(prompt("Enter a number to find its factors: "));
    console.log("Prime factors are:");
    result = primeFactor(number);
}