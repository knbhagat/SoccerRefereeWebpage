const leftArm = document.getElementById("left-arm");
const rightArm = document.getElementById("right-arm");
const whistle = document.getElementById("whistle");
let inMotion = false; //sees if another button is already in motino
let originalButton;
//const getBack = document.getElementById("getBack").innerText; //also may not need



function cornerRight() {
    if (inMotion) {
        return;
    }
    inMotion = true;
    rightArm.style.transform = "rotateX(135deg) rotateY(135deg) rotateZ(-30deg)";

    setTimeout(() => {
        rightArm.style.transform = "rotate(0deg)";
        inMotion = false;
    }, 3000);
}

function cornerLeft() {
    if (inMotion) {
        return;
    }
    inMotion = true;
    leftArm.style.transform = "rotateX(135deg) rotateY(135deg) rotateZ(-30deg)";

    setTimeout(() => {
        leftArm.style.transform = "rotate(0deg)";
        inMotion = false;
    }, 3000);
}

function pickASide() {
    document.getElementById("buttonContainer").innerHTML = "";
    document.getElementById("buttonContainer").style.marginTop = "0px";
    document.getElementById("buttonContainer").appendChild(createNewButton('Left', 'Left Corner', 'button'));
    document.getElementById("buttonContainer").appendChild(createNewButton('Right', 'Right Corner', 'button'));

    const right = document.getElementById("Right");
    const left = document.getElementById("Left");

    document.getElementById("getBack").addEventListener("click", newSignalButtons); //bug when go
    right.addEventListener("click", cornerRight);
    left.addEventListener("click", cornerLeft);
}

function advantage() {
    if (inMotion) {
        return;
    }
    inMotion = true;
    whistle.classList.add("shake-animation");
    setTimeout(() => {
        whistle.classList.remove("shake-animation");
        leftArm.style.transform = "rotateX(120deg)";
        rightArm.style.transform = "rotateX(120deg)";
    }, 2000);
}

function createNewButton(id, label, reference) {
    const button = document.createElement('button');
    button.id = id;
    button.className = reference; //class name
    button.textContent = label;
    return button;
}

function newSignalButtons() {
    document.getElementById("getBack").innerText = "Back";
    document.getElementById("getBack").href = "refereeCenter.html";
    document.getElementById("buttonContainer").innerHTML = "";
    document.getElementById("buttonContainer").style.marginTop = "125px"; //remember to reset

    document.getElementById("buttonContainer").appendChild(createNewButton('Advantage', 'Advantage', 'button'));
    document.getElementById("buttonContainer").appendChild(createNewButton('Corner', 'Corner Kick', 'button'));
    document.getElementById("buttonContainer").appendChild(createNewButton('GoalKick', 'Goal Kick', 'button'));
    document.getElementById("buttonContainer").appendChild(createNewButton('ThrowIn', 'Throw-In', 'button'));
    document.getElementById("buttonContainer").appendChild(createNewButton('PenaltyKick', 'Penalty Kick', 'button'));
    document.getElementById("buttonContainer").appendChild(createNewButton('Indirect', 'Indirect-Foul', 'button'));
    document.getElementById("buttonContainer").appendChild(createNewButton('Direct', 'Direct-Foul', 'button'));

    const adv = document.getElementById("Advantage");
    const corner = document.getElementById("Corner");
    const goalKick = document.getElementById("GoalKick");
    const throwIn = document.getElementById("ThrowIn");
    const indirect = document.getElementById("Indirect");
    const direct = document.getElementById("Direct");

    adv.addEventListener("click", advantage);
    corner.addEventListener("click", () => {
        if (inMotion) {
            return;
        }
        pickASide();
    });
}

function newWhistleButtons() {

}

function activateButtons() {
    const whistleButton = document.getElementById("Whistle-Fluctuation");
    const signalButton = document.getElementById("Hand-Signals");
    whistleButton.addEventListener("click", newWhistleButtons);
    signalButton.addEventListener("click", newSignalButtons);
}

activateButtons();