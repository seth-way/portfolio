import nQueens from '@/components/misc/algos/demos/nQueens';
import islands from '@/components/misc/algos/demos/islands';

const problems = {
	nQueens: {
		title: 'nQueens',
		prompt: [
			"Place 'n' queens on an 'n' x 'n' chessboard such that no two queens threaten each other.",
			'Queens can attack vertically, horizontally, or diagonally.',
			'Find at least one valid arrangement.'
		],
		Demo: nQueens
	},
	islands: {
		title: 'Islands',
		prompt: [
			"Count distinct 'islands' in a 2D matrix where 1's represent land and 0's water.",
			'Cells are considered connected if they are adjacent horizontally or vertically.',
			'Assume the entire matrix is surrounded by water.'
		],
		Demo: islands
	}
};

export default problems;
