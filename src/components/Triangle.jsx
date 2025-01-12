import { useEffect, useRef } from 'react';

const Triangle = ({ width, height, depth = 0 }) => {
	const ref = useRef(null);
	const moreRef = useRef(null);
	const delay = Math.floor(Math.random() * 50) / 40;

	useEffect(() => {
		if (ref.current) {
			const { current } = ref;
			current.style.setProperty('--delay', delay + 's');
		} else if (moreRef.current) {
			moreRef.current.style.setProperty('--height', `${height}px`);
			moreRef.current.style.setProperty('--width', `${width}px`);
		}
	}, [width, height, delay]);

  const type = getTriangleType(depth)

	return type === 1 ? (
		<svg
			className={'triangle-svg' + ' depth-' + depth}
			ref={ref}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 68 68"
			fill="none"
			strokeWidth={depth + 1}
			strokeLinecap="round"
			stroke="currentColor"
			height={height}
			width={width}>
			<line x1="8" y1="49" x2="34" y2="4" />
			<line x1="14" y1="49" x2="37" y2="9.19" />
			<line x1="20" y1="49" x2="40" y2="14.38" />
			<line x1="26" y1="49" x2="43" y2="19.57" />
			<line x1="32" y1="49" x2="46" y2="24.77" />
			<line x1="38" y1="49" x2="49" y2="29.96" />
			<line x1="44" y1="49" x2="52" y2="35.15" />
			<line x1="50" y1="49" x2="55" y2="40.34" />
			<line x1="56" y1="49" x2="58" y2="45.53" />
		</svg>
	) : type === 2 ? (
		<div ref={moreRef} className="more-triangles relative h-[var(--height)] w-[var(--width)]">
			<div className="absolute h-1/2 w-1/2 left-[5.88%] bottom-[13.97%]">
				<Triangle height={height / 2} width={width / 2} depth={depth + 1} />
			</div>
			<div className="absolute h-1/2 w-1/2 right-[5.88%] bottom-[13.97%]">
				<Triangle height={height / 2} width={width / 2} depth={depth + 1} />
			</div>
			<div className="absolute h-1/2 w-1/2 left-1/4 top-[2.94%]">
				<Triangle height={height / 2} width={width / 2} depth={depth + 1} />
			</div>
		</div>
	) : (
		<div ref={moreRef} className="more-triangles relative h-[var(--height)] w-[var(--width)]"></div>
	);
};

export default Triangle;

function getTriangleType(depth) {
	if (depth < 2) return [0, 1, 1, 2, 2][Math.floor(Math.random() * 5)];
	return [0, 1][Math.floor(Math.random(Math.floor) * 2)];
}
