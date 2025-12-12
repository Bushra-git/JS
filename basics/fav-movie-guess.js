const favMovie = "Bodyguard";
let guessMovie = prompt("Guess my favMovie");

while (guessMovie !== favMovie && guessMovie !== "quit") {
    console.log("OOPS! Try Again");
    guessMovie = prompt("Guess my favMovie or else Type quit to exit");
}

if (guessMovie === favMovie) {
    console.log("Hurray! You guessed it right");
}
