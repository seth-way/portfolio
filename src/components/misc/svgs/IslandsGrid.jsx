//
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function IslandsGrid({ island, curRow, curCol, marked }) {
	const [rows, setRows] = useState(8);
	const [cols, setCols] = useState(8);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const boardRef = useRef(null);

	useEffect(() => {
		if (boardRef.current) {
			const { offsetWidth, offsetHeight } = boardRef.current;
			setDimensions({ width: offsetWidth, height: offsetHeight });
		}
		const handleResize = () => {
			if (boardRef.current) {
				const { offsetWidth, offsetHeight } = boardRef.current;
				setDimensions({ width: offsetWidth, height: offsetHeight });
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (island) {
			const islandRows = island.length;
			const islandCols = island[0]?.length || 0;
			if (islandRows !== rows) setRows(islandRows);
			if (islandCols !== cols) setCols(islandCols);
		}
	}, [island]);

	const squareSize = getSquareSize(dimensions.height, dimensions.width, rows, cols);
	return (
		<div ref={boardRef} className="h-full aspect-square relative">
			<div
				className="absolute top-0 left-0 grid"
				style={{
					gridTemplateColumns: `repeat(${cols}, 1fr)`,
					gridTemplateRows: `repeat(${rows}, 1fr)`,
					width: dimensions.width,
					height: dimensions.height
				}}>
				{Array.from({ length: rows * cols }).map((_, index) => {
					const row = Math.floor(index / rows);
					const col = index % cols;
					const isWater = island[row][col] === 0;
					const isMarked = island[row][col] === '';
					const isCurrent = typeof curRow === 'number' && curRow === row && curCol === col;

					return (
						<div
							key={`square-${row}-${col}`}
							className="relative flex items-center justify-center"
							style={{
								backgroundColor: isWater ? 'var(--blue)' : 'var(--green)',
								border: isCurrent ? '2px solid var(--yellow)' : 'none',
								width: squareSize,
								height: squareSize
							}}>
							{isMarked && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 10 10"
									width="70%"
									height="70%"
									stroke="var(--red)"
									strokeWidth="2"
									strokeLinecap="round"
									fill="none">
									<motion.path
										initial={{ pathLength: 0 }}
										animate={{ pathLength: 1 }}
										transition={{ type: 'tween', duration: 0.25 }}
										d="M0 0 L10 10"
									/>
									<motion.path
										initial={{ pathLength: 0 }}
										animate={{ pathLength: 1 }}
										transition={{ type: 'tween', duration: 0.25, delay: 0.35 }}
										d="M10 0 L0 10"
									/>
								</svg>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

function getSquareSize(boxHeight, boxWidth, rows, cols) {
	if (!rows || !cols) return Math.min(boxHeight, boxWidth);
	const height = boxHeight / rows;
	const width = boxWidth / cols;

	return Math.min(height, width);
}
