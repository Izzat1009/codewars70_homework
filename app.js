function juft_sonlar(a, b, array = []) {
    if (a > b) return array; 
    if (a % 2 === 0) array.push(a);  
    return juft_sonlar(a + 1, b, array); 
}

console.log(juft_sonlar(3, 8));  



function onlik_sonlar(a, array = []) {
    if (a < 10) return array; 
    array.push(Math.floor(a / 10) * 10);  
    return onlik_sonlar(a - 10, array);  
}

console.log(onlik_sonlar(45));