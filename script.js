let userScore=0;;
let computerScore=0;

const drawGame = () =>{

    msg.innerText = "Game was Draw"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        msg.innerText = `You Won!... ${userChoice} beats ${compChoice}`
        uscore.innerText = userScore
        msg.style.backgroundColor = "green";
    }
    

    else{
        computerScore++;
        console.log("You Lose")
        msg.innerText = `You Lost !... ${compChoice} beats ${userChoice}`
        compScore.innerText = computerScore;
        msg.style.backgroundColor = "red";
    }
    
}
const playGame = (userChoice) => {
    console.log("user choice : " ,userChoice)
// generate computer choice
    const compChoice = getcompChpice();
    console.log("computer choice : ", compChoice)


    if(userChoice == compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock')
        {
            userWin = compChoice === 'paper' ? false: true
        }
        else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true
        }

        else{
            userWin = compChoice === 'rock '? false : true
        }

        showWinner(userWin ,userChoice,compChoice);
    }
    













}

const getcompChpice = () => {
    const options = ["rock","paper", "scissors"]
    const randomindex = Math.floor(Math.random() * 3) ;
    return options[randomindex]
}

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const uscore = document.querySelector("#user-score")
const compScore = document.querySelector("#computer-score");
choices.forEach((choice) => {


  
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
       

        playGame(userChoice);
});
});
    
