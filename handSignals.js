const leftArm = document.getElementById("left-arm");
const rightArm = document.getElementById("right-arm");
const whistle = document.getElementById("whistle");
const whistleText = document.getElementById("textForWhistle");
let inMotion = false; //sees if another button is already in motion

function backPage() {
    history.go(0);
}

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
    leftArm.style.transform = "rotateX(135deg) rotateY(45deg) rotateZ(-30deg)";

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

    document.getElementById("getBack").removeAttribute("href");
    document.getElementById("getBack").addEventListener("click", () => {
        backPage();
    }); 
    right.addEventListener("click", cornerRight);
    left.addEventListener("click", cornerLeft);
}

function advantage() {
    if (inMotion) {
        return;
    }
    inMotion = true;
    whistleText.innerText = "*Follow the play with your hands up until you feel that the advantage is successful where you can put your hands down*";
    leftArm.style.transform = "rotateX(120deg)";
    rightArm.style.transform = "rotateX(120deg)";
    setTimeout(() => {
        leftArm.style.transform = "rotateX(0deg)";
        rightArm.style.transform = "rotateX(0deg)";
    }, 4000);
}

function goalKickSignal() {
    if (inMotion) {
        return;
    }
    inMotion = true;
    rightArm.style.transform = "rotateX(60deg)";
    whistleText.innerText = "*Point in the direction of the side of the box the goal kick corresponds to*";

    setTimeout(() => {
        rightArm.style.transform = "rotateX(0deg)";
        whistleText.innerText = "";
        inMotion = false;
    }, 3000);
}

function leftThrow() {
    if (inMotion) {
        return;
    }

    inMotion = true;
    leftArm.style.transform = "rotate(-135deg)";
    whistleText.innerText = "*Dependent on the position you are in on the field. Move hand in direction towards the teams attacking side*";

    setTimeout(() => {
        leftArm.style.transform = "rotate(0deg)";
        whistleText.innerText = "";
        inMotion = false;
    }, 3000);
}

function rightThrow() {
    if (inMotion) {
        return;
    }
    inMotion = true;
    rightArm.style.transform = "rotate(135deg)";
    whistleText.innerText = "*Dependent on the position you are in on the field. Move hand in direction towards the teams attacking side*";

    setTimeout(() => {
        rightArm.style.transform = "rotate(0deg)";
        whistleText.innerText = "";
        inMotion = false;
    }, 3000);
}

function leftOrRight() {
    document.getElementById("buttonContainer").innerHTML = "";
    document.getElementById("buttonContainer").style.marginTop = "0px";
    document.getElementById("buttonContainer").appendChild(createNewButton('Left', 'Left', 'button'));
    document.getElementById("buttonContainer").appendChild(createNewButton('Right', 'Right', 'button'));

    const right = document.getElementById("Right");
    const left = document.getElementById("Left");

    document.getElementById("getBack").removeAttribute("href");
    document.getElementById("getBack").addEventListener("click", () => {
        backPage();
    }); 
    right.addEventListener("click", rightThrow);
    left.addEventListener("click", leftThrow);
}

function penaltyKick() {
    if (inMotion) {
        return;
    }
    inMotion = true

    whistleText.innerText = "*Whistle*"
    whistle.classList.add("shake-animation");

    setTimeout(() => {
        whistle.classList.remove("shake-animation");
        rightArm.style.transform = "rotateX(60deg)";
        whistleText.innerText = "*Point towards the penalty marker*"
    }, 2000);

    setTimeout(() => {
        rightArm.style.transform = "rotateX(0deg)";
        whistleText.innerText = "";
        inMotion = false;
    }, 6000);
}

function indirectFoul() {
    if (inMotion) {
        return;
    }
    inMotion = true

    whistleText.innerText = "*Whistle*"
    whistle.classList.add("shake-animation");

    setTimeout(() => {
        whistle.classList.remove("shake-animation");
        rightArm.style.transform = "rotateX(80deg)";
        whistleText.innerText = "*Point towards the side in which the team is attacking*"
    }, 2000);

    setTimeout(() => {
        rightArm.style.transform = "rotateX(180deg)";
        whistleText.innerText = "*Raise Arm until the ball is touched by another player other than the kicker*"
    }, 5000);

    setTimeout(() => {
        rightArm.style.transform = "rotateX(0deg)";
        whistleText.innerText = "";
        inMotion = false;
    }, 8000);    
}

function directFoul() {
    if (inMotion) {
        return;
    }
    inMotion = true

    whistleText.innerText = "*Whistle*"
    whistle.classList.add("shake-animation");

    setTimeout(() => {
        whistle.classList.remove("shake-animation");
        rightArm.style.transform = "rotateX(80deg)";
        whistleText.innerText = "*Point towards the side in which the team is attacking*"
    }, 3000);

    setTimeout(() => {
        rightArm.style.transform = "rotateX(0deg)";
        whistleText.innerText = "";
        inMotion = false;
    }, 6000); 
}

function createNewButton(id, label, reference) {
    const button = document.createElement('button');
    button.id = id;
    button.className = reference; //class name
    button.textContent = label;
    return button;
}

function newSignalButtons() {
    const adv = document.getElementById("Advantage");
    const corner = document.getElementById("Corner");
    const goalKick = document.getElementById("GoalKick");
    const throwIn = document.getElementById("ThrowIn");
    const penalty = document.getElementById("PenaltyKick");
    const indirect = document.getElementById("Indirect");
    const direct = document.getElementById("Direct");

    adv.addEventListener("click", advantage);
    corner.addEventListener("click", () => {
        if (inMotion) {
            return;
        }
        pickASide();
    });
    goalKick.addEventListener("click", goalKickSignal);
    throwIn.addEventListener("click", () => {
        if (inMotion) {
            return;
        }
        leftOrRight();
    });
    indirect.addEventListener("click", indirectFoul);
    penalty.addEventListener("click", penaltyKick);
    direct.addEventListener("click", directFoul);
}

newSignalButtons();