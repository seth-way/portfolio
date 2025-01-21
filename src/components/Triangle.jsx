import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'motion/react';

const Triangle = ({ width, height, depth = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const secondaryRef = useRef(null);
  const type = useMemo(() => getTriangleType(depth), [depth]);
  const delay = useMemo(() => Math.floor(Math.random() * 50) / 40, [depth]);

  useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      current.style.setProperty('--delay', delay + 's');
    } else if (secondaryRef.current) {
      secondaryRef.current.style.setProperty('--height', `${height}px`);
      secondaryRef.current.style.setProperty('--width', `${width}px`);
    }
  }, [width, height, delay]);

  return type === 1 ? (
    <motion.svg
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={'triangle-svg' + ' depth-' + depth}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 68 68'
      fill='none'
      strokeWidth={depth + 1}
      strokeLinecap='round'
      stroke='currentColor'
      height={height}
      width={width}
    >
      <motion.g
        initial={{ opacity: 1, scale: 1 }}
        animate={
          isHovered ? { opacity: 0.3, scale: 0.9 } : { opacity: 1, scale: 1 }
        }
        transition={{ type: 'spring' }}
      >
        <line className='triangle-line' x1='8' y1='49' x2='34' y2='4' />
        <line className='triangle-line' x1='14' y1='49' x2='37' y2='9.19' />
        <line className='triangle-line' x1='20' y1='49' x2='40' y2='14.38' />
        <line className='triangle-line' x1='26' y1='49' x2='43' y2='19.57' />
        <line className='triangle-line' x1='32' y1='49' x2='46' y2='24.77' />
        <line className='triangle-line' x1='38' y1='49' x2='49' y2='29.96' />
        <line className='triangle-line' x1='44' y1='49' x2='52' y2='35.15' />
        <line className='triangle-line' x1='50' y1='49' x2='55' y2='40.34' />
        <line className='triangle-line' x1='56' y1='49' x2='58' y2='45.53' />
      </motion.g>
    </motion.svg>
  ) : type === 2 ? (
    <div
      ref={secondaryRef}
      className='more-triangles relative h-[var(--height)] w-[var(--width)]'
    >
      <div className='absolute h-1/2 w-1/2 left-[5.88%] bottom-[13.97%]'>
        <Triangle height={height / 2} width={width / 2} depth={depth + 1} />
      </div>
      <div className='absolute h-1/2 w-1/2 right-[5.88%] bottom-[13.97%]'>
        <Triangle height={height / 2} width={width / 2} depth={depth + 1} />
      </div>
      <div className='absolute h-1/2 w-1/2 left-1/4 top-[2.94%]'>
        <Triangle height={height / 2} width={width / 2} depth={depth + 1} />
      </div>
    </div>
  ) : (
    <div
      ref={secondaryRef}
      className='more-triangles relative h-[var(--height)] w-[var(--width)]'
    ></div>
  );
};

export default Triangle;

function getTriangleType(depth) {
  if (depth < 2) return [0, 1, 1, 2, 2][Math.floor(Math.random() * 5)];
  return [0, 1][Math.floor(Math.random(Math.floor) * 2)];
}
