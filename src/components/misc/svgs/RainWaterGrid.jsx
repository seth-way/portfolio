import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import RainingEffect from '@/components/misc/svgs/RainingEffect';

export default function RainWaterGrid({ elevation, waterElevation, waterLevel, isRaining }) {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const gridRef = useRef(null);

	useEffect(() => {
		if (gridRef.current) {
			const { offsetWidth, offsetHeight } = gridRef.current;
			setDimensions({ width: offsetWidth, height: offsetHeight });
		}
		const handleResize = () => {
			if (gridRef.current) {
				const { offsetWidth, offsetHeight } = gridRef.current;
				setDimensions({ width: offsetWidth, height: offsetHeight });
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const squareSize = Math.min(dimensions.height / 13, dimensions.width / 12);
	console.log('waterLevel', waterLevel);
	return (
		<div ref={gridRef} className="h-full aspect-square relative overflow-hidden">
			<RainingEffect isRaining={isRaining} width={dimensions.width || 200} />
			<div
				className="absolute top-0 left-0 grid"
				style={{
					gridTemplateColumns: 'repeat(12, 1fr)',
					gridTemplateRows: 'repeat(13, 1fr)',
					width: dimensions.width,
					height: dimensions.height
				}}>
				{Array.from({ length: 156 }).map((_, index) => {
					const row = Math.floor(index / 12);
					const col = index % 12;
					const isWall = elevation[col] >= 12 - row;

					return (
						<div
							key={`square-${row}-${col}`}
							className="relative flex items-center justify-center"
							style={{
								backgroundColor: isWall ? '#A8A8A8' : '',
								border: isWall ? '2px solid #6D6D6D' : '',
								width: squareSize,
								height: squareSize
							}}></div>
					);
				})}
			</div>
			<div
				className="absolute top-0 left-0 grid"
				style={{
					gridTemplateColumns: 'repeat(12, 1fr)',
					gridTemplateRows: 'repeat(13, 1fr)',
					width: dimensions.width,
					height: dimensions.height
				}}>
				{Array.from({ length: 156 }).map((_, index) => {
					const row = Math.floor(index / 12);
					const col = index % 12;
					const isWall = elevation[col] >= 12 - row;
					const isWaterOrWall = waterElevation[col] + elevation[col] >= 12 - row;
					const isWater = isWaterOrWall && !isWall;
					const isTrapped = isWater && 12 - row <= waterLevel;

					return (
						<div key={`water-${row}-${col}`} className="relative flex items-center justify-center">
							{isWater && isTrapped && (
								<motion.div
									className="absolute inset-0 bg-[var(--blue)]"
									initial={{ scaleY: 0 }}
									animate={{ scaleY: 1 }}
									transition={{ duration: 0.9 }}
									style={{ originY: 1 }}></motion.div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
