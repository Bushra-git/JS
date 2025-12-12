let diceroll = prompt("please type roll to roll the dice");
let randomnumberofDice = Math.floor(Math.random() * 6) + 1;

while (true) {
    if (diceroll == "roll") {
        console.log("you rolled a " + randomnumberofDice);
        break;
    }
}

