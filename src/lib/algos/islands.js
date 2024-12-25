// PROMPT:
// <>  Count distinct 'islands' in a 2D matrix where 1's represent land and 0's water.
// <>  Cells are considered connected if they are adjacent horizontally or vertically.
// <>  Assume the entire matrix is surrounded by water.

// PROCESS:
//  IOCE ->
// <>  Inputs: 2d matrix, all members 1's or 0's
// <>  Outputs: Number of 'islands' - integer
// <>  Contstraints: Each nested array will be equal size (width of grid).
// <>  Edge Cases: 0 X 0 matrix ([[]])

// PSEUDOCODE ->
//  Iterate over matrix, look for 'land'
//  When found:
////   - Increment island count.
////   - Mark island so it is never counted more than once.
//  When entire grid is checked, return island count.

//  Mark island function
////   - use recursion to mark entire island.
////   - change 'land' element from 1 to 0.
////   - check for 'land' in 4 cardinal directions.
//////    - if more land found - call mark island function at that location.

export default function countIslands(grid) {
	let islandCount = 0;
	const gridCopy = [...grid];

	gridCopy.forEach((row, i) => {
		row.forEach((_, j) => {
			if (grid[i][j]) {
				islandCount += 1;
				markIsland(i, j, gridCopy);
			}
		});
	});

	return islandCount;
}

function markIsland(row, col, grid) {
	grid[row][col] = 0;

	[-1, 1].forEach(dir => {
		// check neighbor to left & right
		if (grid[row][col + dir]) markIsland(row, col + dir, grid);
		// check neighbor above & below
		if (grid[row + dir] && grid[row + dir][col]) markIsland(row + dir, col, grid);
	});
}
