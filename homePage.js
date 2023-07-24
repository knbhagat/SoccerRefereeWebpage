const navLink = document.getElementById("topLinks");
const x = document.getElementById("close");
const menu = document.getElementById("menu");

function showMenu() {
    navLink.style.right = "0px";
}

function hideMenu() {
    navLink.style.right = "-200px";
}
console.log(menu);
menu.addEventListener("click", showMenu); //javascript to toggle menu
x.addEventListener("click", hideMenu); //javascript to toggle x