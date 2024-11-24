function angle(n) {
    return (n - 2) * 180;
  }
  //
  function digits(n) {
    return n.toString().length;
}
// 
function unluckyDays(year) {
    let count = 0;
    for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 13);
        if (date.getDay() === 5) {
            count++;
        }
    }
    return count;
}
//
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    
    const ages = [age1, age2, age3, age4, age5, age6, age7, age8];
    
    const sumOfSquares = ages.reduce((sum, age) => sum + age * age, 0);
    
    const result = Math.sqrt(sumOfSquares) / 2;
    
    return Math.floor(result);
}
//
function capitalize(s) {
    let evenIndexStr = '';
    let oddIndexStr = '';
  
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        // Even index: Capitalize for evenIndexStr, lowercase for oddIndexStr
        evenIndexStr += s[i].toUpperCase();
        oddIndexStr += s[i].toLowerCase();
      } else {
        // Odd index: Capitalize for oddIndexStr, lowercase for evenIndexStr
        evenIndexStr += s[i].toLowerCase();
        oddIndexStr += s[i].toUpperCase();
      }
    }
  
    return [evenIndexStr, oddIndexStr];
  }
  //
  function sumOfMinimums(arr) {
    return arr.reduce((sum, row) => sum + Math.min(...row), 0);
  }
  //
  function getEvenNumbers(numbersArray) {
    return numbersArray.filter(num => num % 2 === 0);
  }
  //
  function solve(a, b) {
    // Repeat the process until no condition can be applied
    while (a !== 0 && b !== 0) {
      if (a >= 2 * b) {
        a -= 2 * b;
      } else if (b >= 2 * a) {
        b -= 2 * a;
      } else {
        break; // No more subtraction possible, exit loop
      }
    }
    return [a, b];
  }