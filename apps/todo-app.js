let ToDo = [];
let req = prompt("Please enter your request: Add, delete, View, or Quit");

while (true) {
    if (req === "quit") {
        console.log("You're quitting our ToDo App");
        break;
    } else if (req === "view") {
        console.log("_____");
        for (let i = 0; i < ToDo.length; i++) {
            console.log(i, ToDo[i]);
        }
    } else if (req === "add") {
        let task = prompt("Please enter the task to add");
        ToDo.push(task);
    } else if (req === "delete") {
        let idx = prompt("Enter the index of the task to delete");
        ToDo.splice(idx, 1);
        console.log("Successfully deleted the task");
    } else {
        console.log("Invalid request! Please try again");
    }
    req = prompt("Please enter your request: Add, delete, View, or Quit");
}
