const offense = document.getElementById("Offender");
const defender = document.getElementById("Defender");
const passer = document.getElementById("Passer");
const soccerBall = document.getElementById("Ball");
const buttonContainer = document.getElementById("buttonContainer2").innerHTML; //contains all the inner html
let inProgress = false;

function showInfo() {
    document.getElementById("infoText").style.visibility = "visible";
    document.getElementById("infoText").style.opacity = "1";
}

function hideInfo() {
    document.getElementById("infoText").style.visibility = "hidden";
    document.getElementById("infoText").style.opacity = "0";
}

function createNewButton(id, label, reference) {
    const button = document.createElement('button');
    button.id = id;
    button.className = reference; //class name
    button.textContent = label;
    return button;
}

function resetMenu() {
    document.getElementById("buttonContainer2").innerHTML = buttonContainer;
    buttonMenu();
}

function easySetting() {
    resetMenu();
}

function mediumSetting() {
    resetMenu();
}

function hardSetting() {
    resetMenu();
}

function changeDifficulty() {
    if (inProgress) {
        return;
    }
    //Making new butttons
    document.getElementById("buttonContainer2").innerHTML = "";
    document.getElementById("buttonContainer2").appendChild(createNewButton('E-Level', 'Easy', 'button'));
    document.getElementById("buttonContainer2").appendChild(createNewButton('M-Level', 'Medium', 'button'));
    document.getElementById("buttonContainer2").appendChild(createNewButton('H-Level', 'Hard', 'button'));
    //adding event clickers to buttons
    document.getElementById("E-Level").addEventListener("click", easySetting);
    document.getElementById("M-Level").addEventListener("click", mediumSetting);
    document.getElementById("H-Level").addEventListener("click", hardSetting);
}

function runPlay() {
    console.log("ayy");
}

function resetScore() {
    console.log("yuhh");
}

function buttonMenu() {
    const runPlayButton = document.getElementById("Run");
    const resetButton = document.getElementById("Reset");
    const levelButton = document.getElementById("Level");

    runPlayButton.addEventListener("click", runPlay);
    resetButton.addEventListener("click", resetScore);
    levelButton.addEventListener("click", changeDifficulty);
}

buttonMenu();
