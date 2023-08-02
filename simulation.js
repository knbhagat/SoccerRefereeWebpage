const offense = document.getElementById("Offender");
const defender = document.getElementById("Defender");
const passer = document.getElementById("Passer");
const soccerBall = document.getElementById("Ball");
const buttonContainer = document.getElementById("buttonContainer2").innerHTML; //contains all the inner html
const offsideButton = document.getElementById("offside");
const onsideButton = document.getElementById("notOffside");
const startButtonContainer = document.getElementById("buttonContainer4");
var divider = 2.0;
let inProgress = false;

const transitionFunctions = [transition1, transition2, transition3, transition4, transition5, transition6, transition7, transition8, transition9, transition10];
var modifiedTransitions = [transition1, transition2, transition3, transition4, transition5, transition6, transition7, transition8, transition9, transition10]; 
const onsideSet = [transition1, transition5, transition3, transition7, transition9];

const wrongDecison = document.createElement("h3");
wrongDecision.textContent = "AYO EPHE IS GAYYYYYY";



function onside(flag) {
    startButtonContainer.appendChild(h3Element);
    setTimeout(() => {
        startButtonContainer.innerHTML = "";
        inProgress = false;
        runPlayMenu();
    }, 2000);
}

function offside(flag) {
    startButtonContainer.appendChild(h3Element);
    setTimeout(() => {
        startButtonContainer.innerHTML = "";
        inProgress = false;
        runPlayMenu();
    }, 2000);
}

function changeArray(array, num) { // changes array by subtracting size and returns transition
    newArray = [];
    newArray.size = modifiedTransitions.length- 1;
    var count = 0;
    for (let i = 0; i < modifiedTransitions.length; i++) {
        if (i != num) {
            newArray[count++] = modifiedTransitions[i];
        }
    }

    modifiedTransitions = newArray;
}
  
  // Random function that calls all the transition functions in random order
function randomTransitions() {
    if (modifiedTransitions.length == 0) { // keep for now
        return;
    }
    inProgress = true;

    var num = Math.floor(Math.random() * (modifiedTransitions.length  - 0)); //gets random number 0-9
    var transition = modifiedTransitions[num];
    changeArray(modifiedTransitions, num);
    transition();
    var flag = onsideSet.includes(transition);
    console.log(flag);

    onsideButton.addEventListener("click", () => {
        onside(flag)
    });
    offsideButton.addEventListener("click", () => {
        offside(flag)
    });
}

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
    if (document.getElementById("Start") == null) {
        runPlayMenu();
    } else {
        buttonMenu();
    }
}

function easySetting() { //paces the speed 
    divider = 1.0;
    resetMenu();
}

function mediumSetting() { //paces the speed
    divider = 2.0;
    resetMenu();
}

function hardSetting() { //paces the speed
    divider = 3.0;
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

function runPlayMenu() {
    startButtonContainer.innerHTML = "";
    const runPlayButton = document.getElementById("Run");
    const resetButton = document.getElementById("Reset");

    runPlayButton.addEventListener("click", () => {
        if (inProgress) {
            return;
        }
        randomTransitions();
    });
    resetButton.addEventListener("click", resetScore);
}

function resetScore() {
}



function buttonMenu() {
    const startButton = document.getElementById("Start");
    const levelButton = document.getElementById("Level");

    levelButton.addEventListener("click", changeDifficulty);
    startButton.addEventListener("click", runPlayMenu);
}

function transition1() {
    defender.style.zIndex = 2;
    offense.style.zIndex = 3;
    soccerBall.style.zIndex = 4;
    const key1Frame1 = defender.animate([{ top: '250px', left: '1250px'}], { duration: 6000 / divider, easing: 'linear'});
    const key1Frame2 = offense.animate([{top : '350px', left : '1950px'}], {duration: 6000 / divider, easing : 'linear'});
    const key1Frame3 = soccerBall.animate([{top : '-250px', left : '1950px', transform : 'rotate(270deg)'}], {duration: 3000 / divider, easing : 'linear', delay : 3000 / divider});
    //ONSIDE
}

function transition2() {
    defender.style.zIndex = 2;
    offense.style.zIndex = 3;
    soccerBall.style.zIndex = 4;
    const key2Frame1 = defender.animate([{ top: '250px', left: '1250px'}], { duration: 6000 / divider, easing: 'linear'});
    const key2Frame2 = offense.animate([{top : '350px', left : '1950px'}], {duration: 6000 / divider, easing : 'linear'});
    const key2Frame3 = soccerBall.animate([{top : '-250px', left : '1950px', transform : 'rotate(270deg)'}], {duration: 2400 / divider, easing : 'linear', delay : 3600 / divider});
    //OFFSIDE
}

function transition4() {
    defender.style.zIndex = 3;
    offense.style.zIndex = 2;
    soccerBall.style.zIndex = 4;
    const key3Frame1 = defender.animate([{left: '1200px', top: '400px'}], { duration: 2000 / divider, easing: 'linear'});
    const key3Frame2 = defender.animate([{left: '1200px', top: '400px'}, {left: '1000px', top: '250px'}], { duration: 2000 / divider, easing: 'linear', delay : 2000 / divider});
    const key3Frame6 = defender.animate([{left: '1000px', top: '250px'}, {left: '1100px', top: '300px'}], { duration: 2000 / divider, easing: 'linear', delay : 4000 / divider});
    const key3Frame3 = offense.animate([{top: '400px', left: '1100px'}], { duration: 2000 / divider, easing: 'linear'});
    const key3Frame4 = offense.animate([{top: '400px', left: '1100px'}, {top: '200px', left: '1200px'}], { duration: 2000 / divider, easing: 'linear', delay : 2000 / divider});
    const key3Frame5 = offense.animate([{top: '200px', left: '1200px'}, {top: '300px', left: '1400px'}], { duration: 2000 / divider, easing: 'linear', delay : 4000 / divider});
    const key3Frame7 = soccerBall.animate([{top:'-300px', left: '1400px', transform : 'rotate(270deg)'}], { duration: 2250 / divider, easing: 'linear', delay : 3750 / divider});
    //offside
}

function transition3() {
    defender.style.zIndex = 3;
    offense.style.zIndex = 2;
    soccerBall.style.zIndex = 4;
    const key3Frame1 = defender.animate([{left: '1200px', top: '400px'}], { duration: 2000 / divider, easing: 'linear'});
    const key3Frame2 = defender.animate([{left: '1200px', top: '400px'}, {left: '1000px', top: '250px'}], { duration: 2000 / divider, easing: 'linear', delay : 2000 / divider});
    const key3Frame6 = defender.animate([{left: '1000px', top: '250px'}, {left: '1100px', top: '300px'}], { duration: 2000 / divider, easing: 'linear', delay : 4000 / divider});
    const key3Frame3 = offense.animate([{top: '400px', left: '1100px'}], { duration: 2000 / divider, easing: 'linear'});
    const key3Frame4 = offense.animate([{top: '400px', left: '1100px'}, {top: '200px', left: '1200px'}], { duration: 2000 / divider, easing: 'linear', delay : 2000 / divider});
    const key3Frame5 = offense.animate([{top: '200px', left: '1200px'}, {top: '300px', left: '1400px'}], { duration: 2000 / divider, easing: 'linear', delay : 4000 / divider});
    const key4Frame7 = soccerBall.animate([{top:'-300px', left: '1400px', transform : 'rotate(270deg)'}], { duration: 2850 / divider, easing: 'linear', delay : 3150 / divider});
    //onside
}

function transition5() {
    defender.style.zIndex = 2;
    offense.style.zIndex = 3;
    soccerBall.style.zIndex = 4;
    const key5Frame1 = offense.animate([{left: '900px', top: '250px'}], { duration: 1500 / divider, easing: 'linear'});
    const key5Frame2 = offense.animate([{left: '900px', top: '250px'}, {left: '1000px', top: '150px'}], { duration: 1500 / divider, easing: 'linear', delay : 1500 / divider});
    const key5Frame3 = offense.animate([{left: '1000px', top: '150px'}, {left: '1050px', top: '400px'}], { duration: 1500 / divider, easing: 'linear', delay : 3000 / divider});
    const key5Frame4 = offense.animate([{left: '1050px', top: '400px'}, {left: '1600px', top: '450px'}], { duration: 1875 / divider, easing: 'linear', delay : 4500 / divider});
    const key5Frame5 = defender.animate([{left: '1150px', top: '350px'}], { duration: 1500 / divider, easing: 'linear'});
    const key5Frame6 = defender.animate([{left: '1150px', top: '350px'}, {left: '1000px', top : '250px'}], { duration: 1500 / divider, easing: 'linear', delay : 1500 / divider});
    const key5Frame7 = defender.animate([{left: '1000px', top: '250px'}, {left: '1100px', top : '300px'}], { duration: 1500 / divider, easing: 'linear', delay : 3000 / divider});
    const key5Frame8 = defender.animate([{left: '1100px', top : '300px'}, {left: '1200px', top : '400px'}], { duration: 1875 / divider, easing: 'linear', delay : 4500 / divider});
    const key5Frame9 = soccerBall.animate([{top:'-150px', left: '1600px', transform : 'rotate(270deg)'}], { duration: 1650 / divider, easing: 'linear', delay : 4725 / divider});
    //onside
}

function transition6() {
    defender.style.zIndex = 2;
    offense.style.zIndex = 3;
    soccerBall.style.zIndex = 4;
    const key5Frame1 = offense.animate([{left: '900px', top: '250px'}], { duration: 1500 / divider, easing: 'linear'});
    const key5Frame2 = offense.animate([{left: '900px', top: '250px'}, {left: '1000px', top: '150px'}], { duration: 1500 / divider, easing: 'linear', delay : 1500 / divider});
    const key5Frame3 = offense.animate([{left: '1000px', top: '150px'}, {left: '1050px', top: '400px'}], { duration: 1500 / divider, easing: 'linear', delay : 3000 / divider});
    const key5Frame4 = offense.animate([{left: '1050px', top: '400px'}, {left: '1600px', top: '450px'}], { duration: 1875 / divider, easing: 'linear', delay : 4500 / divider});
    const key5Frame5 = defender.animate([{left: '1150px', top: '350px'}], { duration: 1500 / divider, easing: 'linear'});
    const key5Frame6 = defender.animate([{left: '1150px', top: '350px'}, {left: '1000px', top : '250px'}], { duration: 1500 / divider, easing: 'linear', delay : 1500 / divider});
    const key5Frame7 = defender.animate([{left: '1000px', top: '250px'}, {left: '1100px', top : '300px'}], { duration: 1500 / divider, easing: 'linear', delay : 3000 / divider});
    const key5Frame8 = defender.animate([{left: '1100px', top : '300px'}, {left: '1200px', top : '400px'}], { duration: 1875 / divider, easing: 'linear', delay : 4500 / divider});
    const key6Frame9 = soccerBall.animate([{top:'-150px', left: '1600px', transform : 'rotate(270deg)'}], { duration: 750 / divider, easing: 'linear', delay : 5625 / divider});
    //offside
}

function transition7() {
    defender.style.zIndex = 3;
    offense.style.zIndex = 1;
    soccerBall.style.zIndex = 2;

    const key7Frame1 = offense.animate([{left: '1000px', top: '350px'}], { duration: 3000 / divider, easing: 'linear'});
    const key7Frame2 = offense.animate([{left: '1000px', top: '350px'}, {left: '1500px', top: '50px'}], { duration: 3000 / divider, easing: 'linear', delay : 3000 / divider});
    const key7Frame3 = defender.animate([{left: '1200px', top: '350px'}], { duration: 3000 / divider, easing: 'linear'});
    const key7Frame4 = defender.animate([{left: '1200px', top: '350px'}, {left: '1000px', top: '400px'}], { duration: 3000 / divider, easing: 'linear', delay : 3000 / divider});
    const key7Frame5 = soccerBall.animate([{top:'-550px', left: '1500px', transform : 'rotate(270deg)'}], { duration: 2100 / divider, easing: 'linear', delay : 3900 / divider});
    //onside
}

function transition8() {
    defender.style.zIndex = 3;
    offense.style.zIndex = 1;
    soccerBall.style.zIndex = 2;

    const key7Frame1 = offense.animate([{left: '1000px', top: '350px'}], { duration: 3000 / divider, easing: 'linear'});
    const key7Frame2 = offense.animate([{left: '1000px', top: '350px'}, {left: '1500px', top: '50px'}], { duration: 3000 / divider, easing: 'linear', delay : 3000 / divider});
    const key7Frame3 = defender.animate([{left: '1200px', top: '350px'}], { duration: 3000 / divider, easing: 'linear'});
    const key7Frame4 = defender.animate([{left: '1200px', top: '350px'}, {left: '1000px', top: '400px'}], { duration: 3000 / divider, easing: 'linear', delay : 3000 / divider});
    const key8Frame5 = soccerBall.animate([{top:'-550px', left: '1500px', transform : 'rotate(270deg)'}], { duration: 1350 / divider, easing: 'linear', delay : 4650 / divider});
    //offside
}

function transition10() {
    //offside
    defender.style.zIndex = 3;
    offense.style.zIndex = 1;
    soccerBall.style.zIndex = 2;

    const key9Frame1 = offense.animate([{ left: '1000px', top : '300px'}], {duration: 1500 / divider, easing: 'linear'});
    const key9Frame2 = offense.animate([{ left: '1000px', top : '300px'}, { left: '1500px', top : '200px'}], {duration: 1500 / divider, easing: 'linear', delay: 1500 / divider});
    const key9Frame3 = offense.animate([{ left: '1500px', top : '200px'}, {left: '1600px', top: '500px'} ], {duration: 1500 / divider, easing: 'linear', delay: 3000 / divider});
    const key9Frame4 = offense.animate([{left: '1600px', top: '500px'}, {left: '1000px', top: '600px'} ], {duration: 1500 / divider, easing: 'linear', delay: 4500 / divider});
    const key9Frame5 = defender.animate([{ left: '1300px', top : '300px'}], {duration: 1500 / divider, easing: 'linear'});
    const key9Frame6 = defender.animate([{ left: '1300px', top : '300px'}, { left: '1200px', top : '250px'}], {duration: 1500 / divider, easing: 'linear', delay: 1500 / divider});
    const key9Frame7 = defender.animate([{ left: '1200px', top : '250px'}, { top: '400px', left : '1300px'}], {duration: 1500 / divider, easing: 'linear', delay: 3000 / divider});
    const key9Frame8 = defender.animate([{ top: '400px', left : '1300px'}, { top : '500px', left: '1400px'}], {duration: 1500 / divider, easing: 'linear', delay: 4500 / divider});
    const key9Frame9 = soccerBall.animate([{top:'0px', left: '1000px', transform : 'rotate(270deg)'}], { duration: 1500 / divider, easing: 'linear', delay : 4500 / divider});

    setTimeout(() => {
        defender.style.zIndex = 2;
        offense.style.zIndex = 3;
        soccerBall.style.zIndex = 4;
    }, 3000 / divider);
}

function transition9() {
    //onside
    defender.style.zIndex = 3;
    offense.style.zIndex = 1;
    soccerBall.style.zIndex = 2;

    const key9Frame1 = offense.animate([{ left: '1000px', top : '300px'}], {duration: 1500 / divider, easing: 'linear'});
    const key9Frame2 = offense.animate([{ left: '1000px', top : '300px'}, { left: '1500px', top : '200px'}], {duration: 1500 / divider, easing: 'linear', delay: 1500 / divider});
    const key9Frame3 = offense.animate([{ left: '1500px', top : '200px'}, {left: '1600px', top: '500px'} ], {duration: 1500 / divider, easing: 'linear', delay: 3000 / divider});
    const key9Frame4 = offense.animate([{left: '1600px', top: '500px'}, {left: '1000px', top: '600px'} ], {duration: 1500 / divider, easing: 'linear', delay: 4500 / divider});
    const key9Frame5 = defender.animate([{ left: '1300px', top : '300px'}], {duration: 1500 / divider, easing: 'linear'});
    const key9Frame6 = defender.animate([{ left: '1300px', top : '300px'}, { left: '1200px', top : '250px'}], {duration: 1500 / divider, easing: 'linear', delay: 1500 / divider});
    const key9Frame7 = defender.animate([{ left: '1200px', top : '250px'}, { top: '400px', left : '1300px'}], {duration: 1500 / divider, easing: 'linear', delay: 3000 / divider});
    const key9Frame8 = defender.animate([{ top: '400px', left : '1300px'}, { top : '500px', left: '1400px'}], {duration: 1500 / divider, easing: 'linear', delay: 4500 / divider});
    const key10Frame9 = soccerBall.animate([{top:'0px', left: '1000px', transform : 'rotate(270deg)'}], { duration: 900 / divider, easing: 'linear', delay : 5100 / divider});

    setTimeout(() => {
        defender.style.zIndex = 2;
        offense.style.zIndex = 3;
        soccerBall.style.zIndex = 4;
    }, 3000 / divider);
}

buttonMenu();
