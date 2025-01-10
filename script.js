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



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === "rock")
    {
        if(computerChoice === "rock")
        {
            console.log("rock and rock, tie!");
        } 
        else if(computerChoice === "paper")
        {
            console.log("paper beats rock, you lose!")
            computerScore++;
        } 
        else if(computerChoice === "scissors")
        {
            console.log("rock beats scissors, you win!");
            humanScore++;
        }
    } 
    else if(humanChoice === "paper")
    {
        if(computerChoice === "rock")
        {
            console.log("paper beats rock, you win!")
            humanScore++;
        } 
        else if(computerChoice === "paper")
        {
            console.log("paper and paper, tie!");
        } 
        else if(computerChoice === "scissors")
        {
            console.log("scissors beats paper, you lose!")
            computerScore++;
        }
    } 
    else if(humanChoice === "scissors")
    {
        if(computerChoice === "rock")
        {
            console.log("rock beats scissors, you lose!")
            computerScore++;
        } 
        else if(computerChoice === "paper")
        {
            console.log("scissors beats paper, you win!")
            humanScore++;
        } 
        else if(computerChoice === "scissors")
        {
            console.log("scissors and scissors, tie!");
        }
    }
    }

    let humanChoice = ""
    let computerChoice = ""
    console.log("Playing 5 rounds of rock paper scissors.")
    for(i=0;i<5;i++){
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

        playRound(humanChoice,computerChoice)
        console.log({humanScore,computerScore})
    }
}

playGame()