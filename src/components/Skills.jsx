import { motion } from 'framer-motion';
import SkillText from '@/components/Skill';
import { Card } from '@/components/ui/card';
import skillGroups from '@/assets/resume-info/skills.json';

const Skills = () => {
	return (
		<Card
			id="skills"
			className="section-card px-4 py-8 flex flex-col items-center justify-center gap-8 overflow-hidden">
			<h2>skills</h2>
			<div className="flex items-center justify-center flex-wrap max-w-[min(800px,85vw)] gap-[clamp(2rem,1.75vw,2.5rem)]">
				{skillGroups.map(({ category, skills }, idx) => (
					<div key={`category_${category}_${idx}`} className="flex flex-col items-center">
						<motion.h3
							initial={{ x: '-100%' }}
							transition={{ duration: 1, type: 'spring' }}
							whileInView={{ x: '0%' }}
							viewport={{ once: true }}
							className="text-3xl border-2 border-solid italic text-[hsl(var(--muted-foreground))] font-extrabold py-2 px-4">
							{category}
						</motion.h3>
						<div className="flex items-center justify-center flex-wrap gap-x-[clamp(0.5rem,1.5vw,1rem)]">
							{skills.map((skill, idx2) => (
								<SkillText skillInfo={skill} idx={idx2} key={`${idx2}_${skill.skill}`} />
							))}
						</div>
					</div>
				))}
			</div>
		</Card>
	);
};

export default Skills;

function getSkillsValue(skills) {
	return skills.reduce((total, { value }) => total + value, 0);
}
