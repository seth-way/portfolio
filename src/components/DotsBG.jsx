import { useState, useEffect, useRef } from 'react';
import { useWindowSize } from '@react-hook/window-size/throttled';
import Dot from '@/components/Dot';

const SQUARE_SIZE = 20;

export default function DotsBG({ x, y }) {
	const [numRows, setNumRows] = useState(0);
	const [numCols, setNumCols] = useState(0);
	const [height, width] = useWindowSize();
	const bgRef = useRef(null);

	useEffect(() => {
		if (bgRef.current) {
			const rect = bgRef.current.getBoundingClientRect();
			setNumRows(Math.round(rect.height / SQUARE_SIZE));
			setNumCols(Math.round(rect.width / SQUARE_SIZE));
		}
	}, [height, width]);

	return (
		<div
			ref={bgRef}
			className="absolute inset-0"
			style={{
				display: 'grid',
				gridTemplateRows: `repeat(${numRows}, 1fr)`,
				gridTemplateColumns: `repeat(${numCols}, 1fr)`
			}}>
			{Array.from({ length: numRows * numCols }).map((_, index) => (
				<Dot x={x} y={y} key={`dot-${index}`} />
			))}
		</div>
	);
}
