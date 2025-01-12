import { useState } from 'react';
import { Card } from '@/components/ui/card';
import DotsBG from './DotsBG';
import Item from '@/components/ui/misc-item';
import Airborne from '@/components/misc/Airborne';
import Joke from '@/components/misc/Joke';
import Slideshow from '@/components/misc/Slideshow';
import Algorithms from '@/components/misc/Algorithms';

const items = [<Joke />, <Algorithms />, <Airborne />, <Slideshow />];

const Minis = () => {
	const [active, setActive] = useState('mini-apps');

	const handleClick = event => {
		const id = event.target.closest('[id^="mini"]')?.id;
		if (id) setActive(id);
		event.stopPropagation();
	};

	return (
		<Card
			id="mini·apps"
			className="section-card px-4 py-8 flex flex-col items-center justify-center gap-8 overflow-hidden relative"
			onClick={handleClick}>
			<h2 className="z-20 p-2 bg-background/10 backdrop-blur-sm rounded-lg pointer-events-none">
				Mini Apps
			</h2>
			<div className="flex items-center overflow-x-scroll md:overflow-x-auto overflow-y-hidden md:justify-center md:flex-wrap max-w-full gap-4 p-4 z-20 md:pointer-events-none">
				{items.map((item, idx) => (
					<Item key={`minis-${idx}`} active={active}>
						{item}
					</Item>
				))}
			</div>
			<DotsBG />
		</Card>
	);
};

export default Minis;
