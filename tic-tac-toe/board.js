class Board {
  constructor () {
    this.grid = [[,,,],[,,,],[,,,]];
  }

  isWon() {
    return (this.winner()) ? true : false;
  }

  winner() {
    for (var i = 0; i < 3; i++) {
      if(this.grid[i].every((ele)=> (ele === "x")) ||
        this.grid[i].every((ele)=> (ele === "o")) ) {

        }

      if (this.grid[i][0] === this.grid[i][1] &&
        this.grid[i][1] === this.grid[i][2]) {

      }
    }
  }

  isEmpty(x, y) {
    return this.grid[x][y] === undefined;
  }

  placeMark(x, y, mark) {
    this.grid[x][y] = mark;
  }


}
