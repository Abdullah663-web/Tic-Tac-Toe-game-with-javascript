// let boxes=document.querySelectorAll(".box");
// let resetbtn = document.querySelector("#reset-game");
// let newgamebtn = document.querySelector("#new-btn");
// let msgcontainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");


// let turn0= true; 
// let Winner= [
//    [0,1,2],
//    [3,4,5],
//    [6,7,8],
//    [0,3,6],
//    [0,4,8],
//    [1,4,7],
//    [2,4,6],
//    [2,5,8]
// ];
// boxes.forEach((box) =>{
//  box.addEventListener("click", ( ) => {
// console.log("Button was clicked!");
// if(turn0){
//     box.innerText = "0";
//     turn0=false;
// } else{
//     box.innerText ="x";
//     turn0=true;
// }
//     box.disabled= true;

//     checkWinner();
//  });
// });

// const  showwinner= () => {
//     msg.innerText= `congratulation, winner is ${winner}`;
//     msgcontainer.classList.remove("hide");
// }
// const checkWinner =  () => {
//     for (let pattern of Winner ) {
//     pos1val=boxes[pattern[0]].innerText;
//     pos2val=boxes[pattern[1]].innerText;
//     pos3val=boxes[pattern[2]].innerText;
//     if(pos1val !="" && pos2val != "" && pos3val !=""){
//         if(pos1val === pos2val && pos2val===pos3val){
//             console.log("winner" , pos1val);
//             showwinner(pos1val);
//         }
//     }
//     }
// };

// newgamebtn.addEventListener("click",resetgame);
// resetbtn.addEventListener("click",resetgame);



let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-game");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // True for 'O', False for 'X'
let WinnerPatterns = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
];

// Add event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// Function to show winner message
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableAllBoxes();
};

// Function to check for a winner
const checkWinner = () => {
    for (let pattern of WinnerPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return;
        }
    }
};

// Function to disable all boxes after a win
const disableAllBoxes = () => {
    boxes.forEach((box) => box.disabled = true);
};

// Function to reset the game
const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    msgContainer.classList.add("hide");
};

// Attach reset function to buttons
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
