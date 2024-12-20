//
import { useState, useEffect, useRef } from 'react';
import { Circle } from 'lucide-react';

export default function NQueens({ n, queens }) {
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

	const squareSize = Math.min(dimensions.width, dimensions.height) / n;

	return (
		<div ref={boardRef} className="h-full aspect-square relative">
			<div
				className="absolute top-0 left-0 grid"
				style={{
					gridTemplateColumns: `repeat(${n}, 1fr)`,
					gridTemplateRows: `repeat(${n}, 1fr)`,
					width: dimensions.width,
					height: dimensions.height
				}}>
				{Array.from({ length: n * n }).map((_, index) => {
					const row = Math.floor(index / n);
					const col = index % n;
					const isDarkSquare = (row + col) % 2 === 1;

					return (
						<div
							key={`square-${row}-${col}`}
							className="relative"
							style={{
								backgroundColor: isDarkSquare ? 'black' : 'rgba(115,115,115,1)',
								width: squareSize,
								height: squareSize
							}}>
							{queens && queens[row] === col && (
								<Circle
									className="absolute"
									style={{
										width: (squareSize * 7) / 7,
										height: (squareSize * 7) / 7,
										top: '50%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
										fill: 'var(--green)',
										stroke: 'rgba(245,245,245,1)'
									}}
								/>
							)}
						</div>
					);
				})}
			</div>
			{!queens && (
				<h3 className="absolute text-[#B7FF5E] inset-2 flex items-center justify-center text-xl font-black text-center p-0 drop-shadow-dark">
					No Valid Solutions
				</h3>
			)}
		</div>
	);
}
