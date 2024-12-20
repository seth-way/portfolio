import nQueens from '@/components/misc/algos/demos/nQueens';

const problems = {
	nQueens: {
		title: 'nQueens',
		prompt: [
			"Place 'n' queens on an 'n' x 'n' chessboard such that no two queens threaten each other.",
			'Queens can attack vertically, horizontally, or diagonally.',
			'Find at least one valid arrangement'
		],
		Demo: nQueens
	}
};

export default problems;
