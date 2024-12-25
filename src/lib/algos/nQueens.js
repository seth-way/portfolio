// CHALLENGE:
//  <> n Queens <>

// PROMPT:
// - Place 'n' queens on an 'n' x 'n' chessboard such that no two queens threaten each other.
// - Queens can attack vertically, horizontally, or diagonally.
// - Find at least one valid arrangement.

// PROCESS:
//  IOCE ->
//  <>  Inputs: n - integer
//  <>  Outputs: 2d Matrix where number of queens is equal to n and none threaten each other.
//  <>  Contstraints: Methods to check board must have minimal time complexity so that run time doesn't grow exponentially.
//  <>  Edge Cases: n = 0, n = very large number

// PSEUDOCODE ->
//  Create 'board' (n X n matrix);
//  Iterate over matrix
//  At each board 'square'
////  Check if square is 'threatened' by another queen.
//////  If yes -> move on. 
//////  If no ->
////////  Place queen.
////////  Move on to next row & repeat.
////////  When complete, check board for valid solution.
////////  Use recursion to check all possible solutions until a valid one is found.
////////  Return valid solution or false.

// NOTES ->
// We will need a way to check if a square is threatened diagonally, vertically, and horizontally.
// We can keep the runtime constant if we track these threats in a set as we add queens to the board.
// When we remove queens, We will also need to remove reference to these threats.


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
			diags2: new Set()
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
		return rows.has(row) || cols.has(col) || diags1.has(row - col) || diags2.has(row + col);
	}

	isComplete() {
		return this.n === this.queens;
	}

	print() {
		console.log('<> Queens Count:', this.queens);
		console.log('<> Board :', this.positions);
	}
}
