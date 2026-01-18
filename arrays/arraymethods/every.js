let num = [ 4, 3, 5];

let squared = num.every(function (el){
  return el % 2 ===0;
});
console.log(squared);

//to check if all the nums are multiple of 10

let number= [10, 20, 30, 40, 50];
let mulTen = number.every( (el) =>  el % 10 ===0 );
console.log(mulTen);
  
