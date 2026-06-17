function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

let result = sumOfDigits(12345);
//numbers in digits
function digitsOfNumber(n) {
    let digits = [];    
    while (n > 0) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }   
    return digits.reverse();
}
const resultDigits = digitsOfNumber(12345);
console.log(resultDigits);