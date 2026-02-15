let url = "https://catfact.ninja/fact";
fetch(url)
.then((res) => {
	return res.json();
})
.then((data) => {
    console.log("DATA1", data.fact);
    return fetch(url);
})
.then((res) => {
    return res.json();
})
.then((data1) => {
    console.log("DATA1", data1.fact);
   
})
.catch((err) => {
    console.log("ERROR",err);
});