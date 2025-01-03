import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PuzzleOverlay from '@/components/misc/algos/PuzzleOverlay';
import TabGroup from '@/components/misc/algos/TabGroup';
import Problem from '@/components/misc/algos/Problem';

import LetterA from '@/components/misc/svgs/LetterA';
import LetterQ from '@/components/misc/svgs/LetterQ';

import problems from '@/components/misc/algos/problems';

import { Braces, Crown, Droplet, TreePalm } from 'lucide-react';

const title = ['I find complex logic puzzles', 'deeply fulfilling. 🧠'];

export default function Algorithms() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeLeft, setActiveLeft] = useState('algo-Q');
	const [activeRight, setActiveRight] = useState('algo-rainWater');
	const cardRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (cardRef.current && !cardRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleClick = () => {
		if (!isOpen) setIsOpen(true);
	};

	const handleTabClick = e => {
		e.stopPropagation();
		const id = e.currentTarget.id;
		const isLeftTab = leftTabs.some(tab => tab.id === id);
		if (isLeftTab) {
			if (id === 'algo-C') {
				const algo = activeRight.split('-')[1];
				const algoURL = `https://github.com/seth-way/portfolio/blob/main/src/lib/algos/${algo}.js`;
				window.open(algoURL, '_blank', 'noopener,noreferrer');
			} else setActiveLeft(id);
		} else {
			setActiveRight(id);
		}
	};

	const leftTabs = [
		{ id: 'algo-Q', Icon: LetterQ, tooltip: 'Algorithm Prompt' },
		{ id: 'algo-A', Icon: LetterA, tooltip: 'Algorithm Solution' },
		{ id: 'algo-C', Icon: Braces, tooltip: 'See the Code' }
	];

	const rightTabs = [
		{ id: 'algo-rainWater', Icon: Droplet, tooltip: 'Trapping Rain Water' },
		{ id: 'algo-nQueens', Icon: Crown, tooltip: 'N Queens' },
		{ id: 'algo-islands', Icon: TreePalm, tooltip: 'Islands' }
	];

	const view = activeLeft.split('-')[1];
	const problemKey = activeRight.split('-')[1];

	return (
		<div ref={cardRef} className="w-full h-full relative overflow-hidden" onClick={handleClick}>
			<PuzzleOverlay isOpen={isOpen} title={title} />
			<motion.div
				className={
					'h-full w-full flex items-stretch justify-center bg-foreground/10' +
					(isOpen ? '' : ' pointer-events-none')
				}
				animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 1.5 }}>
				<TabGroup
					tabs={leftTabs}
					clickHandler={handleTabClick}
					activeID={activeLeft}
					position="left"
				/>
				<Problem problem={problems[problemKey]} view={view} />
				<TabGroup
					tabs={rightTabs}
					clickHandler={handleTabClick}
					activeID={activeRight}
					position="right"
				/>
			</motion.div>
		</div>
	);
}
