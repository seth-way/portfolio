import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { PlayCircle, PauseCircle } from 'lucide-react';
import Paw from '@/components/misc/svgs/Paw';
import Bars from '@/components/misc/transitions/Bars';
import Cubic from '@/components/misc/transitions/Cubic';
import Dots from '@/components/misc/transitions/Dots';
const images = import.meta.glob('@/assets/images/bear/*.jpg', { eager: true });
const bearImages = Object.values(images);

const TIMING = {
  transition: 2.5,
  display: 1.25,
};

TIMING.total = TIMING.transition * 2 + TIMING.display;

const transitions = [
  img => <Cubic image={img} timing={TIMING} />,
  img => <Dots image={img} timing={TIMING} />,
  img => <Bars image={img} timing={TIMING} />,
];

const Slideshow = () => {
  const [animate, setAnimate] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [location, setLocation] = useState({ x: 0, y: 0 });
  const [slide, setSlide] = useState({ img: 0, transition: 0 });
  const [pawPrints, setPawPrints] = useState([]);
  const cardRef = useRef(null);
  const intervalRef = useRef(null);
  const throttleRef = useRef(0);

  useEffect(() => {
    if (!animate) return clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, TIMING.total * 1100);

    return () => clearInterval(intervalRef.current);
  }, [animate]);

  const nextSlide = () =>
    setSlide(({ img, transition }) => ({
      img: (img + 1) % bearImages.length,
      transition: (transition + 1) % transitions.length,
    }));

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseMove = event => {
    if (hovered && cardRef.current) {
      const { left, top, height } = cardRef.current.getBoundingClientRect();
      const pawSize = 0.075 * height;
      setLocation(() => ({
        x: event.clientX - left - pawSize,
        y: event.clientY - top - pawSize,
      }));
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setAnimate(prev => !prev);
  };

  const addPawPrint = () => {
    const newPrint = {
      id: Date.now(),
      location: { ...location },
    };

    setPawPrints(prev => [...prev, newPrint]);
    return newPrint.id;
  };

  const removePawPrint = id => {
    setPawPrints(prev => prev.filter(print => print.id !== id));
  };

  const handleAddPrint = () => {
    if (!hovered) return;

    const now = Date.now();

    if (now - throttleRef.current > 200) {
      throttleRef.current = now;
      const id = addPawPrint();
      setTimeout(() => {
        removePawPrint(id);
      }, 2000);
    }
  };

  return (
    <div
      className='h-full w-full relative flex items-center justify-center hover:cursor-none'
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleAddPrint}
      ref={cardRef}
    >
      <div className='absolute inset-0 flex flex-col items-center justify-center gap-2 select-none'>
        <h3 className='text-lg max-w-[80%]'>
          Bear-Doggy is my best pal and the goodest of good boys! ❤️ 🐾
        </h3>
      </div>
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring' }}
        className='absolute h-[15%] aspect-square right-1 top-1 pointer-events-auto z-30 text-primary_C bg-card rounded-full p-1.5'
        onClick={handleClick}
      >
        {animate ? (
          <PauseCircle className='h-full w-full' />
        ) : (
          <PlayCircle className='h-full w-full' />
        )}
      </motion.div>
      {animate && (
        <div className='absolute inset-3 rounded overflow-hidden'>
          {transitions[slide.transition](bearImages[slide.img].default)}
        </div>
      )}
      {hovered && <Paw location={location} variant='primary' />}
      {pawPrints.map(({ id, location }) => (
        <Paw key={id} location={location} variant='print' fade={true} />
      ))}
    </div>
  );
};

export default Slideshow;
