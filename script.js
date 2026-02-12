function Gameboard(){
    this.board = [
        ["| |","| |","| |"],
        ["| |","| |","| |"],
        ["| |","| |","| |"]
    ]
    this.showBoard = function(){
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

function player1Move(){
    prompt('write position: a1 a2 a3 b1 b2 b3 c1 c2 c3')
    
}

player1 = new Player(prompt("declare player one"))
player2 = new Player(prompt("declare player two"))
newBoard = new Gameboard()
player1.sayName()
newBoard.showBoard()
