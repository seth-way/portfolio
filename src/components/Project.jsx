import { useRef } from 'react';
import {
	Card,
	CardFooter,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import useInView from '@/lib/hooks/use-in-view';
import { Separator } from '@/components/ui/separator';
import { motion } from 'motion/react';
import badges from '@/assets/resume-info/badges.json';

const badgeURL = 'https://img.shields.io/badge/';

const Project = ({ project, handleClick }) => {
	const { title, description, tech } = project;
	const ref = useRef(null);
	const isVisible = useInView(ref);

	const variants = {
		hidden: { width: 0 },
		visible: custom => ({
			width: '100%',
			transition: { type: 'spring', stiffness: 300, damping: 40, delay: custom }
		})
	};

	return (
		<motion.div
			className="aspect-[2/3] h-[calc(min(250px,90vw)*3/2)] hover:cursor-pointer z-10 group"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: 'spring' }}
			onClick={() => handleClick(project)}
			aria-label={`More info about ${project} project`}
			ref={ref}>
			<Card className="w-full h-full relative overflow-hidden">
				<CardHeader className="h-1/5">
					<CardTitle className="transition-colors duration-700 group-hover:text-primary_C">
						{title}
					</CardTitle>
				</CardHeader>
				<motion.div
					initial="hidden"
					variants={variants}
					animate={isVisible ? 'visible' : 'hidden'}
					custom={0.1}>
					<Separator className="w-full" />
				</motion.div>
				<CardDescription className="transition-colors duration-700 group-hover:text-foreground h-1/4 p-4 border-box !line-clamp-4 overflow-hidden align-baseline text-wrap truncate">
					{description}
				</CardDescription>
				<motion.div
					initial="hidden"
					variants={variants}
					animate={isVisible ? 'visible' : 'hidden'}
					custom={0.4}>
					<Separator className="mt-4 w-full" />
				</motion.div>
				<CardFooter className="w-full h-[55%]">
					<div className="w-full flex flex-wrap items-center justify-center gap-2 p-2 border-box overflow-hidden">
						{tech.map((type, idx) =>
							badges[type] ? (
								<img
									className="transition-opacity duration-700 opacity-70 group-hover:opacity-100 max-w-[46%]"
									src={`${badgeURL}${badges[type]}`}
									alt={`${type} logo badge`}
									key={`project_${title}_${idx}`}
								/>
							) : (
								''
							)
						)}
					</div>
				</CardFooter>
			</Card>
		</motion.div>
	);
};

export default Project;
