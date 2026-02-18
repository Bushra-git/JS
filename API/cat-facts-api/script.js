let button = document.querySelector("button");

button.addEventListener("click" , async () => {
let fact = await getFacts();
console.log("Fact : ", fact);
let p = document.querySelector("p");
p.innerText = fact;

});

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try { 
    let res = await axios.get(url);
   return res.data.fact;
    console.log(res);

  }
  catch (err) {
    console.log("ERROR", err);
    return "No data found";

  }
}