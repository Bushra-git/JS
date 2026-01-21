let gameseq = [];
let userseq = [];
let h2 = document.querySelector("h3");
let btn = ["red", "blue", "green", "yellow"];
let started = false ;
let level = 0;
document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }

});
function gameFLash(el){
    el.classList.add("flash");
    setTimeout(function(){
        el.classList.remove("flash");
    }, 500);
}

function userFLash(el){
    el.classList.add("flash");
    setTimeout(function(){
        el.classList.remove("flash");
    }, 500);
}
function levelUp() {
    level++;
    userseq= [];
    h2.innerText = `Level ${level}`;
     let randIdx = Math.floor(Math.random() * 4);
     let randcolor = btn[randIdx];
        let randbtn = document.querySelector("." + randcolor);
        gameseq.push(randbtn);
        console.log(gameseq);
        gameFLash(randbtn);

}

function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(function(){
                levelUp();
            } , 1000);
        }
    } else {
        h2.innerHTML = `Game Over, <b>Your score was ${level}</b>. Press any key to restart`;
        reset();
    }
}

// handle user clicks on color buttons
let allBtns = document.querySelectorAll(".btn");
for (let b of allBtns) {
    b.addEventListener("click", function() {
        userseq.push(b);
        userFLash(b);
        checkAns(userseq.length - 1);
    });
}

function reset(){
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}