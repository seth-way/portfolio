import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import DotsBG from './DotsBG';
import Item from '@/components/ui/misc-item';
import Airborne from '@/components/misc/Airborne';
import Joke from '@/components/misc/Joke';
import Slideshow from '@/components/misc/Slideshow';
import Algorithms from '@/components/misc/Algorithms';

const items = [<Joke />, <Algorithms />, <Airborne />, <Slideshow />];

const Minis = () => {
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

	const handleMouseLeave = () => {
		setCursorPos({ x: 0, y: 0 });
	};

	const handleMouseMove = event => {
		setCursorPos({ x: event.clientX, y: event.clientY });
	};

	return (
		<Card
			id="mini·apps"
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}
			className="section-card px-4 py-8 flex flex-col items-center justify-center gap-8 overflow-hidden relative">
			<h2 className="z-20 p-2">Mini Apps</h2>
			<div className="flex items-center overflow-x-scroll md:overflow-x-auto overflow-y-hidden md:justify-center md:flex-wrap max-w-full gap-4 p-4 z-20">
				{items.map((item, idx) => (
					<Item key={`minis-${idx}`}>{item}</Item>
				))}
			</div>
			<DotsBG x={cursorPos.x} y={cursorPos.y} />
		</Card>
	);
};

export default Minis;
