import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '@/components/ui/theme-provider';

const path1 = 'M 75 85 Q 150 20 225 85';
const path2 = 'M 75 115 Q 150 180 225 115';

export default function MapMessage({ isOpen, wandX, wandY }) {
	const [mode, setMode] = useState('dark');
	const [cursorPosition, setCursorPosition] = useState(null);
	const { theme } = useTheme();
	// const circle = useMemo(() => {
	// 	const circleInfo = {
	// 		x: 150,
	// 		y: 100,
	// 		r: 0
	// 	};

	// 	if (cursorPosition) {
	// 		circleInfo.x = cursorPosition.x;
	// 		circleInfo.y = cursorPosition.y;
	// 		circleInfo.r = 40;
	// 	}

	// 	return circleInfo;
	// }, [cursorPosition?.x, cursorPosition?.y]);

	const cardRef = useRef(null);

	useEffect(() => {
		setMode(theme);
	}, [theme]);

	// const handleMouseMove = event => {
	// 	if (cardRef.current) {
	// 		const rect = cardRef.current.getBoundingClientRect();
	// 		const x = event.clientX - rect.left;
	// 		const y = event.clientY - rect.top;
	// 		setCursorPosition({ x, y });
	// 	}
	// };

	// const handleMouseLeave = () => {
	// 	setCursorPosition(null);
	// };

	return (
		<motion.div
			animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
			transition={{ duration: 0.5, delay: isOpen ? 0 : 1.75 }}
			ref={cardRef}
			// onMouseMove={handleMouseMove}
			// onMouseLeave={handleMouseLeave}
			className="absolute inset-0 pointer-events-auto">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 300 200"
				height="100%"
				width="100%">
				<defs>
					<path id="arc-top" d={path1} />
					<path id="arc-bottom" d={path2} />
					<radialGradient id="mask" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
						<stop offset="0%" stopColor="black" />
						<stop offset="100%" stopColor="white" />
					</radialGradient>
					<mask id="message-mask" x="0" y="0" height="100%" width="100%">
						<rect x="0" y="0" width="100%" height="100%" fill="white" />
						<circle cx={wandX} cy={wandY} r="40" fill="url(#mask)" />
					</mask>
				</defs>
				<text
					strokeWidth="0.5"
					stroke="currentColor"
					fill="#330000"
					textLength="150"
					textAnchor="start">
					<textPath xlinkHref="#arc-top" alignmentBaseline="middle">
						⚡ Website Wizard ⚡
					</textPath>
				</text>
				<text
					strokeWidth="0.5"
					stroke="currentColor"
					fill="var(--primary_C)"
					textLength="150"
					textAnchor="start">
					<textPath xlinkHref="#arc-bottom" alignmentBaseline="middle">
						Grrrrryffindor 🦁
					</textPath>
				</text>
				<rect
					x="0"
					y="0"
					width="100%"
					height="100%"
					mask="url(#message-mask)"
					fillOpacity="1"
					fill={mode === 'dark' ? '#08080a' : 'white'}
				/>
			</svg>
		</motion.div>
	);
}
