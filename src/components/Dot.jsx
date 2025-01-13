import { useState, useEffect, useRef, useMemo, memo } from 'react';
import { motion } from 'motion/react';

const Dot = memo(({ deltaX, deltaY, scale, size }) => {
	const delay = useRef(Math.random() * 4 + 0.01);
	const initialLocation = useRef({ x: getRandomDelta(size), y: getRandomDelta(size) });
	const location = useMemo(
		() => ({ x: initialLocation.current.x + deltaX, y: initialLocation.current.y + deltaY }),
		[deltaX, deltaY]
	);

	const [localScale, setLocalScale] = useState(1);

	useEffect(() => {
		if (scale > localScale) {
			setLocalScale(scale);
		}
	}, [scale, localScale]);

	useEffect(() => {
		if (localScale > 1) {
			const interval = setInterval(() => {
				setLocalScale(prev => (prev > 1.1 ? prev * 0.85 : 1));
			}, 100);

			return () => clearInterval(interval);
		}
	}, [localScale]);

	return (
		<div className="relative">
			<motion.div
				className="absolute inset-[45%] bg-foreground rounded-full"
				initial={false}
				animate={{ x: location.x || 0, y: location.y || 0, scale: localScale }}
				transition={{ type: 'spring', stiffness: 850, damping: 10, mass: 0.15 }}
				style={{
					opacity: 0.3,
					animation: `dots 2s ease-in-out ${delay.current}s infinite alternate`
				}}></motion.div>
		</div>
	);
});

export default Dot;

function getRandomDelta(size) {
	return ((Math.random() * size) / 2) * (Math.random() > 0.5 ? 1 : -1);
}
