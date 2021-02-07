var userScore= 0;
var compScore= 0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("Computer-score");
const scoreBoard_div= document.querySelector(".Score-board");
const result_p= document.querySelector(".Results > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComputerChoice(userChoice){
    const choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convert(letter){
    if(letter=="r") return "Rock";
    if(letter=="p") return "Paper"; 
    else return "Scissor";
}

function win(user, computer ){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    const subscriptUser="user".fontsize(4).sub();
    const subscriptComp="compu".fontsize(4).sub();
    result_p.innerHTML = convert(user) + subscriptUser+ " beats "+ convert(computer) +subscriptComp+ ". You Win!";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('green-glow'); }, 400);
}
function lose(user, computer) {
    compScore++;
    computerScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    const subscriptUser="user".fontsize(4).sub();
    const subscriptComp="compu".fontsize(4).sub();
    result_p.innerHTML = convert(user) + subscriptUser+ " loses to "+ convert(computer) +subscriptComp+ ". You lost!";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('red-glow'); }, 400);
}
function draw(user, computer) {
    const subscriptUser="user".fontsize(4).sub();
    const subscriptComp="compu".fontsize(4).sub();
    result_p.innerHTML = convert(user) + subscriptUser+ " equals "+ convert(computer) +subscriptComp+ ". It's a draw!";
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('grey-glow'); }, 400);
}

function game(userChoice){
    const computerChoice= getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
function main() {
rock_div.addEventListener('click', function(){
    game("r")
})
paper_div.addEventListener('click', function(){
   game("p")
})
scissors_div.addEventListener('click', function(){
   game("s");
})
}
main();