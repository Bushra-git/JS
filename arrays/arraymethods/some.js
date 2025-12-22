let num = [1, 2, 3, 5];

let even = num.some(function (el) {
    return el % 2 ===0;
});
console.log(even);