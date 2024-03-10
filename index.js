
let input = document.querySelector(".name");
let UserName = document.querySelector(".UserName");
let submitName = document.querySelector(".submit");

submitName.addEventListener('click', () => {
    let name = input.value;
    let imageUrl = "https://joesch.moe/api/v1/" + encodeURIComponent(name);
    document.getElementById("img").src = imageUrl;
    UserName.innerText = name;
    input.value = "";
})
