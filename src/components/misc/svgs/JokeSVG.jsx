import BlockbusterSVG from '@/components/misc/svgs/Blockbuster';
import DinoSVG from '@/components/misc/svgs/DinoSVG';
const JokeSVG = ({ animate }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 300 200'
      fill='none'
      strokeLinecap='round'
      height='100%'
      width='100%'
      className='absolute inset-0 overflow-visible'
    >
      <DinoSVG animate={animate} />
      <BlockbusterSVG animate={animate} />
    </svg>
  );
};

export default JokeSVG;
