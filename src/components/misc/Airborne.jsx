import { useState, useEffect } from 'react';
import Clouds from '@/components/misc/svgs/Clouds';

const Airborne = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen(prev => !prev);
	};
	return (
		<div onClick={handleClick} className="bg-white/30 h-full w-full relative">
			<Clouds isOpen={isOpen} />
		</div>
	);
};

export default Airborne;
