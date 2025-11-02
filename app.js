let userscore = 0;
let computerscore = 0;
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#computer-score");
const uChoise = document.querySelector("#user-choise");
const cChoise = document.querySelector("#com-choise");


const getComChoices = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randomId = Math.floor(Math.random() * 3);
    return options[randomId];
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again!"
}


const showWinner = (userWin ,userChoise, comChoice) => {
    if(userWin === true){
        userscore++;
        uScore.innerText = userscore;
        msg.innerText = 'You win!';
    }
    else{
        computerscore++;
        cScore.innerText = computerscore;
        msg.innerText = "You lose!";
    }
}

let userChoise;
let comChoice;
const playGame = (userChoise) => {
    uChoise.innerText = userChoise;
    const comChoice = getComChoices();
     cChoise.innerText = comChoice; 
    if (userChoise === comChoice){
        drawGame();
    } 
    else
    {
    let userWin = true;
        if(userChoise === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } 
        else if (userChoise === "paper"){
            userWin = comChoice === "scissors" ? false : true;
        }
        else {
            userWin = comChoice === "rock" ? false : true;
        }
    showWinner(userWin , userChoise , comChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoise = choice.getAttribute("id");
        playGame(userChoise);
        getComChoices();
    });
});