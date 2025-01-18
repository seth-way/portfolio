import { useState, useEffect } from 'react';
import Steps from '@/components/misc/svgs/Steps';
export default function Map({ isOpen }) {
	return (
		<div className="relative h-full w-full flex items-center justify-center border-2 border-[#330000] rounded-xl">
			<Steps />
			<div className="w-1/2 h-1/5 bg-white rounded bg-[#A27A3D] border-2 border-[#330000]" />
		</div>
	);
}
