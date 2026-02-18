let url = "http://universities.hipolabs.com/search?name="
let btn = document.querySelector("button");

btn.addEventListener("click" , async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    
    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for(let i = 0; i < colArr.length; i++){
        console.log(colArr[i].name);
        let li = document.createElement("li");
        li.innerText = colArr[i].name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try {
       let res=  await axios.get(url+country);
       return res.data;
    } catch (err){
        console.log(err);
        return [];
    }
}

