export default function nQueens(n, row = 0, board = new Board(n)) {
    if (row === n) return board.isComplete() ? board.getPositions() : false;
  
    for (let col = 0; col < n; col += 1) {
      if (row === 0 && col > n / 2) return false;
      if (!board.isThreatened(row, col)) {
        board.placeQueen(row, col);
        if (nQueens(n, row + 1, board)) return board.getPositions();
        else board.removeQueen(row, col);
      }
    }
  
    return false;
  }

  class Board {
    constructor(n) {
      this.n = n;
      this.queens = 0;
      this.positions = Array.from({ length: n }, () => -1);
      this.threats = {
        rows: new Set(),
        cols: new Set(),
        diags1: new Set(),
        diags2: new Set(),
      };
    }
  
    getPositions() {
      return this.positions;
    }
  
    placeQueen(row, col) {
      this.queens += 1;
      this.threats.rows.add(row);
      this.threats.cols.add(col);
      this.threats.diags1.add(row - col);
      this.threats.diags2.add(row + col);
      this.positions[col] = row;
    }
  
    removeQueen(row, col) {
      if (this.positions[col] >= 0) {
        this.queens -= 1;
        this.threats.rows.delete(row);
        this.threats.cols.delete(col);
        this.threats.diags1.delete(row - col);
        this.threats.diags2.delete(row + col);
        this.positions[col] = -1;
      }
    }
  
    isThreatened(row, col) {
      const { rows, cols, diags1, diags2 } = this.threats;
      return (
        rows.has(row) ||
        cols.has(col) ||
        diags1.has(row - col) ||
        diags2.has(row + col)
      );
    }
  
    isComplete() {
      return this.n === this.queens;
    }
  
    print() {
      console.log("<> Queens Count:", this.queens);
      console.log("<> Board :", this.positions);
    }
  }
  