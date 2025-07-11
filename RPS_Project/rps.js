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
function getHumanChoice(){

    while(true){
    let choice = prompt("please enter your choice to play");
    choice = choice.toLowerCase();
        if(choice === "rock" || choice === "paper" || choice === "scissors" )
         return choice;
        else
        console.log("please enter a valid choice");
    }
}

function playRound(C_choice,H_choice){
if(C_choice === H_choice)
    console.log("Draw")
else if((C_choice ==="rock" && H_choice === "scissors") ){
    console.log("Rock beats Scissors, Computer wins!");
    computer_score++;
}
else if((C_choice ==="scissors" && H_choice === "paper") ){
    console.log("Scissors beats paper, Computer wins!");
    computer_score++;
}
else if( (C_choice ==="paper" && H_choice === "rock")){
    console.log("paper beats rock, Computer wins!");
    computer_score++;
}
else if((H_choice ==="rock" && C_choice === "scissors") ){
    console.log("Rock beats Scissors, Human wins!");
    human_score++;
}
else if((H_choice ==="scissors" && C_choice === "paper") ){
    console.log("Scissors beats paper, Human wins!");
    human_score++;
}
else if((H_choice ==="paper" && C_choice === "rock")){
    console.log("paper beats rock, Human wins!");
    human_score++;
}
}

function playGame(){

let Rounds_to_Play;

while(true){
try{
Rounds_to_Play = parseInt(prompt("enter how many times you want to play"));
    if(isNaN(Rounds_to_Play))
        throw new Error("you entered the wrong type of data")

break;
}
catch(error){
  console.error(error.message);
}}

for(let i = 0;i < Rounds_to_Play;i++){
C_choice = getComputerChoice();
H_choice = getHumanChoice();

playRound(C_choice,H_choice);


}

if(human_score>computer_score){
    console.log(`Human is the final winner with score ${human_score}`);
    console.log(`Computer score is ${computer_score}`);
}
else if(human_score<computer_score){
    console.log(`Computer is the final winner with score ${computer_score}`);
    console.log(`Human score is ${human_score}`);
}
else{
    console.log("its a draw!!");
}

}



let human_score =0;
let computer_score = 0;
playGame();