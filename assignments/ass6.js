// Q6. Write a function that takes an array and a number as arguments. The function should print all the elements in the array that are greater than the given number.
let arr = [1 ,2,5,8,7,6,4,3];
let num = 3;

function FindBig(arr ,num) {
    for(let i = 0 ; i< arr.length ; i++) {
    if(arr[i] > num) {
        console.log(arr[i]);
    }
}

}
//FindBig(arr ,num);

// Write a JavaScriptfunctiontoextractuniquecharactersfromastring.Example:str=“abcdabcdefgggh”ans=“abcdefgh”

let str = "abcdabcdefgggh";
let uniqueChars = "";

function extractUniqueCharacters(str) {
for(let i = 0 ; i < str.length; i++) {
if (!uniqueChars.includes(str[i])){
    uniqueChars += str[i];
    console.log(str[i]);
}
}
}
//extractUniqueCharacters(str);

//WriteaJavaScriptfunctionthatacceptsalistofcountrynamesasinputandreturnsthelongestcountrynameasoutput.Example:country=["Australia","Germany","UnitedStatesofAmerica"]output:"UnitedStatesofAmerica"
let countries = ["Australia","Germany","UnitedStatesofAmerica"];
let longest = [];

function findLongestCountry(countries) {
for(let i =0 ; i < countries.length ; i++) {
    if(countries[i].length > longest.length ){
    longest = countries[i];
    }
}
}
// findLongestCountry(countries);
// console.log(longest);

//WriteaJavaScriptfunctiontocountthenumberofvowelsinaStringargument.

//let str2 = prompt("Enter a string: and we will count the vowels for you !! ");
 
function countVowels(str2) {
    let count = 0 ;
    for(let i = 0 ; i < str2.length ; i++) {
        if(str2[i]== "a" || str2[i]== "e" || str2[i]== "i" || str2[i]== "o" || str2[i]== "u" ) {
               count++;
            
        }
       
        
    }
   return count; 
}

//let result = countVowels(str2);
//console.log("Number of vowels in the string is: " + result);

//WriteaJavaScriptfunctiontogeneratearandomnumberwithinarange(start,end)



function PrintRandomRange(m,n) {
  let randomNum = Math.floor(Math.random() * (n-m+1)) +m;
    console.log(randomNum);
}
let result = PrintRandomRange(1,10);
console.log(result);


