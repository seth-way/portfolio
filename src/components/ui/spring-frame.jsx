import { useState } from 'react';
import { motion } from 'motion/react';

const Frame = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => setIsActive(true);
  const handleInactive = () => setIsActive(false);
  return (
    <motion.div
      onHoverStart={handleActive}
      onHoverEnd={handleInactive}
      onTapStart={handleActive}
      onTapCancel={handleInactive}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring' }}
      className={
        'absolute inset-[4%] border rounded-lg pointer-events-auto ' +
        (isActive ? 'border-white/30' : 'border-white/30')
      }
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring' }}
        className={
          'absolute inset-[4%] border rounded-lg ' +
          (isActive ? 'border-white/50' : 'border-white/40')
        }
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring' }}
          className={
            'overflow-hidden absolute inset-[4%] border rounded-lg ' +
            (isActive ? 'border-white/70' : 'border-white/50')
          }
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Frame;
