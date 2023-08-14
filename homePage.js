const navLink = document.getElementById("topLinks");
const x = document.getElementById("close");
const menu = document.getElementById("menu");

function scrollRefereePage() {
    document.getElementsByClassName("crAssistance")[0].scrollIntoView({ behavior: 'smooth'});
}

function scrollHomePage() {
    document.getElementsByClassName("header")[0].scrollIntoView({ behavior:'smooth' });
}

function scrollAssistantRefereePage() {
    document.getElementsByClassName("arAssistance")[0].scrollIntoView({ behavior: 'smooth'});
}

function showMenu() {
    navLink.style.right = "0px";
    navLink.style.opacity = 1;
}

function hideMenu() {
    navLink.style.right = "-200px";
    navLink.style.opacity = 0;

}

function hideAbout() {
    const aboutBox = document.getElementById("popUpBox");
    if (window.screen.width <= 700 && window.screen.height > 700) { //max-width is 700px
        aboutBox.style.right = "-200px";
    } else if (window.screen.width <= 700 && window.screen.height <= 700) {
        aboutBox.style.right = "-280px";
    } else {
        aboutBox.style.top = "-400px";
    }

    aboutBox.style.opacity = 0;
}

function showAbout() {
    const aboutBox = document.getElementById("popUpBox");
    if (window.screen.width <= 700) { // whether width is less than or greater than 700
        aboutBox.style.right = "0px";
    } else {
        aboutBox.style.top = "0px";
    }

    aboutBox.style.opacity = 1;
}

menu.addEventListener("click", showMenu); //javascript to toggle menu
x.addEventListener("click", hideMenu); //javascript to toggle x