function getComputerChoice(){
   let Choice = Math.floor(Math.random()*3);
   switch(Choice){
    case 1: return "rock";
    break;
    case 2: return "paper";
    break;
    default: return "scissors";
    break;
}
}

function playRound(C_choice,H_choice){
    
if((C_choice ==="rock" && H_choice === "scissors") ){
    
    computer_score++;
}
else if((C_choice ==="scissors" && H_choice === "paper") ){
    
    computer_score++;
}
else if( (C_choice ==="paper" && H_choice === "rock")){
    
    computer_score++;
}
else if((H_choice ==="rock" && C_choice === "scissors") ){
    
    human_score++;
}
else if((H_choice ==="scissors" && C_choice === "paper") ){
    
    human_score++;
}
else if((H_choice ==="paper" && C_choice === "rock")){
    
    human_score++;
}
}

function playGame(H_choice){

let Rounds_to_Play;

while(true){
try{
Rounds_to_Play = 1
    if(isNaN(Rounds_to_Play))
        throw new Error("you entered the wrong type of data")

break;
}
catch(error){
  console.error(error.message);
}}

for(let i = 0;i < Rounds_to_Play;i++){
C_choice = getComputerChoice();


playRound(C_choice,H_choice);


}

if(human_score>computer_score && human_score ===5){
    const final = document.createElement("div");
    final.textContent = `Human is the final winner `;
    const D = document.querySelector("div");
    D.append(final);
    setTimeout(function(){
    location.reload(true);
    }, 3000)
}
else if(human_score<computer_score && computer_score ===5){

    const final = document.createElement("div");
    final.textContent = `computer is the final winner `;
    const D = document.querySelector("div");
    D.append(final);
    setTimeout(function(){
    location.reload(true);
    }, 3000)
}}


let human_score =0;
let computer_score = 0;

const R = document.querySelector("#R");
const S = document.querySelector("#S");
const P = document.querySelector("#P");

const h_Score = document.querySelector("#hScore");
const c_Score = document.querySelector("#cScore");


R.addEventListener("click",()=>{
    playGame("rock" );
    h_Score.textContent = `${human_score}`;
    c_Score.textContent = `${computer_score}`;
})
P.addEventListener("click",()=>{
    playGame("paper");
    h_Score.textContent = `${human_score}`;
    c_Score.textContent = `${computer_score}`;
})
S.addEventListener("click",()=>{
    playGame("scissors");
    h_Score.textContent = `${human_score}`;
    c_Score.textContent = `${computer_score}`;
})
