import { motion } from 'motion/react';

const path1 = 'M 75 85 Q 150 20 225 85';
const path2 = 'M 75 115 Q 150 180 225 115';

export default function MapMessage({ isOpen }) {
  return (
    <motion.div
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5, delay: isOpen ? 0 : 1.75 }}
      className='absolute inset-0 pointer-events-auto'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 300 200'
        height='100%'
        width='100%'
      >
        <defs>
          <path id='arc-top' d={path1} />
          <path id='arc-bottom' d={path2} />
        </defs>
        <text
          strokeWidth='0.5'
          stroke='currentColor'
          fill='#330000'
          textLength='150'
          textAnchor='start'
        >
          <textPath xlinkHref='#arc-top' alignmentBaseline='middle'>
            ⚡ Website Wizard ⚡
          </textPath>
        </text>
        <text
          strokeWidth='0.5'
          stroke='currentColor'
          fill='var(--primary_C)'
          textLength='150'
          textAnchor='start'
        >
          <textPath xlinkHref='#arc-bottom' alignmentBaseline='middle'>
            Grrrrryffindor 🦁
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
