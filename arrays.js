// 1. find the 2nd largest and the 2nd smallest element without sorting the array.
const prompt = require('prompt-sync')();
{
    function generateRandomNumbers() {
        let number;
        do {
        number = Math.floor(Math.random() * 999);
        } while (number < 100);
        return number;
    }
    let numArray = new Array();
    for(let i=0; i<10; i++) {
        numArray.push(generateRandomNumbers());
    }
    console.log("For 1. \n" + numArray);
    let max = Math.max(...numArray);
    numArray.splice(numArray.indexOf(max), 1);
    console.log("Second largest is: "+ Math.max(...numArray));
    let min = Math.min(...numArray);
    numArray.splice(numArray.indexOf(min), 1);
    console.log("Second lowest is: "+ Math.min(...numArray));
}

// 2.sort the array and then find the 2nd largest and the 2nd smallest element.
{
    let numArray = new Array();
    for(let i=0; i<10; i++) {
        numArray.push(generateRandomNumbers());
    }
    console.log("For 2. \n" + numArray);
    numArray.sort();
    console.log(numArray);
    console.log("Second largest is: " + numArray[1]);
    console.log("Second lowest is: " + numArray[numArray.length - 2]);
}

// 3.Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array
{
    let factorArr = new Array();
    function primeFactor(number){
        while (number % 2 == 0){
            factorArr.push(2);
            number /= 2;
        }
        for (let i = 3; i <= Math.sqrt(number); i+=2) { 
            while (number % i == 0) { 
                factorArr.push(i);
                number /= i; 
            } 
        } 
        if(number > 2) 
            factorArr.push(number);
    }
    console.log("for 3. ")
    let number = parseInt(prompt("Enter a number to find its factors: "));
    primeFactor(number);
    console.log("Prime factors are:");
    console.log(factorArr);
}

// 4.Write a Program to show Sum of three Integer adds to ZERO
{
    function findTriplet(arr, n) {
        let found = true; 
        for (let i=0; i<n-2; i++) 
        { 
            for (let j=i+1; j<n-1; j++) 
            { 
                for (let k=j+1; k<n; k++) 
                { 
                    if (arr[i]+arr[j]+arr[k] == 0) 
                    { 
                        console.log(arr[i] + " " + arr[j] + " " + arr[k] + "\n");
                        found = true; 
                    } 
                } 
            } 
        } 
        // If no triplet with 0 sum found in array 
        if (found == false) 
            console.log(" not exist "); 
    }
    let arr = [2, 3, -2, 0, 1];
    let size = arr.length;
    console.log("for 4. \nSum of three integers adding to zero: ")
    findTriplet(arr , size);
}

// 5.Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
{
    function findRepeatedDigits(arr) {
        let repeatedDigArr = new Array();
        for(let i = 0; i <= arr.length-1; i++) {
            let ones = Math.floor(arr[i] % 10);
            let tens = Math.floor((arr[i] / 10) % 10);
            if(ones == tens) 
                repeatedDigArr.push(arr[i]);
        }
        return repeatedDigArr;
    }
    console.log("for 5.")
    let arr = [21, 45, 66, 99, 36, 98, 33];
    repArr = findRepeatedDigits(arr);
    console.log(repArr);
}