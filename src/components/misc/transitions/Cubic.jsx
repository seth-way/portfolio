import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GRID_ROWS = 8;
const GRID_COLS = 12;
const REVEAL_DURATION = 0.8;

const Cubic = ({ image, timing }) => {
	const [animate, setAnimate] = useState('visible');
	const { transition, display } = timing;

	const gridItems = Array.from({ length: GRID_ROWS * GRID_COLS }, (_, index) => ({
		id: index,
		delay: Math.random() * (transition - REVEAL_DURATION - 0.7) + 0.7,
		hidden: { scaleX: 1.1, scaleY: 1.1 },
		visible: { scaleX: 12, scaleY: 12, [Math.random() > 0.5 ? 'scaleX' : 'scaleY']: 0 }
	}));

	return (
		<div className="relative w-full h-full overflow-hidden">
			<motion.div
				className="absolute inset-0 grid grid-rows-8 grid-cols-12"
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
						className="bg-card w-full h-full select-none"
						variants={{
							hidden: item.hidden,
							visible: item.visible
						}}
						transition={{ delay: item.delay, duration: REVEAL_DURATION }}
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

export default Cubic;
