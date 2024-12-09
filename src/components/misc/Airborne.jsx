import { useState, useEffect } from 'react';
import Clouds from '@/components/misc/svgs/Clouds';
import AirborneOp from '@/components/misc/svgs/AirborneOp';

const Airborne = () => {
	// const [isOpen, setIsOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(true);
	const [bgColor, setBgColor] = useState('bg-transparent');

	useEffect(() => {
		if (!isOpen) {
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
	}, [isOpen]);

	const handleOpen = () => {
		if (!isOpen) setIsOpen(true);
	};

	const handleClose = e => {
		e.stopPropagation();
		setIsOpen(false);
	};

	return (
		<div
			onClick={handleOpen}
			className="h-full w-full relative bg-gradient-to-b from-gray-900 via-gray-800 via-80% to-gray-700 overflow-hidden">
			<Clouds isOpen={isOpen} />
			<AirborneOp isOpen={isOpen} handleClose={handleClose} />
			<div className={`absolute inset-0 blur-lg overflow-hidden ${bgColor}`} />
		</div>
	);
};

export default Airborne;
