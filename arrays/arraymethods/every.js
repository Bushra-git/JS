let num = [ 4, 3, 5];

let squared = num.every(function (el){
  return el % 2 ===0;
});
console.log(squared);