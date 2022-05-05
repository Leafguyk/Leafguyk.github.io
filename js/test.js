function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
function range(start, end) {

    var arr = [];

    var length = end - start; 

    for (var i = 0; i <= length; i++) { 

        arr[i] = start;
        start++;
    }

    return arr;
}
class Game2048{
    constructor(){
        this.board = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ];
        this.turn = 0;
    }
    upClick(){
        var turnedBoard = [
            [this.board[3][0],this.board[2][0],this.board[1][0],this.board[0][0]],
            [this.board[3][1],this.board[2][1],this.board[1][1],this.board[0][1]],
            [this.board[3][2],this.board[2][2],this.board[1][2],this.board[0][2]],
            [this.board[3][3],this.board[2][3],this.board[1][3],this.board[0][3]]
        ];
        var y=0;
        for (var i of turnedBoard){
            for (var j of range(0,2)){
                if (i[j]===i[j+1] || i[j+1]===0){
                    turnedBoard[y][j+1]=i[j]+i[j+1];
                    turnedBoard[y][j]=0;
                }
            }
            for (var j of range(0,2)){
                if (i[j]===i[j+1] || i[j+1]===0){
                    turnedBoard[y][j+1]=i[j]+i[j+1];
                    turnedBoard[y][j]=0;
                }
            }
            for (var j of range(0,2)){
                if (i[j]===i[j+1] || i[j+1]===0){
                    turnedBoard[y][j+1]=i[j]+i[j+1];
                    turnedBoard[y][j]=0;
                }
            }
            y++;
        }
        this.board = [
            [turnedBoard[0][3],turnedBoard[1][3],turnedBoard[2][3],turnedBoard[3][3]],
            [turnedBoard[0][2],turnedBoard[1][2],turnedBoard[2][2],turnedBoard[3][2]],
            [turnedBoard[0][1],turnedBoard[1][1],turnedBoard[2][1],turnedBoard[3][1]],
            [turnedBoard[0][0],turnedBoard[1][0],turnedBoard[2][0],turnedBoard[3][0]]
        ];
        this.turn++;
        return this.board;
    }
    rightClick(){
        var y=0;
        for (var i of this.board){
            for (var j of range(0,2)){
                if (i[j]===i[j+1] || i[j+1]===0){
                    this.board[y][j+1]=i[j]+i[j+1];
                    this.board[y][j]=0;
                }
            }
            for (var j of range(0,2)){
                if (i[j]===i[j+1] || i[j+1]===0){
                    this.board[y][j+1]=i[j]+i[j+1];
                    this.board[y][j]=0;
                }
            }
            for (var j of range(0,2)){
                if (i[j]===i[j+1] || i[j+1]===0){
                    this.board[y][j+1]=i[j]+i[j+1];
                    this.board[y][j]=0;
                }
            }
            y++;
        }
        this.turn++;
        return this.board;
    }
    downClick(){
        var turnedBoard = [
            [this.board[3][0],this.board[2][0],this.board[1][0],this.board[0][0]],
            [this.board[3][1],this.board[2][1],this.board[1][1],this.board[0][1]],
            [this.board[3][2],this.board[2][2],this.board[1][2],this.board[0][2]],
            [this.board[3][3],this.board[2][3],this.board[1][3],this.board[0][3]]
        ];
        var y=0;
        for (var i of turnedBoard){
            for (var j of range(0,2)){
                if (i[j]===i[j+1] || i[j]===0){
                    turnedBoard[y][j]=i[j]+i[j+1];
                    turnedBoard[y][j+1]=0;
                }
            }
            for (var j of range(0,2)){
                if (i[j]===i[j+1] || i[j]===0){
                    turnedBoard[y][j]=i[j]+i[j+1];
                    turnedBoard[y][j+1]=0;
                }
            }
            for (var j of range(0,2)){
                if (i[j]===i[j+1] || i[j]===0){
                    turnedBoard[y][j]=i[j]+i[j+1];
                    turnedBoard[y][j+1]=0;
                }
            }
            y++;
        }
        this.board = [
            [turnedBoard[0][3],turnedBoard[1][3],turnedBoard[2][3],turnedBoard[3][3]],
            [turnedBoard[0][2],turnedBoard[1][2],turnedBoard[2][2],turnedBoard[3][2]],
            [turnedBoard[0][1],turnedBoard[1][1],turnedBoard[2][1],turnedBoard[3][1]],
            [turnedBoard[0][0],turnedBoard[1][0],turnedBoard[2][0],turnedBoard[3][0]]
        ];
        this.turn++;
        return this.board;
    }
    leftClick(){
        var y=0;
        for (var i of this.board){
            for (var j of range(0,2)){
                if (i[j]===i[j+1] || i[j]===0){
                    this.board[y][j]=i[j]+i[j+1];
                    this.board[y][j+1]=0;
                }
            }
            for (var j of range(0,2)){
                if (i[j]===i[j+1] || i[j]===0){
                    this.board[y][j]=i[j]+i[j+1];
                    this.board[y][j+1]=0;
                }
            }
            for (var j of range(0,2)){
                if (i[j]===i[j+1] || i[j]===0){
                    this.board[y][j]=i[j]+i[j+1];
                    this.board[y][j+1]=0;
                }
            }
            y++;
        }
        this.turn++;
        return this.board;
    }
    addNum(){
        var numOfZero=0;
        for (var i of this.board){
            for (var j of i){
                if (j===0){
                    numOfZero++
                }
            }
        }
        var randomInt = getRandomInt(1,numOfZero);
        var count = 0;
        var x = 0;
        var y = 0;
        for (var i of this.board){
            x=0;
            for (var j of i){
                if (j===0){
                    count++;
                }
                if (count===randomInt){
                    this.board[y][x]=2;
                    return this.board;
                }
                x++;
            }
            y++;
        }
    }
    judgeEnd(){
        for (var i of this.board){
            for (var j of i){
                if (j===0){
                    return false;
                }
            }
        }
        return true;
    }
    Board(){
        return this.board;
    }
}
function changeScreen(){
    var gameboard=game.Board();
    var x=0;
    var y=0;
    for (var i of gameboard){
        x=0;
        for (var j of i){
            $(`#${y}:nth-child(${x})`).text(j);
            x++;
        }
        y++;
    }
}
var game = new Game2048();

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", async function(line) {
  if (line=="up"){
      await game.upClick();
  }else if (line=="right"){
      await game.rightClick();
  }else if (line=="down"){
      await game.downClick();
  }else if (line=="left"){
      await game.leftClick();
  }
  if (await game.judgeEnd()==true){
      console.log("Game over");
      for (var i of game.Board()){
        console.log(i);
      }
      rl.close();
  }
  await game.addNum();
  for (var i of game.Board()){
    console.log(i);
  }
}).on("close", function() {
  process.exit();
});