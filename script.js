currentPlayer = 1
gameActive = false

function Gameboard(){
    this.board = [
        ["| |","| |","| |"],
        ["| |","| |","| |"],
        ["| |","| |","| |"]
    ]
}

function Player (name,marker){
    this.name = name
    this.marker = marker
}

function updateTurnDisplay(){
    if(currentPlayer == 1){
        document.getElementById("turnDisplay").textContent = player1.name + "'s Turn (X)"
    } else {
        document.getElementById("turnDisplay").textContent = player2.name + "'s Turn (O)"
    }
}

function playerMove(position){

    if(!gameActive) return

    
    let row, col

    switch(position){
        case "a1": row=0; col=0; break
        case "a2": row=0; col=1; break
        case "a3": row=0; col=2; break
        case "b1": row=1; col=0; break
        case "b2": row=1; col=1; break
        case "b3": row=1; col=2; break
        case "c1": row=2; col=0; break
        case "c2": row=2; col=1; break
        case "c3": row=2; col=2; break
    }

    if(newBoard.board[row][col] !== "| |"){
        return
    }

    if(currentPlayer == 1){
        newBoard.board[row][col] = player1.marker
    } else {
        newBoard.board[row][col] = player2.marker
    }

    document.querySelector(`[data-pos='${position}']`).textContent =
        newBoard.board[row][col]

    if(winCondition() == false){
        gameActive = false
        return
    }
    if(currentPlayer == 1){
        currentPlayer = 2
    } else {
        currentPlayer = 1
}
    checkTie()
    updateTurnDisplay()
}

function checkWinner (boardX,boardY){
    if (newBoard.board[boardX][boardY] === "X") {
        document.getElementById("result").textContent =
            player1.name + " has won!"
    } else {
        document.getElementById("result").textContent =
            player2.name + " has won!"
    }
}

function checkTie(){
    let filled = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(newBoard.board[i][j] !== "| |"){
                filled++
            }
        }
    }

    if(filled == 9){
        document.getElementById("result").textContent = "It's a tie!"
        gameActive = false
    }
}

function winCondition (){
    switch(true) {
        case ((newBoard.board[0][0] === newBoard.board[0][1] && newBoard.board[0][0] === newBoard.board[0][2]) && 
        (newBoard.board[0][0] !== "| |")):
            checkWinner(0,0); return false

        case ((newBoard.board[1][0] === newBoard.board[1][1] && newBoard.board[1][0] === newBoard.board[1][2]) && 
        (newBoard.board[1][0] !== "| |")):
            checkWinner(1,0); return false

        case ((newBoard.board[2][0] === newBoard.board[2][1] && newBoard.board[2][0] === newBoard.board[2][2])&& 
        (newBoard.board[2][0] !== "| |")):
            checkWinner(2,0); return false

        case ((newBoard.board[0][0] === newBoard.board[1][0] && newBoard.board[0][0] === newBoard.board[2][0])&& 
        (newBoard.board[0][0] !== "| |")):
            checkWinner(0,0); return false

        case ((newBoard.board[0][1] === newBoard.board[1][1] && newBoard.board[0][1] === newBoard.board[2][1])&& 
        (newBoard.board[0][1] !== "| |")):
            checkWinner(0,1); return false

        case ((newBoard.board[0][2] === newBoard.board[1][2] && newBoard.board[0][2] === newBoard.board[2][2])&& 
        (newBoard.board[0][2] !== "| |")):
            checkWinner(0,2); return false

        case ((newBoard.board[0][0] === newBoard.board[1][1] && newBoard.board[0][0] === newBoard.board[2][2])&& 
        (newBoard.board[0][0] !== "| |")):
            checkWinner(0,0); return false

        case ((newBoard.board[2][0] === newBoard.board[1][1] && newBoard.board[2][0] === newBoard.board[0][2])&& 
        (newBoard.board[2][0] !== "| |")):
            checkWinner(2,0); return false
    }   
}

function game(){
    player1 = new Player(
        document.getElementById("player1Name").value || "Player 1",
        "X"
    )

    player2 = new Player(
        document.getElementById("player2Name").value || "Player 2",
        "O"
    )

    newBoard = new Gameboard()
    currentPlayer = 1
    gameActive = true
    document.getElementById("result").textContent = ""

    document.querySelectorAll(".cell").forEach(cell => {
        cell.textContent = ""
        cell.addEventListener("click", function(){
            playerMove(this.dataset.pos)
        })
    })

    updateTurnDisplay()
}
