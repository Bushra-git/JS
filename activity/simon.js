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
function gameFLash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}

function userFLash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}
function levelUp() {
    level++;
    userseq= [];
    h2.innerHtml = (`Level ${level}`);
     let randIdx = Math.floor(Math.random() * 4);
     let randcolor = btn[randIdx];
        let randbtn = document.querySelector("." + randcolor);
        gameseq.push(randbtn);
        console.log(gameseq);
        gameFLash(randbtn);

}

function checkAns(idx) {
    if( userseq[idx] === gameseq[idx]){
        if(userFLash.length === gameseq.length){
            setTimeout(function(){
                levelUp();
            } , 1000);
        } else {
            h2.innerHTML = `Game Over,<b>You're score was ${level}<b> Press Any Key to Restart`;
            started = false;
            level=0;
            gameseq = [];
            userseq = [];
        }
    }

}