console.log("Hello world");

let body = document.querySelector("body");
console.log(body);

body.style.fontFamily = "Arial, sans-serif";
let nickname = document.querySelector("#nickname");
console.log(nickname);
nickname.innerText = "Manijeh";

let favorites = document.querySelector("#favorites");
console.log(favorites);
favorites.innerText = "Movies, Traveling, Reading";

let hometown = document.querySelector("#hometown");
console.log(hometown);
hometown.innerText = "Tehran";

let listItems = document.querySelectorAll("li");
console.log(listItems);
function setSpanClass(item) {
  item.className = "list-item";
}
listItems.forEach(setSpanClass);
