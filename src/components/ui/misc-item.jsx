import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Item = ({ children }) => {
  return (
    <motion.div
      className='h-[calc(min(300px,80vw)*2/3)] aspect-[3/2] hover:cursor-pointer select-none'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring' }}
    >
      <Card className='h-full w-full overflow-hidden relative'>{children}</Card>
    </motion.div>
  );
};

export default Item;
