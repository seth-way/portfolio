import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import BootPrint from '@/components/misc/svgs/BootPrint';

export default function Steps({ path, character }) {
	return (
		<div className="absolute inset-0">
			<BootPrint />
		</div>
	);
}
