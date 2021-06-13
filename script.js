// Magic

// Magic Variables

const gameSetup = document.getElementById("gameSetup");

const numOfPlayers = document.getElementById("setupPlayers");

const startLifeTotal = document.getElementById("setupLife");

const setupSubmitButton = document.getElementById("gameSetupSubmit");

const playersArr = Array.from(document.getElementsByClassName("player"));

const lifeTotals = Array.from(document.getElementsByClassName("life"));

const counterButtons = Array.from(document.getElementById("lifeCounters").getElementsByTagName("button"));

const resetGame = document.getElementById("resetGame");

const playerNameInputs = Array.from(document.getElementsByClassName("playerName"));

let startLifeTotalnum;

let lives;

// Magic Event Listeners

setupSubmitButton.addEventListener("click", setupGame);

counterButtons.forEach(e => e.addEventListener("click", functionFinder));

resetGame.addEventListener("click", resetGameFunction);

// Magic Functions

// Setup Function

function setupGame (event) {
    event.preventDefault();

    startLifeTotalnum = parseInt(startLifeTotal.value);

    if (startLifeTotal.value === "") {
        startLifeTotalnum = 20;
    }

    lives = {
        p1: startLifeTotalnum, 
        p2: startLifeTotalnum, 
        p3: startLifeTotalnum, 
        p4: startLifeTotalnum
    }

    displayLife();

    switch (numOfPlayers.value) {
        case "2":
            playersArr[0].style.display = "flex";
            playersArr[1].style.display = "flex";
            
            break;
        
        case "3":
            playersArr[0].style.display = "flex";
            playersArr[1].style.display = "flex";
            playersArr[2].style.display = "flex";
            
            break;

        case "4":
            playersArr.forEach(e => e.style.display = "flex");
        
            break;
    }

    gameSetup.style.display = "none";

    resetGame.style.display = "block";
}

// Display current life totals

function displayLife() {
    lifeTotals.forEach((e, i) => e.textContent = Object.values(lives)[i]);
}

// Life count functions

    function functionFinder (event) {
        let buttonType = event.target.classList[0];

        let buttonPlayer = event.target.parentElement.id;

        switch (buttonType[0]) {
            case "+":
                counterFunctions.add(buttonPlayer, parseInt(buttonType[1]));
                break;

            case "-":
                counterFunctions.subtract(buttonPlayer, parseInt(buttonType[1]));
                break;
            case "r":
                counterFunctions.reset(buttonPlayer);
                break;
        }
    }

    const counterFunctions = {
        "add": function(p, n) {
            lives[p]+=n;

            displayLife();
        },

        "subtract": function(p, n) {
            lives[p]-=n;

            displayLife();
        },

        "reset": function(p) {

            let pName =  document.getElementById(p).getElementsByTagName("input")[0].value === "" ? `Player ${p[1]}` : document.getElementById(p).getElementsByTagName("input")[0].value

            let message = `That's a nice life total ${pName} has there, shame if something were to happen to it...\n\nPress OK to reset their life total\n\nPress Cancel to spare it`

            let confirmation = confirm(message);

            if (confirmation) {
                lives[p] = startLifeTotalnum;

                displayLife();
            }
            
        },
    }

    // Reset the game

    function resetGameFunction () {
        let confirmation = confirm("That's a nice game you got there, shame if something were to happen to it...\n\nPress OK to end the game\n\nPress Cancel to spare it");

        if (confirmation) {
            gameSetup.style.display = "flex";

            playersArr.forEach(e => e.style.display = "none");

            playerNameInputs.forEach(e => e.value = "");

            resetGame.style.display = "none";
        }
        
    }