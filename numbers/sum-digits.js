let number2 = 123456;
let sum = 0;

while (number2 !== 0) {
    let digit = number2 % 10;
    sum += digit;
    number2 = Math.floor(number2 / 10);
}

console.log("the sum is " + sum);
