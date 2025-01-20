import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BootPrint from '@/components/misc/svgs/BootPrint';
import Ribbon from '@/components/misc/svgs/Ribbon';

export default function Steps({ stepData, label }) {
  const [footPrints, setFootPrints] = useState([]);
  const [labelPos, setLabelPos] = useState({ x: 0, y: 0 });
  const [nextIdx, setNextIdx] = useState(2);
  const delayRef = useRef(null);

  useEffect(() => {
    setFootPrints(
      stepData.slice(0, 2).map((step, idx) => {
        step.key = label + '-step-' + idx;
        step.isLeftFoot = idx % 2 === 0;
        return step;
      })
    );
  }, [stepData]);

  useEffect(() => {
    if (footPrints.length) {
      const incrementStep = idx => {
        const delay = footPrints[0].delay;
        const nextStep = stepData[idx];
        const nextLabel = {
          x: Number(nextStep.x) - 20,
          y: Number(nextStep.y) + 20,
        };
        nextStep.isLeftFoot = idx % 2 === 0;
        nextStep.key = label + '-step-' + idx;
        delayRef.current = setTimeout(() => {
          setFootPrints(prev => [prev[1], nextStep]);
          setLabelPos(nextLabel);
          setNextIdx(prev => (prev === 99 ? 0 : prev + 1));
        }, delay);
      };
      incrementStep(nextIdx);
    }
    return () => clearTimeout(delayRef.current);
  }, [nextIdx, footPrints]);

  return (
    <svg
      id='steps'
      className='absolute'
      viewBox='0 0 300 200'
      height='100%'
      stroke='purple'
    >
      <defs>
        <symbol
          id='pointer'
          viewBox='0 0 30 30'
          strokeWidth='1'
          style={{ transformOrigin: 'center' }}
        >
          <circle cx='15' cy='15' r='14' fill='lightGray' />
          <polygon points='15,2 20,7 10,7' fill='orange' />
        </symbol>
      </defs>
      {/* <rect x='75' y='50' width='150' height='75' fillOpacity={0.2} /> */}
      <AnimatePresence>
        {footPrints.map(({ x, y, rotate, key, isLeftFoot }) => (
          <BootPrint
            x={x}
            y={y}
            rotate={rotate}
            isLeftFoot={isLeftFoot}
            key={key}
          />
        ))}
        {footPrints.length && (
          <Ribbon x={labelPos.x} y={labelPos.y} label={label} />
        )}
      </AnimatePresence>
    </svg>
  );
}
