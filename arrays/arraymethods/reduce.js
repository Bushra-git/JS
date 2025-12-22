let num = [1, 2, 3, 4, 5];
let finaval = num.reduce((res , el) => {
    return res + el
});
console.log(finaval);
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

let max = num.reduce((max , el) => {
    if(max< el){
        return el;
    }else{
        return max;
    }
});
console.log(max);