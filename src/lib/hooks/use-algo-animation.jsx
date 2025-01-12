import { useEffect, useRef } from 'react';

export function useAlgoAnimation(interval) {
	const animations = useRef([]);
	const idxRef = useRef(0);
	const id = useRef(null);

	function play() {
		if (id.current) clearInterval(id.current);

		const intervalId = setInterval(() => {
			if (animations.current && idxRef.current >= animations.current.length) {
				idxRef.current = 0;
				clearInterval(id.current);
				id.current = null;
			} else if (id.current) {
				animations.current[idxRef.current]();
				idxRef.current += 1;
			}
		}, interval);

		id.current = intervalId;
	}

	function pause() {
		clearInterval(id.current);
	}

	function rewind() {
		clearInterval(id.current);
		idxRef.current = 0;
	}

	function add(newAnimation) {
		animations.current.push(() => {
			newAnimation(idxRef.current);
		});
	}

	function reset() {
		animations.current = [];
		idxRef.current = 0;
		if (id.current) clearInterval(id.current);
	}

	useEffect(() => {
		return () => {
			if (id.current) clearInterval(id.current);
		};
	}, []);

	return { play, pause, rewind, add, reset };
}
