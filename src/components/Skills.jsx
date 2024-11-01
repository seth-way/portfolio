import SkillText from '@/components/Skill';
import { Card } from '@/components/ui/card';
import skills from '@/assets/resume-info/skills.json';

const Skills = () => {
	return (
		<Card
			id="skills"
			className="section-card px-4 py-8 flex flex-col items-center justify-center gap-8">
			{' '}
			<h2>skills</h2>
			<div className="flex items-center justify-center flex-wrap max-w-[min(800px,85vw)] gap-[clamp(0.5rem,1.5vw,1rem)]">
				{skills.map((skill, idx) => (
					<SkillText skillInfo={skill} idx={idx} key={`${idx}_${skill.skill}`} />
				))}
			</div>
		</Card>
	);
};

export default Skills;
