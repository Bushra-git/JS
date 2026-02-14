function saveToDb(message){
    return new Promise((resolve, reject)=>{

        let internetSpeed = Math.floor(Math.random()*10)+1;

        if(internetSpeed > 4){
            resolve("Data saved successfully");
        } else {
            reject("Failed to save data");
        }

    });
}

saveToDb("Bushra data")
.then((result)=>{
    console.log("Success:", result);
})
.catch((err)=>{
    console.log("Error:", err);
});


saveToDb("New Data")
.then(() => {
    console.log("DATA1 SAVED SUCCESFULLY");
    return saveToDb("New Data 2");
})
.then(() => {
    console.log("DATA2 SAVED SUCCESFULLY");
})
.catch(() => {
    console.log("REJECTED");
});

h1 = document.querySelector("h1");

function changeColor(Color, delay) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            h1.style.color = Color;
            resolve("Color changed successfully");
        },delay)

    });
}
async function demo() {
   await changeColor("red", 1000);
   await changeColor("blue", 1000);
   await changeColor("green", 1000);
   await changeColor("purple", 1000);
}
demo();



