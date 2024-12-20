import { useState, useEffect, useRef } from 'react';
import { Slider } from '@/components/ui/slider';
import nQueens from '@/components/misc/algos/lib/nQueens';
import NQueensGraphic from '@/components/misc/svgs/NQueens';

export default function QueensDemo() {
	const [n, setN] = useState(4);
	const [tempN, setTempN] = useState(4);
	const [queens, setQueens] = useState(nQueens(4));
	const timeoutRef = useRef(null);

	const handleChange = val => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		setTempN(val);

		timeoutRef.current = setTimeout(() => {
			setN(...val);
			setQueens(nQueens(...val));
			timeoutRef.current = null;
		}, 150);
	};

	return (
		<div
			className="w-full h-full flex flex-col items-center justify-between relative">
			<div className="h-[90%] w-full relative flex items-center justify-evenly">
				<div className="h-[90%] ratio-square">
					<NQueensGraphic n={n} queens={queens} />
				</div>
				<h3>{`n: ${tempN}`}</h3>
			</div>
			<div className="h-[10%] w-[80%] flex items-center justify-center">
				<Slider value={[tempN]} max={25} step={1} onValueChange={handleChange} />
			</div>
		</div>
	);
}
