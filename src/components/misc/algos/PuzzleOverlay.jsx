import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const PuzzleOverlay = ({ title, isOpen }) => {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const parentRef = useRef(null);

	useEffect(() => {
		if (parentRef.current) {
			const { offsetWidth, offsetHeight } = parentRef.current;
			setDimensions({ width: offsetWidth, height: offsetHeight });
		}
		const handleResize = () => {
			if (parentRef.current) {
				const { offsetWidth, offsetHeight } = parentRef.current;
				setDimensions({ width: offsetWidth, height: offsetHeight });
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const { width, height } = dimensions;

	const rows = 6;
	const cols = 8;
	const pieceWidth = width / cols;
	const pieceHeight = height / rows;

	const pieces = [];
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			const delay = Math.random();
			pieces.push({ row, col, delay });
		}
	}

	const variants = {
		hidden: ({ row, col, delay }) => {
			const baseAngle = Math.atan2(row - rows / 2, col - cols / 2);
			const randomOffset = (Math.random() * 20 - 10) * (Math.PI / 180);
			const adjustedAngle = baseAngle + randomOffset;
			const distance = 500;
			return {
				x: Math.cos(adjustedAngle) * distance,
				y: Math.sin(adjustedAngle) * distance,
				transition: { duration: 1.5, delay }
			};
		},
		visible: ({ delay }) => ({
			x: 0,
			y: 0,
			transition: { duration: 1.5, delay }
		})
	};

	return (
		<div
			ref={parentRef}
			className="absolute bg-transparent inset-0 z-30 flex items-center justify-center overflow-hidden pointer-events-none">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="absolute"
				style={{ width, height }}
				viewBox={`0 0 ${width} ${height}`}>
				{pieces.map(({ row, col, delay }, index) => {
					const clipPathId = `puzzle-clip-${row}-${col}`;
					return (
						<motion.g
							key={clipPathId}
							initial="visible"
							animate={isOpen ? 'hidden' : 'visible'}
							custom={{ row, col, delay }}
							variants={variants}
							clipPath={`url(#${clipPathId})`}>
							<clipPath id={clipPathId}>
								<rect
									x={col * pieceWidth}
									y={row * pieceHeight}
									width={pieceWidth * 1.1}
									height={pieceHeight * 1.1}
								/>
							</clipPath>
							<rect
								x={0}
								y={0}
								width={width}
								height={height}
								fill="hsl(var(--background))"
								stroke="hsl(var(--background))"
								strokeWidth={4}
							/>
							<text
								x="50%"
								y="50%"
								fill="currentColor"
								textAnchor="middle"
								dominantBaseline="middle"
								fontSize="20">
								{title.map((line, index) => (
									<tspan
										key={index}
										x="50%"
										dy={index === 0 ? '-1em' : '1.8em'}
										textAnchor="middle">
										{line}
									</tspan>
								))}
							</text>
						</motion.g>
					);
				})}
			</svg>
		</div>
	);
};

export default PuzzleOverlay;
