let url = "https://dog.ceo/api/breeds/image/random";
async function getDogImg() {
    try {
      let res = await axios.get(url);
      return res.data.message;
      console.log(res);

    }
    catch (err) {
        console.log("ERROR", err);
        return "NOT FOUND";
    }
}
let button = document.querySelector("button");
button.addEventListener("click" , async () => {
    let imgUrl = await getDogImg();
    console.log("Img URL : ", imgUrl);
    let img = document.querySelector("img");
    img.src = imgUrl;
});