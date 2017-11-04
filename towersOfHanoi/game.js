const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Game {
  run() {
    // until first stack is empty && 2nd or 3rd stack is empty
      // get move
      // make move
      this.printBoard();
    if(!this.isWon()) {
      this.promptMove();
    } else {
      reader.close();
      console.log("you won!!!");
    }
  }

  constructor(size) {
    this.size = size;
    this.towers = new Array;
    for (var i = 0; i < 3; i++) {
      this.towers.push([]);
    }
    this.towers = this.towers.map((el) => new Array);
    for (i = 1; i <= size; i++) {
      this.towers[0].unshift(i);
    }
  }

  promptMove() {

    reader.question("choose a move (start:end)\n", (res) => {
      this.resolveMove(parseInt(res[0]), parseInt(res[2])); // TODO why no bind?: ()=>{}
    });
  }

  resolveMove(start, end){
    // check if valid
    if(this.isValidMove(start, end)){
      this.towers[end-1].push(this.towers[start-1].pop());
    }
    this.run();
  }

  isValidMove(start, end){
    const startPiece = this.towers[start - 1][this.towers[start - 1].length - 1];
    const endPiece = this.towers[end - 1][this.towers[end - 1].length - 1];
    if (startPiece === undefined) {
      return false;
    }
    if (endPiece === undefined) {
      return true;
    }
    if (startPiece > endPiece) {
      return false;
    }
    return true;
  }

  printBoard() {
    let board = "";
    for (var i = this.size - 1; i >= 0; i--) {
      this.towers.forEach(function(tower) {
        board += " | ";
        board += tower[i] ? `${tower[i]}` : " ";
      });
      board += " |\n";
    }
    console.log(board);
    console.log(" - t1- t2- t3-");
  }

  isWon() {
    return this.towers[0].length === 0 &&
      (this.towers[1].length === 0 ||
       this.towers[2].length === 0);
  }
}

g = new Game(1);
g.run();
