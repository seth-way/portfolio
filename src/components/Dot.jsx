import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MIN_DIST = 20;
const MID_DIST = 175;
const MAX_DIST = 300;

export default function Dot({ x, y }) {
	const parentRef = useRef(null);
	const centerRef = useRef({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [length, setLength] = useState(0);

	const updateCenter = () => {
		if (parentRef.current) {
			const rect = parentRef.current.getBoundingClientRect();
			centerRef.current = {
				x: rect.left + rect.width / 2,
				y: rect.top + rect.height / 2
			};
		}
	};

	useEffect(() => {
		updateCenter();

		window.addEventListener('resize', updateCenter);
		return () => window.removeEventListener('resize', updateCenter);
	}, []);

	useEffect(() => {
		let newLength, newAngle;

		if (centerRef.current && x && y) {
			const deltaX = x - centerRef.current.x;
			const deltaY = y - centerRef.current.y;
			const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

			if (distance > MIN_DIST && distance < MAX_DIST) {
				if (distance < MID_DIST) {
					newLength = (distance - MIN_DIST) / (MID_DIST - MIN_DIST);
				} else {
					newLength = (distance - MAX_DIST) / (MID_DIST - MAX_DIST);
				}
			}
			if (newLength) newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
		}

		setLength(newLength || 0);
		setRotation(newAngle || 0);
	}, [x, y]);

	let x1 = 5,
		x2 = 5,
		y1 = 5,
		y2 = 5;

	if (length) {
		const deltaX = Math.cos((rotation * Math.PI) / 180) * length * 3.5;
		const deltaY = Math.sin((rotation * Math.PI) / 180) * length * 3.5;

		x1 = 5 - deltaX;
		y1 = 5 - deltaY;
		x2 = 5 + deltaX;
		y2 = 5 + deltaY;
	}

	return (
		<div ref={parentRef} className="flex items-center justify-center w-full h-full">
			<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 10 10">
				<line
					x1={x1}
					y1={y1}
					x2={x2}
					y2={y2}
					stroke="currentColor"
					strokeWidth="1"
					strokeLinecap="round"
					opacity={length * 0.15 + 0.2}
				/>
			</svg>
		</div>
	);
}
