import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const commonSpring = { type: 'spring', stiffness: 40, damping: 20, mass: 1 };
const scaleSpring = {
  type: 'spring',
  stiffness: 100,
  damping: 5,
  mass: 0.5,
  delay: 0.05,
};
const easeOut = { ease: 'easeOut' };

const Headline = ({ firstName }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  const variants = {
    hidden: {
      strokeDasharray: 500,
      strokeDashoffset: 500,
      opacity: 0,
      scale: 0.85,
      transition: {
        default: { duration: 1.5, ...easeOut },
        strokeDasharray: commonSpring,
        strokeDashoffset: commonSpring,
        opacity: { duration: 1.5, ...easeOut, delay: 0.5 },
        scale: scaleSpring,
      },
    },
    visible: {
      strokeDashoffset: 0,
      opacity: 1,
      scale: 1,
      transition: {
        default: { duration: 2, ...easeOut, delay: 0.5 },
        strokeDasharray: { ...commonSpring, delay: 0.5 },
        strokeDashoffset: { ...commonSpring, delay: 0.5 },
        opacity: { duration: 2, ...easeOut },
        scale: scaleSpring,
      },
    },
  };

  return (
    <svg
      ref={ref}
      viewBox='0 0 800 100'
      xmlns='http://www.w3.org/2000/svg'
      stroke='var(--primary_C)'
      strokeWidth='2'
      className='text-line z-[4] font-[Capriola] transform -rotate-1 -skew-x-12'
    >
      <linearGradient id='Gradient1' x1='0' x2='0' y1='0' y2='1'>
        <stop offset='0%' stopColor='hsl(var(--muted-foreground))' />
        <stop offset='60%' stopColor='hsl(var(--muted-foreground))' />
        <stop offset='90%' stopColor='var(--primary_C)' />
        <stop offset='100%' stopColor='var(--primary_C)' />
      </linearGradient>
      <motion.text
        x='50%'
        y='53%'
        dominantBaseline='middle'
        textAnchor='middle'
        fontSize='92'
        fill='hsl(var(--muted-foreground))'
        className='uppercase'
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
        whileHover='hidden'
      >
        {firstName}
      </motion.text>
    </svg>
  );
};

export default Headline;
