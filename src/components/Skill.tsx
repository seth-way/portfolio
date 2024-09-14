import { motion } from 'framer-motion';

const textColors = ['primary_C', 'secondary_C', 'text'];

const getTextColor = (idx: number) => textColors[idx % textColors.length];

const getLevelStyle = (value: number) => {
  if (value < 30) return { fontSize: 'clamp(0.8rem, 2vw, 1rem)' };
  if (value < 50) return { fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' };
  if (value < 70) return { fontSize: 'clamp(1.6em, 3vw, 2.3rem)' };
  if (value < 90) return { fontSize: 'clamp(2rem, 3.5vw, 2.9rem)' };
  return { fontSize: 'clamp(2.4em, 4vw, 3.5rem)' };
};

interface IProps {
  skillInfo: ISkillInfo;
  idx: number;
}

interface ISkillInfo {
  skill: string;
  value: number;
}

const SkillText = ({ skillInfo, idx }: IProps) => {
  const { skill, value } = skillInfo;

  const color = getTextColor(idx);
  const classStyle = 'text-' + color;
  const levelStyle = getLevelStyle(value);
  const style = { color: color, ...levelStyle };

  return (
    <motion.span
      className={classStyle}
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * idx }}
    >
      {skill}
    </motion.span>
  );
};

export default SkillText;
