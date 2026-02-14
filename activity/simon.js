/* GLOBAL VARIABLES */
let gameSeq = [];  //Game jo colors dikhata hai, woh yahan store honge
let userSeq = [];   //User jo buttons click karta hai, woh yahan store honge

let btns = ["red", "blue", "green", "yellow"]; //Available button colors

let started = false;   //Game started hai ya nahi
let level = 0;      //Current level

let h2 = document.querySelector("h3"); //Heading jisme level dikhaya jayega


/* GAME START (KEYPRESS) */
document.addEventListener("keypress", function () {  
    if (started === false) {  
        console.log("game started");
        started = true;
        levelUp();
    }
});


/** FLASH FUNCTIONS **/
function gameFlash(btn) {   //Game button flash
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn) {  //User click button flash
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 500);
}


/** LEVEL UP (LOGIC hain ) **/
function levelUp() {  //New level shuru karna
    userSeq = [];     //User sequence reset karna
    level++;      //Level badhana
    h2.innerText = `Level ${level}`;    //Heading update karna

    //Random button select karna

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];                      //Random color
    let randBtn = document.querySelector("." + randColor);  //Random button

    gameSeq.push(randColor);    //Game sequence mein random color add karna
    console.log(gameSeq);      

    gameFlash(randBtn);          //Random button flash karna
}


/**  CHECK ANSWER **/ //match hora hai idhr toh 
function checkAns(idx) {     //User answer check karna
    if (userSeq[idx] === gameSeq[idx]) {         //Agar user ka answer sahi hai

        if (userSeq.length === gameSeq.length) {      //Agar user ne poora sequence sahi diya hai
            setTimeout(levelUp, 1000);        //Next level shuru karna
        }

    } else {
        h2.innerHTML = `Game Over! <b>Your score was ${level}</b><br>Press any key to restart`;
        reset();
    }
}


/** USER BUTTON CLICKS **/
let allBtns = document.querySelectorAll(".btn");  //Saare buttons select karna

for (let btn of allBtns) {                          //Har button ke liye click event listener add karna
    btn.addEventListener("click", function () {        
        let userColor = btn.getAttribute("id");     //Clicked button ka color lena

        userSeq.push(userColor);            //User sequence mein clicked color add karna
        userFlash(btn);                        //Clicked button flash karna

        checkAns(userSeq.length - 1);         
    });
}


/**  RESET GAME ***/
function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
