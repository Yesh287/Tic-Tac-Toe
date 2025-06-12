let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset"); 
let newGame = document.querySelector("#newGame"); 
let turn = true; // 1st player's turn
let Result = document.querySelector(".result");
let announcement = document.querySelector("#winner");
let turnAnnoucement = document.querySelector("#turnAnnoucement");
console.log(turnAnnoucement);
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn){
            box.innerHTML = "X";
            turnAnnoucement.innerText = "O's Turn";
        }
        else{
            box.innerHTML = "O";
            turnAnnoucement.innerText = "X's Turn";
        }
        turn = !turn;
        box.disabled = true;
        checkWinner();
    })
});
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 === pos2 && pos2 === pos3 && pos1 != ""){
            let winner = turn?'O':'X';
            declareWinner(winner);
        }
    }
}
const declareWinner = (winner) => {
    Result.classList.remove("hide");
    announcement.innerText = `Congratulations! Winner is ${winner}`;
    for(let box of boxes){
        box.disabled = true;
    }
    window.scrollTo({top:0,behavior:"instant"});
}
const resetGame = () =>{
    turn = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    turnAnnoucement.innerText = "X's Turn";
    Result.classList.add("hide");
}
reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);