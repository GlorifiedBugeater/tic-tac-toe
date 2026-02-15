currentPlayer = 0

function Gameboard(){
    this.board = [
        ["| |","| |","| |"],
        ["| |","| |","| |"],
        ["| |","| |","| |"]
    ]
    this.showBoard = function(){
        console.log("this is the board right now")
        console.log(this.board[0])
        console.log(this.board[1])
        console.log(this.board[2])
    }
   
}

function Player (name,marker){
    this.name = name
    this.marker = marker
    this.sayName = function() {
        console.log(this.name);
    };
}

player1 = new Player(prompt("declare player one, your marker is X"))
player1.marker = "X"
player2 = new Player(prompt("declare player two, your marker is O"))
player2.marker = "O"
newBoard = new Gameboard()
player1.sayName()
newBoard.showBoard()


function playerMove(){
    switch (currentPlayer) {
        case 0:
            currentPlayer = 1;
        case 1:
            currentPlayer = 2;
        case 2:
            currentPlayer = 1   
    }
    let playerChoice = prompt('write position: a1 a2 a3 b1 b2 b3 c1 c2 c3')
    
    while (true) {
        a = true
        switch (true) {
            case (playerChoice == "a1" && newBoard.board[0][0] !== "| |"):
                playerChoice = prompt('This position has already been taken, please select again: a1 a2 a3 b1 b2 b3 c1 c2 c3')
                break
            case (playerChoice == "a2" && newBoard.board[0][1] !== "| |"):
                playerChoice = prompt('This position has already been taken, please select again: a1 a2 a3 b1 b2 b3 c1 c2 c3')
                break
            case (playerChoice == "a3" && newBoard.board[0][2] !== "| |"):
                playerChoice = prompt('This position has already been taken, please select again: a1 a2 a3 b1 b2 b3 c1 c2 c3')
                break
            case (playerChoice == "b1" && newBoard.board[1][0] !== "| |"):
                playerChoice = prompt('This position has already been taken, please select again: a1 a2 a3 b1 b2 b3 c1 c2 c3')
                break
            case (playerChoice == "b2" && newBoard.board[1][1] !== "| |"):
                playerChoice = prompt('This position has already been taken, please select again: a1 a2 a3 b1 b2 b3 c1 c2 c3')
                break
            case (playerChoice == "b3" && newBoard.board[1][2] !== "| |"):
                playerChoice = prompt('This position has already been taken, please select again: a1 a2 a3 b1 b2 b3 c1 c2 c3')
                break
            case (playerChoice == "c1" && newBoard.board[2][0] !== "| |"):
                playerChoice = prompt('This position has already been taken, please select again: a1 a2 a3 b1 b2 b3 c1 c2 c3')
                break
            case (playerChoice == "c2" && newBoard.board[2][1] !== "| |"):
                playerChoice = prompt('This position has already been taken, please select again: a1 a2 a3 b1 b2 b3 c1 c2 c3')
                break
            case (playerChoice == "c3" && newBoard.board[2][2] !== "| |"):
                playerChoice = prompt('This position has already been taken, please select again: a1 a2 a3 b1 b2 b3 c1 c2 c3')
                break
            default:
                a = false
        }
        if (a==false){
            break
        }
    }

    switch (true) {
        case (playerChoice == "a1" && currentPlayer == 1):
        newBoard.board[0][0] = player1.marker
        newBoard.showBoard()
        break
        case (playerChoice == "a1" && currentPlayer == 2):
        newBoard.board[0][0] = player2.marker
        newBoard.showBoard()
        break
        case (playerChoice == "a2" && currentPlayer == 1):
        newBoard.board[0][1] = player1.marker
        newBoard.showBoard()
        break
        case (playerChoice == "a2" && currentPlayer == 2):
        newBoard.board[0][1] = player2.marker
        newBoard.showBoard()
        break
        case (playerChoice == "a3" && currentPlayer == 1):
        newBoard.board[0][2] = player1.marker
        newBoard.showBoard()
        break
        case (playerChoice == "a3" && currentPlayer == 2):
        newBoard.board[0][2] = player2.marker
        newBoard.showBoard()
        break
        case (playerChoice == "b1" && currentPlayer == 1):
        newBoard.board[1][0] = player1.marker
        newBoard.showBoard()
        break
        case (playerChoice == "b1" && currentPlayer == 2):
        newBoard.board[1][0] = player2.marker
        newBoard.showBoard()
        break
        case (playerChoice == "b2" && currentPlayer == 1):
        newBoard.board[1][1] = player1.marker
        newBoard.showBoard()
        break
        case (playerChoice == "b2" && currentPlayer == 2):
        newBoard.board[1][1] = player2.marker
        newBoard.showBoard()
        break
        case (playerChoice == "b3" && currentPlayer == 1):
        newBoard.board[1][2] = player1.marker
        newBoard.showBoard()
        break
        case (playerChoice == "b3" && currentPlayer == 2):
        newBoard.board[1][2] = player2.marker
        newBoard.showBoard()
        break
        case (playerChoice == "c1" && currentPlayer == 1):
        newBoard.board[2][0] = player1.marker
        newBoard.showBoard()
        break
        case (playerChoice == "c1" && currentPlayer == 2):
        newBoard.board[2][0] = player2.marker
        newBoard.showBoard()
        break
        case (playerChoice == "c2" && currentPlayer == 1):
        newBoard.board[2][1] = player1.marker
        newBoard.showBoard()
        break
        case (playerChoice == "c2" && currentPlayer == 2):
        newBoard.board[2][1] = player2.marker
        newBoard.showBoard()
        break
        case (playerChoice == "c3" && currentPlayer == 1):
        newBoard.board[2][2] = player1.marker
        newBoard.showBoard()
        break
        case (playerChoice == "c3" && currentPlayer == 2):
        newBoard.board[2][2] = player2.marker
        newBoard.showBoard()
        break
    }

}

function checkWinner (boardX,boardY){
    if (newBoard.board[boardX][boardY] === "X") {
        console.log(player1.name, "has won!")
    } else {
        console.log(player2.name, "has won!")
    }
}

function winCondition (){
    switch(true) {
        case ((newBoard.board[0][0] === newBoard.board[0][1] && newBoard.board[0][0] === newBoard.board[0][2]) && 
        (newBoard.board[0][0] !== "| |" && newBoard.board[0][1] !== "| |" && newBoard.board[0][2] !== "| |")):
            checkWinner(0,0)
            break
        case ((newBoard.board[1][0] === newBoard.board[1][1] && newBoard.board[1][0] === newBoard.board[1][2]) && 
        (newBoard.board[1][0] !== "| |" && newBoard.board[1][1] !== "| |" && newBoard.board[1][2] !== "| |")):
            checkWinner(1,0)
            break
        case ((newBoard.board[2][0] === newBoard.board[2][1] && newBoard.board[2][0] === newBoard.board[2][2])&& 
        (newBoard.board[2][0] !== "| |" && newBoard.board[2][1] !== "| |" && newBoard.board[2][2] !== "| |")):
            checkWinner(2,0)
            break
        case ((newBoard.board[0][0] === newBoard.board[1][0] && newBoard.board[0][0] === newBoard.board[2][0])&& 
        (newBoard.board[0][0] !== "| |" && newBoard.board[1][0] !== "| |" && newBoard.board[2][0] !== "| |")):
            checkWinner(0,0)
            break
        case ((newBoard.board[0][1] === newBoard.board[1][1] && newBoard.board[0][1] === newBoard.board[2][1])&& 
        (newBoard.board[0][1] !== "| |" && newBoard.board[1][1] !== "| |" && newBoard.board[2][1] !== "| |")):
            checkWinner(0,1)
            break
        case ((newBoard.board[0][2] === newBoard.board[1][2] && newBoard.board[0][2] === newBoard.board[2][2])&& 
        (newBoard.board[0][2] !== "| |" && newBoard.board[1][2] !== "| |" && newBoard.board[2][2] !== "| |")):
            checkWinner(0,2)
            break
        case ((newBoard.board[0][0] === newBoard.board[1][1] && newBoard.board[0][0] === newBoard.board[2][2])&& 
        (newBoard.board[0][0] !== "| |" && newBoard.board[1][1] !== "| |" && newBoard.board[2][2] !== "| |")):
            checkWinner(0,0)
            break
        case ((newBoard.board[2][0] === newBoard.board[1][1] && newBoard.board[2][0] === newBoard.board[0][2])&& 
        (newBoard.board[2][0] !== "| |" && newBoard.board[1][1] !== "| |" && newBoard.board[0][2] !== "| |")):
            checkWinner(2,0)
            break
        default:
            console.log("No winner this round")
    }   
}

// playerMove()
winCondition()