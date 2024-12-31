// PROMPT:
// <>  Given an array of non-negative integers, representing a 2-D elevation map...
// <>  compute how much water it can trap after raining.
// <>  Each integer represents the height of a bar that is 1 unit wide.

// PROCESS:
//  IOCE ->
// <>  Inputs: Array of non-negative integers
// <>  Outputs: Integer representing units of trapped rain water
// <>  Contstraints: n == height.length; 1 <= n <= 2 * 104; 0 <= height[i] <= 105.
// <>  Edge Cases: Empty Array.

// PSEUDOCODE ->
// Iterate over array forwards & backwards to create 2 reference arrays.
//// One to store largest value to left of current index.
//// The other to store the largest value to the right of the current index.
// Now, for each value from the original index, we can now calculate the following....
//// Water will settle to the smaller value of largest left or largest right.
//// If this value is greater than the value from the original array,
//// This index will trap 'Min(left, right) - Original' units of water.

export function getMaxReducer(max = 0) {
	return (acc, val) => {
		max = Math.max(val, max);
		acc.push(max);
		return acc;
	};
}

export function calculateWater(current, maxLeft, maxRight) {
	const limit = Math.min(maxLeft, maxRight);
	const diff = limit - current;
	return Math.max(diff, 0);
}

function rainWater(heights) {
	const maxFromLeft = heights.reduce(getMaxReducer(), []);
	const maxFromRight = heights.reduceRight(getMaxReducer(), []).reverse();
	return heights.reduce(
		(total, val, idx) => total + calculateWater(val, maxFromLeft[idx], maxFromRight[idx]),
		0
	);
}
