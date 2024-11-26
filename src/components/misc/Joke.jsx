import { useState } from 'react';
import Frame from '@/components/misc/spring-frame';
import Tiles from '@/components/misc/tiles';
import JokeSVG from '@/components/misc/svgs/JokeSVG';
import { motion } from 'framer-motion';

const variants = {
	open: { transform: 'translateY(-50%)' },
	closed: { transform: 'translateY(0%)' }
};

const punchline = 'None of them hired me to their coding teams.';

const Joke = () => {
	//const [variant, setVariant] = useState('closed');
	const [variant, setVariant] = useState('open');
	//const [animateTiles, setAnimateTiles] = useState(false);
	const [animateTiles, setAnimateTiles] = useState(true);
	const handleClick = () => {
		setVariant(prev => (prev === 'closed' ? 'open' : 'closed'));
		setTimeout(() => {
			setAnimateTiles(true);
		}, 1500);
	};
	return (
		<Frame>
			<div onClick={handleClick} className="w-full h-full">
				<motion.div
					variants={variants}
					transition={{ duration: 1.1 }}
					//initial="closed"
					initial="open"
					animate={variant}
					className="h-[200%] w-full flex flex-col">
					<div className="flex items-center justify-center h-1/2 p-4">
						<p>
							What do dinosaurs, AOL instant messenger & Blockbuster Video have in common?{' '}
							{'\u{1F914}'}
						</p>
					</div>{' '}
					<div className="w-full h-1/2">
						<Tiles words={punchline} animate={animateTiles} />
					</div>
				</motion.div>
			</div>
		</Frame>
	);
};

export default Joke;
