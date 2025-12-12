let numbers = [1, 2, 3, 2, 4, 2, 5];
let numToDelete = 2;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numToDelete) {
        numbers.splice(i, 1);
        i--;
    }
}
console.log(numbers);
