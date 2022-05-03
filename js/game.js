function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
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
        let turnedBoard = [
            [this.board[3][0],this.board[2][0],this.board[1][0],this.board[0][0]],
            [this.board[3][1],this.board[2][1],this.board[1][1],this.board[0][1]],
            [this.board[3][2],this.board[2][2],this.board[1][2],this.board[0][2]],
            [this.board[3][3],this.board[2][3],this.board[1][3],this.board[0][3]]
        ];
        let y=0;
        for (i of this.turnedBoard){
            for (j of Range(3)){
                if (i[j]===i[j+1] || i[j+1]===0){
                    this.turnedBoard[y][j+1]=i[j]+i[j+1];
                }
            }
            for (j of Range(1,3)){
                if (i[j]===i[j+1] || i[j+1]===0){
                    this.turnedBoard[y][j+1]=i[j]+i[j+1];
                }
            }
            for (j of Range(2,3)){
                if (i[j]===i[j+1] || i[j+1]===0){
                    this.turnedBoard[y][j+1]=i[j]+i[j+1];
                }
            }
            y++;
        }
        this.board = [
            [this.turnedBoard[0][3],this.turnedBoard[1][3],this.turnedBoard[2][3],this.turnedBoard[3][3]],
            [this.turnedBoard[0][2],this.turnedBoard[1][2],this.turnedBoard[2][2],this.turnedBoard[3][2]],
            [this.turnedBoard[0][1],this.turnedBoard[1][1],this.turnedBoard[2][1],this.turnedBoard[3][1]],
            [this.turnedBoard[0][0],this.turnedBoard[1][0],this.turnedBoard[2][0],this.turnedBoard[3][0]]
        ];
        this.turn++;
        return this.board;
    }
    rightClick(){
        let y=0;
        for (i of this.board){
            for (j of Range(3)){
                if (i[j]===i[j+1] || i[j+1]===0){
                    this.board[y][j+1]=i[j]+i[j+1];
                }
            }
            for (j of Range(1,3)){
                if (i[j]===i[j+1] || i[j+1]===0){
                    this.board[y][j+1]=i[j]+i[j+1];
                }
            }
            for (j of Range(2,3)){
                if (i[j]===i[j+1] || i[j+1]===0){
                    this.board[y][j+1]=i[j]+i[j+1];
                }
            }
            y++;
        }
        this.turn++;
        return this.board;
    }
    downClick(){
        let turnedBoard = [
            [this.board[3][0],this.board[2][0],this.board[1][0],this.board[0][0]],
            [this.board[3][1],this.board[2][1],this.board[1][1],this.board[0][1]],
            [this.board[3][2],this.board[2][2],this.board[1][2],this.board[0][2]],
            [this.board[3][3],this.board[2][3],this.board[1][3],this.board[0][3]]
        ];
        let y=0;
        for (i of this.board){
            for (j of Range(3)){
                if (i[j]===i[j+1] || i[j]===0){
                    this.board[y][j]=i[j]+i[j+1];
                }
            }
            for (j of Range(2)){
                if (i[j]===i[j+1] || i[j]===0){
                    this.board[y][j]=i[j]+i[j+1];
                }
            }
            for (j of Range(1)){
                if (i[j]===i[j+1] || i[j]===0){
                    this.board[y][j]=i[j]+i[j+1];
                }
            }
            y++;
        }
        this.board = [
            [this.turnedBoard[0][3],this.turnedBoard[1][3],this.turnedBoard[2][3],this.turnedBoard[3][3]],
            [this.turnedBoard[0][2],this.turnedBoard[1][2],this.turnedBoard[2][2],this.turnedBoard[3][2]],
            [this.turnedBoard[0][1],this.turnedBoard[1][1],this.turnedBoard[2][1],this.turnedBoard[3][1]],
            [this.turnedBoard[0][0],this.turnedBoard[1][0],this.turnedBoard[2][0],this.turnedBoard[3][0]]
        ];
        this.turn++;
        return this.board;
    }
    leftClick(){
        let y=0;
        for (i of this.board){
            for (j of Range(3)){
                if (i[j]===i[j+1] || i[j]===0){
                    this.board[y][j]=i[j]+i[j+1];
                }
            }
            for (j of Range(2)){
                if (i[j]===i[j+1] || i[j]===0){
                    this.board[y][j]=i[j]+i[j+1];
                }
            }
            for (j of Range(1)){
                if (i[j]===i[j+1] || i[j]===0){
                    this.board[y][j]=i[j]+i[j+1];
                }
            }
            y++;
        }
        this.turn++;
        return this.board;
    }
    addNum(){
        let numOfZero=0;
        for (i of this.board){
            for (j of i){
                if (j===0){
                    numOfZero++
                }
            }
        }
        let randomInt = getRandomInt(1,numOfZero);
        let count = 0;
        let x = 0;
        let y = 0;
        for (i of this.board){
            x=0;
            for (j of i){
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
        for (i of this.board){
            for (j of i){
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