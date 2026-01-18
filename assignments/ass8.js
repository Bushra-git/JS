let arr = [1, 2, 3];

let squaredArr = arr.map(function (el ) {
    return el * el;
});
console.log(squaredArr); // [1, 4, 9]

let sumArr = squaredArr.reduce(function (acc, squaredArrEL) {
    return acc + squaredArrEL;
} , 0);
console.log(sumArr); // 14

let newArr = arr.map(function(el) {
    return el + 5 ;
});
console.log(newArr); // [6, 7, 8]

let alpha = ['a', 'b', 'c'];
 
let newAlpha = alpha.map(function(el) {
    return el.toUpperCase();
});
console.log(newAlpha); // ['A', 'B', 'C']