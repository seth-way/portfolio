import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import useThrottle from '@/lib/hooks/use-throttle';
import ElderWand from '@/components/misc/svgs/ElderWand';
import Hogwarts from '@/components/misc/svgs/Hogwarts';
import MapMessage from '@/components/misc/svgs/MapMessage';
import Map from '@/components/misc/svgs/Map';
const id = 'minis-hp';

const coverTransition = { duration: 1.25, ease: 'easeInOut', delay: 1.15 };
const coverVariants = {
	open: {
		background: 'currentColor',
		opacity: 0.3,
		transition: coverTransition
	},
	closed: {
		background: 'transparent',
		opacity: 0,
		transition: { ...coverTransition, delay: 2.5 }
	}
};

export default function HP({ active }) {
	const [isOpen, setIsOpen] = useState(false);
	const [wandPosition, setWandPosition] = useState({ x: 0, y: 0 });
	const cardRef = useRef(null);

	useEffect(() => {
		setIsOpen(active === id);
	}, [active]);

	const handleMouseMove = event => {
		if (cardRef.current) {
			const rect = cardRef.current.getBoundingClientRect();
			setWandPosition({
				x: event.clientX - rect.left,
				y: event.clientY - rect.top
			});
		}
	};

	const { throttledFunction, cleanup } = useThrottle(handleMouseMove, 25);

	useEffect(() => {
		return () => {
			cleanup();
		};
	}, [cleanup]);

	const handleMouseLeave = () => {
		cleanup();
		setWandPosition({ x: 0, y: 0 });
	};

	return (
		<div
			id={id}
			ref={cardRef}
			onMouseMove={event => throttledFunction(event)}
			onMouseLeave={handleMouseLeave}
			className="font-harry cursor-none">
			{/* <div className="absolute inset-0 z-30 pointer-events-none flex justify-between">
				<motion.div
					animate={{ width: isOpen ? 0 : '50%' }}
					transition={{ ...coverTransition, delay: isOpen ? 1.15 : 0 }}
					className="h-full w-1/2 flex items-center justify-center bg-background">
					<div className="w-1/2" />
					<motion.div
						initial="closed"
						variants={coverVariants}
						animate={isOpen ? 'open' : 'closed'}
						className="w-1/2 h-full bg-foreground"
					/>
				</motion.div>
				<motion.div
					animate={{ width: isOpen ? 0 : '50%' }}
					transition={{ ...coverTransition, delay: isOpen ? 1.15 : 0 }}
					className="h-full w-1/2 flex items-center justify-center bg-background">
					<div className="w-1/2 h-full" />
					<motion.div
						initial="closed"
						variants={coverVariants}
						animate={isOpen ? 'open' : 'closed'}
						className="w-1/2 h-full bg-foreground"
					/>
				</motion.div>
				<motion.div
					animate={isOpen ? { scaleY: 0 } : { scaleY: 1 }}
					transition={{ delay: 1.25 }} // {closing} : {opening}
					className="absolute inset-0 flex items-center justify-center">
					<MapMessage isOpen={isOpen} wandX={wandPosition.x} wandY={wandPosition.y} />
					<Hogwarts isOpen={isOpen} />
				</motion.div>
			</div> */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#A27A3D] via-[#D6AE6F] to-[#C49241] z-20">
				<Map isOpen={isOpen} />
			</div>
			{/* <AnimatePresence>
				{wandPosition.x && wandPosition.y && (
					<motion.div
						key="elderwand"
						className="absolute w-[80%] h-[80%] z-[35]"
						initial={{ scale: 0.5, opacity: 0 }}
						animate={{ x: wandPosition.x, y: wandPosition.y, scale: 1, opacity: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						transition={{
							default: { type: 'spring', stiffness: 700, damping: 28 },
							scale: { duration: 0.5 },
							opacity: { duration: 0.5 }
						}}>
						<ElderWand />
					</motion.div>
				)}
			</AnimatePresence> */}
		</div>
	);
}
