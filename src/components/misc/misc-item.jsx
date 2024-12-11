import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Item = ({ children }) => {
	return (
		<motion.div
			className="h-[calc(min(200px,90vw)*3/2)] aspect-[3/2] hover:cursor-pointer"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: 'spring' }}>
			<Card className="h-full w-full overflow-hidden relative">{children}</Card>
		</motion.div>
	);
};

export default Item;
