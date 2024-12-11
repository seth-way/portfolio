import { Card } from '@/components/ui/card';
import Item from '@/components/misc/misc-item';
import Airborne from '@/components/misc/Airborne';
import Joke from '@/components/misc/Joke';
import Slideshow from '@/components/misc/Slideshow';

const items = [<Joke />, <Slideshow />, <Airborne />];

const Misc = () => {
	return (
		<Card
			id="misc"
			className="section-card px-4 py-8 flex flex-col items-center justify-center gap-8 overflow-hidden">
			<h2>Miscellaneous</h2>
			<div className="flex flex-row items-center justify-center flex-wrap gap-[clamp(2rem,1.75vw,2.5rem)]">
				{items.map((item, idx) => (
					<Item key={`misc-${idx}`}>{item}</Item>
				))}
			</div>
		</Card>
	);
};

export default Misc;
