import { useRef } from 'react';
import { motion } from 'motion/react';

const ANGLE = 3;
const DROP_COUNT = 200;

export default function RainingEffect({ isRaining, width = 150 }) {
  const rainDropsRef = useRef([]);

  if (rainDropsRef.current.length === 0 && width) {
    rainDropsRef.current = Array.from({ length: DROP_COUNT }).map(() => ({
      x: Math.random() * 1.2 * width - 0.1 * width,
      delay: Math.random() * 0.85,
    }));
  }

  const deltaX = 2 * width * Math.tan((-ANGLE * Math.PI) / 180);

  return (
    <div className='relative w-full h-full'>
      {isRaining &&
        rainDropsRef.current.map(({ x, delay }, index) => (
          <motion.div
            key={`rain-drop-${index}`}
            className='absolute w-px h-2 bg-gradient-to-br from-blue-200 to-blue-500 rounded'
            style={{ backgroundColor: 'var(--blue)' }}
            initial={{ x: x, y: -0.1 * width, scale: 0.7, rotate: ANGLE }}
            animate={{
              x: x + deltaX,
              y: 1.2 * width,
              scale: 1,
              rotate: ANGLE,
            }}
            transition={{
              duration: 0.85,
              repeat: Infinity,
              delay: delay,
              type: 'tween',
            }}
          ></motion.div>
        ))}
    </div>
  );
}
