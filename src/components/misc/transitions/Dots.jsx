import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GRID_ROWS = 16;
const GRID_COLS = 24;

const Dots = ({ image, timing }) => {
	const [animate, setAnimate] = useState('visible');
	const { transition, display } = timing;
	const DELAY_FACTOR = transition / (GRID_COLS + GRID_ROWS);
	const gridItems = [];

	Array.from({ length: GRID_ROWS }).forEach((row, i) => {
		Array.from({ length: GRID_COLS }).forEach((col, j) => {
			gridItems.push({
				id: `dot_${i}_${j}`,
				delay: (i + j) * DELAY_FACTOR,
				hidden: { scale: 1.45 },
				visible: { scale: 0 }
			});
		});
	});

	return (
		<div className="relative w-full h-full overflow-hidden">
			<motion.div
				className="absolute inset-0 grid grid-rows-16 grid-cols-24"
				initial="hidden"
				animate={animate}
				onAnimationComplete={() => {
					if (animate === 'visible') {
						setTimeout(() => setAnimate('hidden'), display * 1000);
					}
				}}>
				{gridItems.map(item => (
					<motion.div
						key={item.id}
						className="bg-card w-full h-full select-none rounded-full"
						variants={{
							hidden: item.hidden,
							visible: item.visible
						}}
						transition={{ delay: item.delay, duration: 0.7 }}
					/>
				))}
			</motion.div>
			<img
				src={image}
				alt=""
				className="w-full h-full object-cover"
			/>
		</div>
	);
};

export default Dots;
