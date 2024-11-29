import { useState } from 'react';
import Frame from '@/components/misc/spring-frame';
import Punchline from './Punchline';
import { motion } from 'framer-motion';

const variants = {
	open: { transform: 'translateY(-50%)' },
	closed: { transform: 'translateY(0%)' }
};

const punchline = 'None of them hired me to their coding teams.';

const Joke = () => {
	const [variant, setVariant] = useState('closed');
	const [animate, setAnimate] = useState(false);
	const handleClick = () => {
		setVariant(prev => (prev === 'closed' ? 'open' : 'closed'));
		setTimeout(() => {
			setAnimate(prev => (prev ? false : true));
		}, 1000);
	};
	return (
		<Frame>
			<div onClick={handleClick} className="w-full h-full">
				<motion.div
					variants={variants}
					transition={{ duration: 1.1 }}
					initial="closed"
					animate={variant}
					className="h-[200%] w-full flex flex-col">
					<div className="flex items-center justify-center h-1/2 p-4">
						<p>
							What do dinosaurs, AOL instant messenger & Blockbuster Video have in common?{' '}
							{'\u{1F914}'}
						</p>
					</div>{' '}
					<div className="w-full h-1/2">
						<Punchline punchline={punchline} animate={animate} />
					</div>
				</motion.div>
			</div>
		</Frame>
	);
};

export default Joke;
