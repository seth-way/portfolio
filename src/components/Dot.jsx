import { useRef, memo } from 'react';
import { motion } from 'motion/react';

const Dot = memo(({ deltaX, deltaY, scale }) => {
  const delay = useRef(Math.random() + 0.01);

  return (
    <div className='w-4 h-4 relative'>
      <motion.div
        className='absolute inset-[40%] bg-foreground rounded-full'
        initial={false}
        animate={{ x: deltaX, y: deltaY, scale: scale }}
        transition={{ type: 'spring', stiffness: 850, damping: 10, mass: 0.15 }}
        style={{
          opacity: 0.3,
          animation: `dots 1s ease-in-out ${delay.current}s infinite alternate`,
        }}
      ></motion.div>
    </div>
  );
});

export default Dot;
