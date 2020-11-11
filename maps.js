// 1. roll a die and store values in a map untill any of the die number reaches 10
{
    let dieDictionary = new Map();
    const counter = 0;
    let n = 3;
    let check = false;
   while(check != true) {
       n++;
        let dieValue = (Math.floor(Math.random() * 10 ) % 6 ) + 1;
        if(dieDictionary.has(dieValue) == false) {
            dieDictionary.set(dieValue, 0);
        } 
        for(let [key, value] of dieDictionary) {
            if(key == dieValue) {
                value = value + 1;
                dieDictionary.set(dieValue, value);
                if(value == 10) 
                    check = true;
            }
        }
    }
    console.log(dieDictionary);
}

// 2.Program to generate a birth month of 50 individuals. Find all the individuals having birthdays in the same month.
{
    let n = 0;
    let monthMap = new Map();
    while(n != 50) {
        let birthMonth = (Math.floor(Math.random() * 20 ) % 12 ) + 1;
        if(monthMap.has(birthMonth) == false)
            monthMap.set(birthMonth, 0);
        for( let [key, value] of monthMap) {
            if(key == birthMonth) {
                value = value + 1;
                monthMap.set(birthMonth, value);
            }
        }
        n++;
    }
    console.log(monthMap);
}