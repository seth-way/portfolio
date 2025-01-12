import { useState, useEffect } from 'react';
import Clouds from '@/components/misc/svgs/Clouds';
import AirborneOp from '@/components/misc/svgs/AirborneOp';

const TOTAL_JUMPS = 43;

const Airborne = ({ active }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [bgColor, setBgColor] = useState('bg-transparent');

	const id = 'mini-airborne';

	useEffect(() => {
		if (active !== id) {
			setBgColor('bg-transparent');
			return;
		}

		let timeoutId;
		let intervalId;

		const flashBackground = () => {
			const colors =
				Math.random() > 0.5
					? [
							'bg-yellow-100/10',
							'bg-black/20',
							'bg-yellow-100/10',
							'bg-black/20',
							'bg-yellow-100/10',
							'bg-transparent'
					  ]
					: ['bg-yellow-100/10', 'bg-black/20', 'bg-yellow-100/10', 'bg-transparent'];
			let currentIndex = 0;

			intervalId = setInterval(() => {
				setBgColor(colors[currentIndex]);
				currentIndex += 1;

				if (currentIndex >= colors.length) {
					clearInterval(intervalId);
				}
			}, Math.random() * 75 + 95); // 0.2 seconds per color

			// Schedule the next flash after a random delay
			const nextFlash = Math.random() * 4000 + 4000;
			timeoutId = setTimeout(flashBackground, nextFlash);
		};

		flashBackground();

		return () => {
			clearTimeout(timeoutId); // Clear the timeout when unmounting
			clearInterval(intervalId); // Clear any active interval
		};
	}, [active]);

	return (
		<div
			id={id}
			className="h-full w-full relative bg-gradient-to-b from-gray-800 via-gray-700 via-80% to-gray-600 overflow-hidden">
			<Clouds isOpen={active === id} jumps={TOTAL_JUMPS} />
			<AirborneOp isOpen={active === id} jumps={TOTAL_JUMPS} />
			<div className={`absolute inset-0 blur-lg overflow-hidden ${bgColor}`} />
		</div>
	);
};

export default Airborne;
