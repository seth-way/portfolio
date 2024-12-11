import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Airplane from '@/components/misc/svgs/Airplane';
import Paratrooper from '@/components/misc/svgs/Paratrooper';

const AirborneOp = ({ isOpen, handleClose, jumps }) => {
  const cardRef = useRef(null);
  const airplaneRef = useRef(null);
  const throttler = useRef(0);
  const [dir, setDir] = useState('ltr');
  const [paratroopers, setParatroopers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      changeDir();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isOpen) setParatroopers([]);
  }, [isOpen]);

  const changeDir = () => setDir(prev => (prev === 'ltr' ? 'rtl' : 'ltr'));
  // determines where to place new paratrooper svg
  const calculateLeft = (planeLeft, cardLeft, cardWidth) =>
    dir === 'ltr'
      ? planeLeft - cardLeft
      : planeLeft - cardLeft + 0.15 * cardWidth;
  // checks if paratrooper will be in view if dropped
  const isGreenLight = (planeLeft, planeRight, cardLeft, cardRight) =>
    dir === 'ltr'
      ? planeLeft > cardLeft && planeLeft < cardRight
      : planeRight < cardRight && planeRight > cardLeft;

  const addParatrooper = () => {
    if (isOpen && cardRef.current && airplaneRef.current) {
      const now = Date.now();

      if (now - throttler.current > 200) {
        throttler.current = now;

        const { left: planeLeft, right: planeRight } =
          airplaneRef.current.getBoundingClientRect();

        const {
          left: cardLeft,
          right: cardRight,
          width: cardWidth,
        } = cardRef.current.getBoundingClientRect();

        if (isGreenLight(planeLeft, planeRight, cardLeft, cardRight)) {
          const left = calculateLeft(planeLeft, cardLeft, cardWidth);
          setParatroopers(prevParatroopers => [
            ...prevParatroopers,
            { id: Date.now(), left },
          ]);
        }
      }
    }
  };

  return (
    <motion.div
      onClick={addParatrooper}
      ref={cardRef}
      className='absolute inset-0 z-20'
    >
      <motion.h3
        animate={
          paratroopers.length >= jumps
            ? {
                scale: [1.05, 0.95, 1.05, 0.95, 1],
                color: ['#32c4c8', '#32c4c8', '#32c4c8', '#32c4c8', '#FFFFFF'],
              }
            : {}
        }
        transition={{ duration: 1, ease: 'easeInOut' }}
        className={`mt-1 transition-opacity duration-500 select-none text-white ${
          isOpen ? 'opacity-1' : 'opacity-0'
        }`}
      >
        <span
          className={`${
            paratroopers.length ? 'text-primary_C' : 'text-gray-400'
          }`}
        >
          {paratroopers.length}
        </span>{' '}
        Troopers Deployed
      </motion.h3>
      {isOpen && (
        <X
          color='white'
          onClick={handleClose}
          className='absolute right-1.5 top-1.5 hover:cursor-pointer z-[21]'
        />
      )}
      <Airplane airplaneRef={airplaneRef} dir={dir} />
      {isOpen && !paratroopers.length && (
        <h4 className='text-secondary_C max-w-[50%] m-auto mt-[20%]'>
          tap card to drop paratroopers
        </h4>
      )}
      <div className='absolute bottom-0 w-full h-2.5 bg-black z-20'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-full h-full'
          viewBox='0 0 100 10'
          preserveAspectRatio='none'
        >
          <rect x='0' y='0' width='100' height='10' fill='#1A1A1A' />
        </svg>
      </div>
      {paratroopers.map(paratrooper => (
        <Paratrooper key={paratrooper.id} left={paratrooper.left} dir={dir} />
      ))}
    </motion.div>
  );
};

export default AirborneOp;
