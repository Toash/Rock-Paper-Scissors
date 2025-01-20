function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    const choice = prompt("What is your choice?")
    return choice.trim();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                console.log("rock and rock, tie!");
            }
            else if (computerChoice === "paper") {
                console.log("paper beats rock, you lose!")
                computerScore++;
            }
            else if (computerChoice === "scissors") {
                console.log("rock beats scissors, you win!");
                humanScore++;
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("paper beats rock, you win!")
                humanScore++;
            }
            else if (computerChoice === "paper") {
                console.log("paper and paper, tie!");
            }
            else if (computerChoice === "scissors") {
                console.log("scissors beats paper, you lose!")
                computerScore++;
            }
        }
        else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("rock beats scissors, you lose!")
                computerScore++;
            }
            else if (computerChoice === "paper") {
                console.log("scissors beats paper, you win!")
                humanScore++;
            }
            else if (computerChoice === "scissors") {
                console.log("scissors and scissors, tie!");
            }
        }
    }


    const rockButton = document.querySelector("#rock")
    const paperButton = document.querySelector("#paper")
    const scissorsButton = document.querySelector("#scissors")

    const score = document.querySelector("#score")
    const winner = document.querySelector("#winner")

    let getScoreDisplay = () => `Human score: ${humanScore} Computer score: ${computerScore}`

    function endGame() {
        rockButton.removeEventListener("click", chooseRock)
        paperButton.removeEventListener("click", choosePaper)
        scissorsButton.removeEventListener("click", chooseScissors)
    }

    function choose(choice) {
        playRound(choice, getComputerChoice())
        score.textContent = getScoreDisplay()
        if (humanScore >= 5) {
            winner.textContent = "Human wins!"
            endGame()

        } else if (computerScore >= 5) {
            winner.textContent = "Robots win... :("
            endGame()
        }
    }

    // define all of these functions so that we can pass a function to removeEventListener.
    function chooseRock() {
        choose("rock")
    }
    function choosePaper() {
        choose("paper")
    }
    function chooseScissors() {
        choose("scissors")
    }


    rockButton.addEventListener("click", chooseRock)
    paperButton.addEventListener("click", choosePaper)
    scissorsButton.addEventListener("click", chooseScissors)


}

playGame()