import { motion } from 'motion/react';
import JokeSVG from '@/components/misc/svgs/JokeSVG';

const variants = {
  initial: {
    opacity: 0,
    scale: 0.12,
    y: '800%',
    x: '-1200%',
    transition: { duration: 0 },
  },
  final: delay => ({
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      delay: delay,
    },
  }),
};

const CHAR_DELAY = 0.02;

const Punchline = ({ punchline, animate }) => {
  const words = punchline.split(' ');
  let totalDelay = 0;

  return (
    <div className='relative w-full h-full flex justify-center items-start'>
      <JokeSVG animate={animate} />
      <p className='max-w-[80%] flex flex-wrap justify-center gap-1 pt-6'>
        {words.map((word, i) => {
          if (i) totalDelay += (words[i - 1].length + 1) * CHAR_DELAY;
          return (
            <span key={`joke-word-${i}`} className='flex'>
              {word.split('').map((char, j) => (
                <motion.span
                  initial='initial'
                  variants={variants}
                  animate={animate ? 'final' : 'initial'}
                  custom={j * CHAR_DELAY + totalDelay}
                  key={`joke-char-${i}-${j}`}
                  className='flex'
                >
                  {char}
                </motion.span>
              ))}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default Punchline;
