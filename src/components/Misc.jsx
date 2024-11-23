import { Card } from '@/components/ui/card';
import Item from '@/components/misc/misc-item';
import Joke from '@/components/misc/Joke';

const Misc = () => {
	return (
		<Card
			id="misc"
			className="section-card px-4 py-8 flex flex-col items-center justify-center gap-8 overflow-hidden">
			<h2>Miscellaneous</h2>
			<div className="flex items-center justify-center flex-wrap max-w-[min(800px,85vw)] gap-[clamp(2rem,1.75vw,2.5rem)]">
				<Item>
					<Joke />
				</Item>
			</div>
		</Card>
	);
};

export default Misc;
