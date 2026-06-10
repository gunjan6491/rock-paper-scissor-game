let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const compChoice=()=>{
    const options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
};

const drawGame=()=>{
    console.log("the game was draw")
    msg.innerText="opps!! its a draw";
    msg.style.backgroundColor="black";

};

const showWinner=(win,userchoice,compchoice)=>{
    if (win){
        userScore++;
        user_score.innerText=userScore;
        msg.innerText=`congrats!! you won ${userchoice} beats ${compchoice} `;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        comp_score.innerText=compScore;
        msg.innerText=`Sorry!! you lost ${compchoice} beats ${userchoice} `;
        msg.style.backgroundColor="red";
    }

};


const playGame =(userchoice)=>{
    console.log("user choosed ",userchoice);
    const compchoice=compChoice();
    console.log("cumputer choosed",compchoice);

    if (userchoice === compchoice){
        //draw
        drawGame();
    }else{
        let win=true;
        if (userchoice==="rock"){
            win = compchoice ==="paper"? false:true;
        }
        else if (userchoice==="paper"){
            win = compchoice==="scissors"?false:true;
        }
        else{
            win=compchoice==="rock"?false:true;
        }
        showWinner(win,userchoice,compchoice);
    }

};

choices.forEach((Choice)=>{
    Choice.addEventListener("click",()=>{
        const userchoice=Choice.getAttribute("id");
        console.log(userchoice);
        playGame(userchoice)
    });

});