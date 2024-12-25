import { motion } from 'framer-motion';

export default function Problem({ problem, view }) {
	const { Demo, title, prompt } = problem;

	const transition = { duration: 1, ease: 'easeInOut' };

	return (
		<div className="flex-1 h-full w-full relative overflow-hidden">
			<motion.div
				initial={{ y: '0%' }}
				animate={view === 'Q' ? { y: '0%' } : { y: '-100%' }}
				transition={transition}
				className="absolute inset-0 border-b-4  overflow-y-auto">
				<div className="flex flex-col items-center justify-center w-full p-2">
					<h3 className="text-xl font-bold">{title}</h3>
					<ul className="list-disc list-inside text-sm text-left space-y-1.5">
						{prompt.map((step, idx) => (
							<li key={`algo-step-${idx}`} className="indent-0">
								{step}
							</li>
						))}
					</ul>
				</div>
			</motion.div>
			<motion.div
				initial={{ y: '100%' }}
				animate={view === 'A' ? { y: '0%' } : { y: '100%' }}
				transition={transition}
				className="absolute inset-0 border-orange-500 flex items-center justify-center overflow-y-auto">
				<Demo show={view === 'A'} />
			</motion.div>
		</div>
	);
}
