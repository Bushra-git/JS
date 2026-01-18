// Create a button and an input field, then append them to the body of the document.
// Set the button's text to "click me!" and the input's placeholder to "Username".
// Ensure the input field is of type "text".
//Qs3.AccessthebtnusingthequerySelectorandbuttonid.Changethebuttonbackgroundcolortoblueandtextcolortowhite
//Createanh1elementonthepageandsetitstextto“DOMPractice”underlined.Changeitscolortopurple.
// Createaptagonthepageandsetitstextto“ApnaCollegeDeltaPractice”,whereDeltaisbold
let body = document.querySelector("body");
let button = document.createElement("button");
let input = document.createElement("input");
body.appendChild(input);
button.innerText = "click me!";
body.appendChild(button);
input.type = "text";
input.placeholder = "Username";
let btn = document.querySelector("button");
btn.style.backgroundColor = "blue";
btn.style.color = "white";
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";
body.appendChild(h1);
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.appendChild(p);





