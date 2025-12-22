//WriteanarrowfunctionnamedarrayAveragethatacceptsanarrayofnumbersandreturnstheaverageofthosenumbers

const arrayAverage = (n) => {
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    let average = sum / n.length;
    return average;

//WriteanarrowfunctionnamedisEven()thattakesasinglenumberasargumentandreturnsifitisevenornot

const isEvenorOdd = (num) => {
  
        if(num%2 ==0) {
            console.log("The number is even");

        } else {
            console.log("The number is odd");
        }
}
};
isEvenorOdd(7);
