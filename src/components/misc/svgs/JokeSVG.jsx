import AIMSVG from '@/components/misc/svgs/AIM';
import BlockbusterSVG from '@/components/misc/svgs/BlockBuster';
import JurassicSVG from '@/components/misc/svgs/Jurassic';
const JokeSVG = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 300 200"
			fill="none"
			strokeLinecap="round"
			height="100%"
			width="100%"
			className="relative overflow-visible">
			<JurassicSVG />
			<BlockbusterSVG />
			<AIMSVG />
		</svg>
	);
};

export default JokeSVG;
