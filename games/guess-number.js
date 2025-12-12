const max = prompt("Guess the correct number for max range");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Enter the Guessed Number");

while (true) {
    if (guess === "quit") {
        console.log("you're quitting !! BYE");
        break;
    }
    if (Number(guess) === random) {
        console.log("you've guessed it right!! the number is " + random);
        break;
    } else if (Number(guess) < random) {
        guess = prompt("You've guessed it too low !! please guess againnn");
    } else {
        guess = prompt("You've guessed it too high !! please guess againnn");
    }
}
