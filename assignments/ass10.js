let h1 = document.querySelector("h1");
h1.addEventListener("mouseout", function() {
    h1.style.color = "blue";
});
window.addEventListener("scroll", function(){
    h1.style.color = "green";
    console.log("scroll")
});
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
 btn.style.backgroundColor = "green" 
});
//Createaninputelementonthepagewithaplaceholder”enteryourname”andanH2headingonthepageinsideHTML.Thepurposeofthisinputelementistoenterauser’snamesoitshouldonlyinputlettersfroma-z,A-Zandspace(allothercharactersshouldnotbedetected).Whenevertheuserinputstheirname,theirinputshouldbedynamicallyvisibleinsidetheheading.[Pleasenotethatnoothercharacterapartfromtheallowedcharactersshouldbevisibleintheheading]
let input = document.querySelector("input");
let h2 = document.createElement("h2");
document.body.appendChild(h2);
input.addEventListener("input", function(event){
    let value = event.target.value;
    let filteredValue = value.replace(/[^a-zA-Z ]/g, "");
    h2.textContent = filteredValue;
});

