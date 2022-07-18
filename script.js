let setDark = function (){

let main = document.querySelector("main");
main.style.background = "black";
main.style.color = "white";


let dmButton = document.querySelector("button#darkMode");
dmButton.addEventListener("click", setDark);
}