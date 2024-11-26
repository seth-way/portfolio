import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const TILE_SIZE = 24;
// h-2 -> 8px
// h-3 -> 12px
// h-4 -> 16px
// h-5 -> 20px
const Tiles = ({ words, animate }) => {
	const ref = useRef(null);
	const [tileCount, setTileCount] = useState({ rows: 0, cols: 0 });

	useEffect(() => {
		if (ref.current) {
			const { height, width } = ref.current.getBoundingClientRect();
			setTileCount(() => ({
				rows: Math.ceil(height / TILE_SIZE),
				cols: Math.ceil(width / TILE_SIZE)
			}));
		}
	}, []);

	const { rows, cols } = tileCount;

	return (
		<div
			ref={ref}
			className="h-full w-full relative overflow-hidden flex items-center justify-center">
			<p className="max-w-[80%]">{words}</p>
			<div className="absolute inset-0 overflow-hidden">
				{Array.from({ length: rows }).map((_, i) => (
					<div key={`tile-row-${i}`} className="flex">
						{Array.from({ length: cols }).map((__, j) => (
							<Tile key={`tile-${i}-${j}`} />
						))}
					</div>
				))}
			</div>
		</div>
	);
};

const tileVariants = {
	initial: {},
	rotate: {
		rotateY: 180
	},
	complete: {}
};

function Tile({ animate }) {
	const [animation, setAnimation] = useState('initial');
	const [completed, setCompleted] = useState(false);
	const [bg, setBg] = useState('bg-white/30');
	const [bgIdx, setBgIdx] = useState(0);
	const [delay, setDelay] = useState(Math.random() * 2);
	const backgrounds = ['bg-white/20', 'bg-primary_C', 'bg-secondary_C'];

	useEffect(() => {
		setTimeout(() => {
			const idx = Math.floor(Math.random() * 4) - 1;
			setBgIdx(() => idx);
		}, delay * 1000);
	}, []);

	useEffect(() => {
		if (bgIdx < 0) {
			setCompleted(true);
		} else {
			setAnimation(() => 'rotate');
			setTimeout(() => {
				setBg(backgrounds[bgIdx]);
			}, 495);
			setTimeout(() => {
				const idx = Math.floor(Math.random() * 4) - 1;
				console.log(idx);
				setBgIdx(() => idx);
			}, 1000);
		}
	}, [bgIdx]);

	return (
		<div className="h-6 w-6 relative box-border">
			{!completed && (
				<>
					<motion.div
						initial={false}
						variants={tileVariants}
						animate={animation}
						custom={bg}
						style={{ originX: 0.5 }}
						transition={{ duration: 1, ease: 'easeInOut' }}
						className={
							'absolute inset-0 z-30 box-border border border-white/50 ' + bg
						}></motion.div>
					<div className="absolute inset-0 bg-card z-20"></div>
				</>
			)}
		</div>
	);
}

export default Tiles;
