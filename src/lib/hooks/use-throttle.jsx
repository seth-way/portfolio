import { useRef, useCallback } from 'react';

export default function useThrottle(callback, delay) {
	const lastCall = useRef(0); // Track the last execution time
	const timeout = useRef(null); // Track the timeout ID

	const throttledFunction = useCallback(
		(...args) => {
			const now = Date.now();
			const timeSinceLastCall = now - lastCall.current;

			if (timeSinceLastCall >= delay) {
				lastCall.current = now;
				callback(...args);
			} else if (!timeout.current) {
				const remainingTime = delay - timeSinceLastCall;
				timeout.current = setTimeout(() => {
					lastCall.current = Date.now();
					timeout.current = null;
					callback(...args);
				}, remainingTime);
			}
		},
		[callback, delay]
	);

	const cleanup = useCallback(() => {
		if (timeout.current) {
			clearTimeout(timeout.current);
			timeout.current = null;
		}
	}, []);

	return { throttledFunction, cleanup };
}
