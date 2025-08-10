let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let message = document.querySelector("#message");
let messageContainer = document.querySelector(".messageContainer");

let currentPlayer = "x";
let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

resetBtn.addEventListener("click", ()=>{
    currentPlayer = "x";
    messageContainer.classList.add("hide");
    enable();
})

newGameBtn.addEventListener("click", ()=>{
    currentPlayer = "x";
    messageContainer.classList.add("hide");
    enable();
})

const disable =() => {
    boxes.forEach(box => {
        box.disabled = true;
    })
}

const enable =() => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    })
}


const checkWin = () => {
    for (let pattern of winPatterns){
        let aPos = boxes[pattern[0] ].innerText;
        let bPos = boxes[pattern[1] ].innerText;
        let cPos = boxes[pattern[2] ].innerText
        if(aPos !== "" && bPos !== "" && cPos !== ""){
            if(aPos === bPos && bPos === cPos){
                message.innerText = `Player ${aPos} wins!`;
                messageContainer.classList.remove("hide");
                console.log("winner");
                disable();
            }
         }
    }
}


boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if (box.innerText === ""){
            box.innerText = currentPlayer;
            currentPlayer = currentPlayer === "x" ? "o" : "x";
            checkWin();
        }
    })
});