import { useState, useEffect } from 'react';
import Frame from '@/components/ui/spring-frame';
import Punchline from './Punchline';
import { motion } from 'motion/react';

const variants = {
	open: { transform: 'translateY(-50%)' },
	closed: { transform: 'translateY(0%)' }
};

const punchline = 'None of them hired me as a developer. \n \n ¯\\_(ツ)_/¯';

const Joke = ({ active }) => {
	const [variant, setVariant] = useState('closed');
	const [animate, setAnimate] = useState(false);

	const id = 'mini-joke';

	useEffect(() => {
		if (active === id) {
			setVariant('open');
			setTimeout(() => {
				setAnimate(true);
			}, 1000);
		} else {
			setVariant('closed');
			setTimeout(() => {
				setAnimate(false);
			}, 1000);
		}
	}, [active]);

	const handleClick = event => {
		if (active === id) {
			setVariant(prev => (prev === 'closed' ? 'open' : 'closed'));
			setTimeout(() => {
				setAnimate(prev => (prev ? false : true));
			}, 1000);
			event.stopPropagation();
		}
	};

	return (
		<Frame>
			<div id={id} onClick={handleClick} className="w-full h-full">
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
