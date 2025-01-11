import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const COLS = 48;
const initialBars = Array.from({ length: COLS }, (_, index) => ({
  id: index,
  delay: (Math.abs(index - 24) / 24) * 0.25,
  animate: { scaleX: 1.1, scaleY: 1.1 },
}));
const increment = val => {
  const randomChange = Math.random() * 0.4 - 0.1;
  const newValue = val + randomChange;

  return Math.max(newValue, 0);
};
const decrement = val => {
  const randomChange = Math.random() * 0.4 - 0.1;
  const newValue = val - randomChange;

  return Math.min(Math.max(newValue, 0), 1.1);
};

const Bars = ({ image, timing }) => {
  const [animation, setAnimation] = useState('reveal');
  const [bars, setBars] = useState([...initialBars]);
  const { transition, display } = timing;

  useEffect(() => {
    let interval;
    if (animation === 'reveal') {
      interval = setInterval(() => {
        const finished = bars.every(bar => bar.animate.scaleY === 0);
        if (!finished) decrementBars();
      }, 300);

      setTimeout(() => {
        revealAllBars();
        setTimeout(() => {
          setAnimation('hide');
          clearInterval(interval);
        }, display * 1000);
      }, transition * 1000);
    } else {
      interval = setInterval(() => {
        const finished = bars.every(bar => bar.animate.scaleY === 1.1);
        if (!finished) incrementBars();
      }, 300);

      setTimeout(() => {
        hideAllBars();
        clearInterval(interval);
      }, transition * 1000);
    }
    return () => clearInterval(interval);
  }, [animation]);

  const incrementBars = () => {
    setBars(prev =>
      prev.map(bar =>
        bar.animate.scaleY === 1.1
          ? bar
          : {
              ...bar,
              animate: { scaleX: 1.1, scaleY: increment(bar.animate.scaleY) },
            }
      )
    );
  };

  const decrementBars = () => {
    setBars(prev =>
      prev.map(bar =>
        bar.animate.scaleY
          ? {
              ...bar,
              animate: { scaleX: 1.1, scaleY: decrement(bar.animate.scaleY) },
            }
          : bar
      )
    );
  };
  const revealAllBars = () =>
    setBars(prev =>
      prev.map(bar => ({ ...bar, animate: { scaleX: 1.1, scaleY: 0 } }))
    );
  const hideAllBars = () =>
    setBars(prev =>
      prev.map(bar => ({ ...bar, animate: { scaleX: 1.1, scaleY: 1.1 } }))
    );

  return (
    <div className='relative w-full h-full overflow-hidden select-none'>
      <div className='absolute inset-0 grid grid-rows-2 grid-cols-48 select-none'>
        {bars.map(item => (
          <motion.div
            key={`bar-top-${item.id}`}
            className='bg-card w-full h-full select-none'
            initial={{}}
            animate={item.animate}
            transition={{
              type: 'spring',
              damping: 8,
              stiffness: 200,
              delay: item.delay,
            }}
            style={{ transformOrigin: 'top center' }}
          />
        ))}
        {bars.map(item => (
          <motion.div
            key={`bar-bot-${item.id}`}
            className='bg-card w-full h-full select-none'
            initial={{ scaleX: 1.2, scaleY: 1.2 }}
            animate={item.animate}
            transition={{
              type: 'spring',
              damping: 8,
              stiffness: 200,
              delay: item.delay,
            }}
            style={{ transformOrigin: 'bottom center' }}
          />
        ))}
      </div>
      <img src={image} alt='' className='w-full h-full object-cover' />
    </div>
  );
};

export default Bars;
