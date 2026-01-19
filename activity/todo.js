let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    item.appendChild(deleteBtn);
    deleteBtn.addEventListener("click" , function(){
        ul.removeChild(item);
    });
    ul.appendChild(item);
    inp.value = "";
});



