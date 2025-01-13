import { useState, useEffect, useRef, useMemo } from 'react';
import { useWindowSize } from '@react-hook/window-size/throttled';
import Dot from '@/components/Dot';

const SQUARE_SIZE = 40;
const MIN_DIST = 10;
const MID_DIST = 100;
const MAX_DIST = 130;
const DEFAULT_DOT = { deltaX: 0, deltaY: 0, scale: 1 };

export default function DotsBG() {
	const [cursorPos, setCursorPos] = useState(null);
	const [grid, setGrid] = useState({ rows: 0, cols: 0 });
	const [dotLocations, setDotLocations] = useState([]);
	const bgRef = useRef(null);
	const [height, width] = useWindowSize();

	useEffect(() => {
		if (bgRef.current) {
			const { height, width } = bgRef.current.getBoundingClientRect();
			setGrid({
				rows: Math.round(height / SQUARE_SIZE),
				cols: Math.round(width / SQUARE_SIZE)
			});
		}
	}, [height, width]);

	useEffect(() => {
		if (bgRef.current) {
			const { height, width } = bgRef.current.getBoundingClientRect();
			const locations = [];

			for (let row = 0; row < grid.rows; row++) {
				for (let col = 0; col < grid.cols; col++) {
					locations.push({
						x: (col + 0.5) * (width / grid.cols),
						y: (row + 0.5) * (height / grid.rows)
					});
				}
			}
			setDotLocations(locations);
		}
	}, [grid]);

	const dots = useMemo(() => {
		if (!cursorPos) {
			return dotLocations.map(() => DEFAULT_DOT);
		}

		const { left, top } = bgRef.current.getBoundingClientRect();

		return dotLocations.map(({ x, y }) => {
			const dx = cursorPos.x - left - x;
			const dy = cursorPos.y - top - y;

			return animateDot(dx, dy);
		});
	}, [cursorPos?.x, cursorPos?.y, dotLocations]);

	function animateDot(dx, dy) {
		const approxDist = Math.abs(dx) + Math.abs(dy);

		if (approxDist < MAX_DIST) {
			let deltaX = 0;
			let deltaY = 0;

			const scale = ((MAX_DIST - approxDist) / MAX_DIST) * 8;

			if (approxDist > MIN_DIST) {
				let strength, scaleFactor;
				if (approxDist < MID_DIST) {
					scaleFactor = -0.1;
					strength = (MID_DIST - approxDist) / MID_DIST;
				} else {
					scaleFactor = 0.1;
					strength = (approxDist - MID_DIST) / (MAX_DIST - MID_DIST);
				}

				deltaX = dx * strength * scaleFactor;
				deltaY = dy * strength * scaleFactor;
			}

			return {
				deltaX,
				deltaY,
				scale
			};
		}

		return DEFAULT_DOT;
	}

	const handleMouseMove = event => {
		setCursorPos({ x: event.clientX, y: event.clientY });
	};

	const handleMouseLeave = () => {
		setCursorPos(null);
	};

	return (
		<div
			ref={bgRef}
			className="absolute inset-0 pointer-events-auto touch:pointer-events-none"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				display: 'grid',
				gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
				gridTemplateColumns: `repeat(${grid.cols}, 1fr)`
			}}>
			{dots.map(({ deltaX, deltaY, scale }, index) => (
				<Dot
					key={'dot-' + index}
					deltaX={deltaX}
					deltaY={deltaY}
					scale={scale}
					size={SQUARE_SIZE}
				/>
			))}
		</div>
	);
}
